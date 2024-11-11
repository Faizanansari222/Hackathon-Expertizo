import { auth } from "@/config/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { NextResponse } from "next/server"
import { useState } from "react";


export default function middleware  (req:any){
    const [user, setUser] = useState(null);
onAuthStateChanged(auth, (user) => {
    if (!user) {
        if (req.nextUrl.pathname !== '/login' ) 
        return NextResponse.redirect(new URL('/login', req.url))
    }
    
})
console.log(user);
    
} 