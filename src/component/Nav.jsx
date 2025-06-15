import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FiSidebar } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router";
import { TbLogout } from "react-icons/tb";

function Nav() {
  const [show, setShow] = useState("");

  const showClose = () => {
    setShow((show) => !show);
  };

  return (
    <>
      <div className=" flex ">
        <nav className="flex sticky top-0  self-start h-screen overflow-hidden ">
          <ul
            className="flex flex-col bg-gray-800 text-white h-screen transition-all duration-300 ease-in-out gap-5 justify-between"
            style={{ width: show ? "190px" : "70px" }}
          >
            <li className="flex items-center justify-between px-2 py-4 border-b border-gray-700">
              <span className="text-lg font-bold flex gap-2 items-center">
                <FaGraduationCap />
                {show ? "Project Ideas " : ""}
              </span>
              <button
                className="cursor-pointer hover:bg-gray-700 p-1 rounded"
                onClick={showClose}
              >
                <FiSidebar />
              </button>
            </li>
            {/* {user ? } */}

            <div className=" flex flex-col gap-10 md:gap-30">
            <Link to="/adminHome">
              <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2 rounded m-2 ">
                <FiHome />
                {show && <span>Home</span>}
              </li>
            </Link>

            <Link to="/adminInstructors">
              <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2 rounded m-2">
                <GiTeacher />
                {show && <span>Instructors</span>}
              </li>
            </Link>

            <Link to="/adminStudents">
              <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2 rounded m-2">
                <PiStudentFill />
                {show && <span>Students</span>}
              </li>
            </Link>
</div>
            <div>
              <Link to="/signIn">
                <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2 rounded m-2 ">
                  <TbLogout />
                  {show && <span>Sign out</span>}
                </li>
              </Link>
            </div>
        
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
