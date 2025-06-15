import React from 'react'
import NavBarSudents from '../component/NavBarSudents'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

function ExploreIdeas() {
    const [ideas, setIdeas] = useState([]);

   useEffect(() => {
  const showIdeas = async () => {
    try {
      const res = await axios.get('https://684a055545f4c0f5ee7369f6.mockapi.io/ideas');
      setIdeas(res.data);
    } catch (error) {
      Swal.fire("Error", "get ideas Failed", "error");
    }
  };

  showIdeas();
}, []);

    
  return (
      <>
      <div className="h-screen bg-gray-200 flex flex-col items-center justify-start">
        <div className="w-screen">
          <NavBarSudents />
        </div>
       <h1 className="text-2xl font-bold text-gray-800">ExploreIdeas</h1>
        <div className="p-8 flex flex-col gap-2 w-screen ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
            {ideas.map((idea) => (
              <div key={idea.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between gap-1">
                <h2 className="text-xl font-bold text-gray-800 my-2">{idea.ideaSubject}</h2>
                <p className="text-gray-600 mt-2">{idea.ideaContent}</p>
                <p className="text-gray-600 mt-2 rounded-2xl bg-amber-200 w-fit px-2 text-xs">{idea.status}</p>


              </div>
            ))}
          </div>
 </div>
        </div>
        </>
  )
}

export default ExploreIdeas