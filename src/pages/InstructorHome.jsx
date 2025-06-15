import React from "react";
import NavBarSudents from "../component/NavBarSudents";
import { Link } from "react-router";
function InstructorHome() {
  return (
    <>
   <div className="h-screen bg-gray-200 flex flex-col items-center">
        <div className="w-screen">
          <NavBarSudents />
        </div>
  
        <div className="p-8 flex flex-col gap-2 items-center justify-center mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-bold text-gray-800">Instructor Home</h1>
            <p className="text-gray-600 mt-2">
              Click the button below to Quick Action.
            </p>
          </div>
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 mt-5 justify-center ">
     
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between gap-1">
          
              <h2 className="text-xl font-bold text-gray-800 my-2">
                Start Exploring Ideas
              </h2>
              <p className="text-gray-600 mt-2">
                Click the button below to explore project ideas and find
                inspiration for your next project.
              </p>
              <Link to="/instructorManageIdeas">
                <button className="flex justify-center font-bold p-2 text-gray-200 bg-gray-600 rounded hover:text-gray-100 hover:bg-green-900 hover:p-2.5 ease-in-out transition-all cursor-pointer">
                  Explore Ideas
                </button>
              </Link>
            </div>
      
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between ">
              <h2 className="text-xl font-bold text-gray-800 my-2">
                View Your Students
              </h2>
              <p className="text-gray-600 mt-2">
                Click the button below to view your team members.
              </p>
              <Link to="/ideaTeam">
                <button className="flex justify-center font-bold p-2  text-gray-200 bg-gray-600 rounded hover:text-gray-100 hover:bg-green-900 hover:p-2.5 ease-in-out transition-all cursor-pointer">
                 Students idea
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
  

export default InstructorHome