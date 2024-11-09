import React from 'react'

function ProductModal({modal, onClose}:any) {

    if(!modal) return null
  return (
<div >
    <button onClick={onClose}>close</button>
    <div className='fixed top-[20%] left-[40%] z-10 p-4 w-[30%] bg-white'>
       <form className="p-4">
            <h2 className="text-xl font-semibold mb-4">Create Product</h2>
            <label className="block mb-2">
              Product Name:
              <input type="text" className="border rounded w-full p-2" />
            </label>
            <label className="block mb-2">
              Description:
              <textarea className="border rounded w-full p-2" />
            </label>
            <label className="block mb-2">
              Price:
              <input type="number" className="border rounded w-full p-2" />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2"
            >
              Submit
            </button>
          </form>
    </div>
    </div>
  )
}

export default ProductModal
