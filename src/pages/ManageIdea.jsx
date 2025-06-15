import React from 'react'
import NavBarSudents from '../component/NavBarSudents'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


function ManageIdea() {
    const [ideaSubject,setIdeaSubject] = useState("");
    const [ideaContent,setIdeaContent] = useState("");
    const [email, setEmail] = useState("");


 const AddIdea = async () => {
    if (!ideaSubject.trim() || !ideaContent.trim() || !email.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all the fields please",
      });
      return;
    }
    try {
      await axios.post('https://684a055545f4c0f5ee7369f6.mockapi.io/ideas', {
        ideaSubject,
        ideaContent,
        status : "Waiting"
      });
      await axios.get('https://684a055545f4c0f5ee7369f6.mockapi.io/IdeasProjectUsers', {
        email
      });

      Swal.fire("Success", "Idea Send successfully", "success");
    } catch (error) {
      Swal.fire("Error", "Failed to Send idea", "error");
    }
  }


  // .......    function >> to Search for the instructor email .......



  return (
      <>
      <div className="h-screen bg-gray-200 flex flex-col items-center justify-start">
        <div className="w-screen">
          <NavBarSudents />
        </div>
        <div className="p-8 flex flex-col gap-2 w-screen ">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-bold text-gray-800">Add New Idea</h1>
            <p className="text-gray-600 mt-2">
              Fill in the details below to add a new project idea.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <input
              type="text"
              placeholder="Idea Subject"
              value={ideaSubject}
              onChange={(e) => setIdeaSubject(e.target.value)}
              className="bg-white rounded items-center px-3 py-1 outline-gray-700"
            />
            <textarea
              placeholder="Idea Content"
              value={ideaContent}
              onChange={(e) => setIdeaContent(e.target.value)}
                className="bg-white rounded items-center px-3 py-1 outline-gray-700"
            />
            <input
              type="email"
              placeholder="Instrutor Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            className="bg-white rounded items-center px-3 py-1 outline-gray-700"
            />
            
            <button
              onClick={AddIdea}
        className="flex justify-center font-bold p-2 text-gray-200 bg-gray-700 rounded hover:text-gray-100 hover:bg-green-900 hover:p-2.5 ease-in-out transition-all cursor-pointer">
              Send Idea
            </button>
          </div>
        </div>
        </div>
        </>

  )
}

export default ManageIdea