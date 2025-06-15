import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const RegisterHandle = async () => {
    if (!name.trim() || !email.trim() || !password.trim() || !rePassword.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all the fields please",
      });
      return;
    }
    if (name.trim().length < 3) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name must be at least 3 characters",
      });
      return;
    }
    if (password.trim().length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters",
      });
      return;
    }
    if (password !== rePassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match",
      });
      return;
    }
    if (!role) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a role",
      });
      return;
    }

    try {
      await axios.post(
        "https://684a055545f4c0f5ee7369f6.mockapi.io/IdeasProjectUsers",
        {
          name,
          email,
          password,
          role,
        }
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Registered is success",
      }).then(() => {
        navigate("/signIn");
      });
    } catch {
      Swal.fire("Error", "Registration failed ", "error");
    }
  };

  return (
    <div className="bg-gray-200 flex-1 h-screen ">
      <div className="flex justify-center items-center h-screen ">
        <div className="flex flex-col gap-4 p-8 shadow bg-gray-100 rounded-lg ">
          <div className="flex justify-center font-bold text-gray-700 text-2xl">
            Sign Up
          </div>
          <div className="flex gap-2 items-center">
            <FaRegUser className="text-gray-800 text-lg" />
            <input
              required
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white rounded items-center px-3 py-1 max-w-50 outline-gray-700 "
            />
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
          <div className="flex gap-2 items-center">
            <TbLockPassword className="text-gray-800 text-lg" />
            <input
              required
              type="password"
              placeholder="Confirm Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              className="bg-white rounded items-center px-3 py-1 outline-gray-700"
            />
          </div>
          <div className="flex gap-2  flex-col">
            <label className="text-gray-800 text-lg">
              Role:
              </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-white rounded px-3 py-1 outline-gray-700 "
            >
              <option value="" disabled>Select your Role</option>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>
          <div className="flex justify-center text-gray-700 text-sm">
            Already have an Account?
            <Link
              className="px-1 hover:underline hover:text-red-900"
              to="/signIn"
            >
              Sign In
            </Link>
          </div>

          <button
            onClick={RegisterHandle}
            className="flex justify-center font-bold p-1 text-gray-200 bg-gray-600 rounded hover:text-gray-100 hover:bg-gray-700 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
