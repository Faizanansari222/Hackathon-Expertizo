import React, { useEffect, useState } from "react";
import Upcomming from "./Upcomming";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import Image from "next/image";

function YouMightLike() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [sentRequests, setSentRequests] = useState<any>([]);
  const [incomingRequest, setIncomingRequest] = useState<any>(null);
  const [friends, setFriends] = useState<any>([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!currentUser) return;
    const userRef = doc(db, "userFromGoogle", currentUser.uid);
    const unsubscribe = onSnapshot(userRef, (doc: any) => {
      const userData: any = doc.data();
      setSentRequests(
        userData.friendRequests
          ?.filter(
            (req: any) =>
              req.status === "pending" && req.from === currentUser.uid
          )
          .map((req: any) => req.to) || []
      );
      setIncomingRequest(
        userData.friendRequests?.find(
          (req: any) => req.status === "pending" && req.to === currentUser.uid
        ) || null
      );
      setFriends(userData.friends || []);
    });

    return () => unsubscribe();
  }, [currentUser]);
  const sendFriendRequest = async (receiverUid: any) => {
    if (!currentUser) return;
    const userRef = doc(db, "users", currentUser.uid);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      if (
        userData.friendRequests?.some(
          (req: any) => req.to === receiverUid && req.status === "pending"
        )
      ) {
        alert("Friend request already sent!");
        return;
      }
      await updateDoc(userRef, {
        friendRequests: arrayUnion({
          to: receiverUid,
          status: "pending",
          from: currentUser.uid,
          fromName: currentUser.name,
          fromPhoto: currentUser.photo,
        }),
      });
      const receiverRef = doc(db, "users", receiverUid);
      await updateDoc(receiverRef, {
        friendRequests: arrayUnion({
          to: receiverUid,
          status: "pending",
          from: currentUser.uid,
          fromName: currentUser.name,
          fromPhoto: currentUser.photo,
        }),
      });
    }
  };
  const acceptFriendRequest = async (senderUid: any) => {
    if (!currentUser) return;

    const receiverRef = doc(db, "users", currentUser.uid);
    const senderRef = doc(db, "users", senderUid);

    // Step 1: Get the current user and sender's data
    const receiverSnapshot = await getDoc(receiverRef);
    const senderSnapshot = await getDoc(senderRef);

    if (receiverSnapshot.exists() && senderSnapshot.exists()) {
      const receiverData = receiverSnapshot.data();
      const senderData = senderSnapshot.data();

      // Step 2: Get the pending request at index 0 for receiver
      const requestToUpdate = receiverData.friendRequests[0];

      if (requestToUpdate && requestToUpdate.status === "pending") {
        // Step 3: Update both users' friend requests to 'accepted' at index 0
        // Update receiver's friend request status
        const updatedReceiverRequests = receiverData.friendRequests.map(
          (req: any, index: any) =>
            index === 0 ? { ...req, status: "accepted" } : req
        );

        await updateDoc(receiverRef, {
          friendRequests: updatedReceiverRequests,
          friends: arrayUnion(senderUid), // Add sender to receiver's friend list
        });

        // Update sender's friend request status and add receiver to sender's friends
        const updatedSenderRequests = senderData.friendRequests.map(
          (req: any) =>
            req.to === currentUser.uid && req.status === "pending"
              ? { ...req, status: "accepted" }
              : req
        );

        await updateDoc(senderRef, {
          friendRequests: updatedSenderRequests,
          friends: arrayUnion(currentUser.uid), // Add receiver to sender's friend list
        });

        // Step 4: Update the UI
        setFriends((prevFriends: any) => [...prevFriends, senderUid]);
      }
    }
  };
  const rejectFriendRequest = async (senderUid: any) => {
    try {
      const receiverRef = doc(db, "users", currentUser.uid);
      const senderRef = doc(db, "users", senderUid);
      await updateDoc(receiverRef, {
        friendRequests: [],
      });
      await updateDoc(senderRef, {
        friendRequests: [],
      });
    } catch (error) {
      console.error("Error rejecting friend request:", error);
    }
  };

  return (
    <>
      <div className="fixed  col-span-2 w-[22%]">
        <div className=" mt-20 bg-white w-full   mx-5 rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center   mb-2">
            <h1 className="text-sm font-medium text-[#5c5c5c]">
              You might like
            </h1>
            <button className="text-blue-500 text-xs font-medium">
              see more
            </button>
          </div>
          <div className="">
            {users.map((user: any) => (
              <div key={user.id} className="">
                <div className="">
                  <Image
                    src={user.photo || "/default-avatar.jpg"}
                    alt={user.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="">{user.name}</div>
                {sentRequests.includes(user.id) ? (
                  <button className="" disabled>
                    Request Sent
                  </button>
                ) : incomingRequest && incomingRequest.from === user.id ? (
                  <>
                    <button
                      className={`$'' $''`}
                      onClick={() => acceptFriendRequest(user.id)}
                    >
                      Accept
                    </button>
                    <button
                      className={`$'' $''`}
                      onClick={() => rejectFriendRequest(user.id)}
                    >
                      Reject
                    </button>
                  </>
                ) : friends.includes(user.id) ? (
                  <button className="" disabled>
                    Friends
                  </button>
                ) : (
                  <button
                    className=""
                    onClick={() => sendFriendRequest(user.id)}
                  >
                    Add Friend
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <Upcomming />
      </div>
    </>
  );
}

export default YouMightLike;
