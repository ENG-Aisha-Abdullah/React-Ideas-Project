import React from "react";
import Nav from "../component/Nav";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

function AdminStudents() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [searchName, setSearchName] = useState("");

  const AddStudent = async () => {
    if (!email.trim() || !name.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all the fields please",
      });
      return;
    }
    try {
      await axios.post(
        "https://684a055545f4c0f5ee7369f6.mockapi.io/IdeasProjectUsers",
        {
          name,
          email,
          role: "student",
        }
      );
      Swal.fire("Success", "Student is added", "success");
      setStudents([...students, { name, email, role: "student" }]);
      setName("");
      setEmail("");
    } catch (error) {
      Swal.fire("Error", "Student added failed ", "error");
    }
  };

  useEffect(() => {
    const showStudents = async () => {
      try {
        const res = await axios.get(
          "https://684a055545f4c0f5ee7369f6.mockapi.io/IdeasProjectUsers"
        );
        setStudents(res.data);
      } catch (error) {
        Swal.fire("Error", "Failed to get students", "error");
      }
    };
    showStudents();
  }, []);

  const searchItems = students.filter((student) =>
    student.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const deleteStudent = async (id) => {
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
          `https://684a055545f4c0f5ee7369f6.mockapi.io/IdeasProjectUsers/${id}`
        );
        setStudents(students.filter((student) => student.id !== id));
        Swal.fire("Deleted!", "Student has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error", "Failed to delete student", "error");
      }
    }
  };

  return (
    <>
      <div className="flex">
        <Nav />
      </div>
      <div className="p-8 flex-1 bg-gray-200">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800 flex justify-center">
            Add New Student
          </h1>
          <div className="flex flex-col gap-2 mt-5 w-full max-w-md mx-auto">
            <div className="flex gap-2 items-center ">
              <FaRegUser className="text-gray-800 text-lg" />
              <input
                type="text"
                placeholder="Student Name"
                className="bg-white rounded items-center px-3 py-1 outline-gray-700 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center ">
              <MdAlternateEmail className="text-gray-800 text-lg" />
              <input
                type="text"
                placeholder="Student Email"
                className="bg-white rounded items-center px-3 py-1 outline-gray-700 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              onClick={AddStudent}
              className="flex justify-center font-bold p-2 text-gray-200 bg-gray-600 rounded hover:text-gray-100 hover:bg-green-800 hover:p-2.5 ease-in-out transition-all cursor-pointer"
            >
              Add Student
            </button>
          </div>
          <hr className="mt-10 border-gray-300 " />

          <div className="mt-5">
            <h1 className="text-2xl font-bold text-gray-800">All Students</h1>
          </div>

          <input
            type="search"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Search by Student Name"
            className="bg-white rounded items-center px-3 py-1 outline-gray-700 mt-2 mb-4"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
            {searchItems
              .filter((student) => student.role === "student")
              .map((student) => (
                <div key={student.id} className="bg-white shadow p-4 rounded">
                  <h2 className="text-lg font-semibold">{student.name}</h2>
                  <p className="text-gray-600">{student.email}</p>
                  <div className="flex justify-between items-center mt-8">
                    <p className="text-gray-600 mt-2 rounded-xl bg-amber-200 w-fit px-2 text-xs">
                      {student.role}
                    </p>
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="flex justify-center font-bold p-2 text-gray-200 bg-gray-600 rounded hover:text-gray-100 hover:bg-red-800 hover:p-2.5 ease-in-out transition-all cursor-pointer"
                    >
                      Delete Student
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminStudents;
