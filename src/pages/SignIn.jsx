import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
// const Admin =   {
//     "name": "Admin",
//     "email": "admin@admin.com",
//     "password": "admin@123",
//     "role": "admin",
//     "id": "1"
// };
  const LogInHandle = async () => {
    if (!email.trim() || !password.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all the fields please ",
      });
      return;
    }
    if (email === "admin@admin.com" && password === "admin@123") {
      
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Logged is success",
      }).then(() => {
        navigate("/adminHome");
      });
      return;
    }


    try {
      const res = await axios.get(
        "https://684a055545f4c0f5ee7369f6.mockapi.io/IdeasProjectUsers"
      );
      const users = res.data;

      const foundUser = users.find(
        (user) => user.email === email && user.password === password 
      );

      if (!foundUser) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Email or Password is incorrect ",
        });
        return;
      }

      // Store user data in localStorage
      localStorage.setItem("role", foundUser.role);
      localStorage.setItem("email", foundUser.email);
      localStorage.setItem("id", foundUser.id);
      localStorage.setItem("name", foundUser.name);
      localStorage.setItem("user", JSON.stringify(foundUser));
      localStorage.setItem("isLoggedIn", "true");




      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Logged in successfully!",
      }).then(() => {
        if (foundUser.role === "student") {
          navigate("/studentHome");
        } else if (foundUser.role === "instructor") {
          navigate("/instructorHome");
        }
         if (foundUser.role === "admin") {
          navigate("/adminHome");
        }
      });
    } catch {
      Swal.fire("Error", "Login failed ", "error");
    }
  };

  return (
    <div className="bg-gray-200 flex-1 h-screen ">
      <div className="flex justify-center items-center h-screen ">
        <div className="flex flex-col gap-4 p-8 shadow bg-gray-100 rounded-lg ">
          <div className="flex justify-center font-bold text-gray-700 text-2xl">
            Sign In
          </div>

          <div className="flex gap-2 items-center">
            <MdAlternateEmail className="text-gray-800 text-lg" />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded items-center px-3 py-1 outline-gray-700"
            />
          </div>

          <div className="flex gap-2 items-center">
            <TbLockPassword className="text-gray-800 text-lg" />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white rounded items-center px-3 py-1 outline-gray-700"
            />
          </div>

          <div className="flex justify-center text-gray-700 text-sm">
            You don't have an account?{" "}
            <Link className="px-1 hover:underline hover:text-red-900" to="/signUp">
              Sign Up
            </Link>
          </div>

          <button
            onClick={LogInHandle}
            className="flex justify-center font-bold p-1 text-gray-200 bg-gray-600 rounded hover:text-gray-100 hover:bg-gray-700 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;