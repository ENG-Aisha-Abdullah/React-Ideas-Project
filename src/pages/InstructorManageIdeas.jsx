import React from "react";
import NavBarSudents from "../component/NavBarSudents";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
function InstructorManageIdeas() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const showIdeas = async () => {
      try {
        const res = await axios.get(
          "https://684a055545f4c0f5ee7369f6.mockapi.io/ideas"
        );
        setIdeas(res.data);
      } catch (error) {
        Swal.fire("Error", "Failed to get ideas", "error");
      }
    };

    showIdeas();
  }, []);

  const DeleteItems = async (id) => {
    const ConfirmDelete = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (ConfirmDelete.isConfirmed) {
      try {
        await axios.delete(
          `https://684a055545f4c0f5ee7369f6.mockapi.io/ideas/${id}`
        );
        Swal.fire("success", "Idea is deleted", "success");

        setIdeas(ideas.filter((item) => item.id !== id));
      } catch (error) {
        Swal.fire("Error", "Deleted idea is fieled ", "error");
      }
    }
  };

  const AcceptItems = async (id) => {
    const ConfirmAccept = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, accept it!",
    });
    if (ConfirmAccept.isConfirmed) {
      try {
        await axios.put(
          `https://684a055545f4c0f5ee7369f6.mockapi.io/ideas/${id}`,
          { status: "Accepted" }
        );
        Swal.fire("Success", "Idea is accepted", "success");

        setIdeas(
          ideas.map((item) =>
            item.id === id ? { ...item, status: "Accepted" } : item
          )
        );
      } catch (error) {
        Swal.fire("Error", "Failed to accept idea", "error");
      }
    }
  };
  const RejectItems = async (id) => {
    const ConfirmReject = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject it!",
    });
    if (ConfirmReject.isConfirmed) {
      try {
        await axios.put(
          `https://684a055545f4c0f5ee7369f6.mockapi.io/ideas/${id}`,
          { status: "Rejected" }
        );
        Swal.fire("Success", "Idea is rejected", "success");

        setIdeas(
          ideas.map((item) =>
            item.id === id ? { ...item, status: "Rejected" } : item
          )
        );
      } catch (error) {
        Swal.fire("Error", "Failed to reject idea", "error");
      }
    }
  };

  return (
    <>
      <div className="h-screen bg-gray-200 flex flex-col items-center">
        <div className="w-screen">
          <NavBarSudents />
        </div>
        <div className="p-8 flex-1 bg-gray-200 ">
          <h1 className="text-2xl font-bold text-gray-800">Explore Ideas</h1>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
              {ideas.map((idea) => (
                <div
                  key={idea.id}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between gap-1"
                >
                  <h2 className="text-xl font-bold text-gray-800 my-2">
                    {idea.ideaSubject}
                  </h2>
                  <p className="text-gray-600 mt-2">{idea.ideaContent}</p>
                  <button
                    onClick={() => AcceptItems(idea.id)}
                    className="flex justify-center font-bold p-2 text-gray-200 bg-gray-600 rounded hover:text-gray-100 hover:bg-green-800 hover:p-2.5 ease-in-out transition-all cursor-pointer"
                  >
                    Accept Idea
                  </button>

                  <button
                    onClick={() => RejectItems(idea.id)}
                    className="flex justify-center font-bold p-2 text-gray-200 bg-gray-600 rounded hover:text-gray-100 hover:bg-red-800 hover:p-2.5 ease-in-out transition-all cursor-pointer"
                  >
                    Reject Idea
                  </button>
                  <button
                    onClick={() => DeleteItems(idea.id)}
                    className="flex justify-center font-bold p-2 text-gray-200 bg-gray-600 rounded hover:text-gray-100 hover:bg-red-800 hover:p-2.5 ease-in-out transition-all cursor-pointer"
                  >
                    Delete Idea
                  </button>

                  <p className="text-gray-600 mt-2 rounded-xl bg-amber-200 w-fit px-2 text-xs">
                    {idea.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorManageIdeas
