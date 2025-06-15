import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import Nav from "../component/Nav";
import AdminHome from "../pages/AdminHome";
import AdminInstructors from "../pages/AdminInstructors";
import AdminStudents from "../pages/AdminStudents";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import InstructorHome from "../pages/InstructorHome";
import StudentHome from "../pages/StudentHome";
import ExploreIdeas from "../pages/ExploreIdeas";
import ManageIdea from "../pages/ManageIdea";
import IdeaTeam from "../pages/IdeaTeam";
import InstructorManageIdeas from "../pages/InstructorManageIdeas";



function Layout() {
  return (
    <div className="flex">
      {/* <Nav /> */}
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "signIn", element: <SignIn /> },
      { path: "signUp", element: <SignUp /> },
      { path: "adminHome", element: <AdminHome /> },
      { path: "adminInstructors", element: <AdminInstructors /> },
      { path: "adminStudents", element: <AdminStudents /> },
      { path: "studentHome", element: <StudentHome /> },
      { path: "instructorHome", element: <InstructorHome /> },
      { path: "exploreIdeas", element: <ExploreIdeas /> },
      { path: "manageIdea", element: <ManageIdea /> },
      { path: "ideaTeam", element: <IdeaTeam /> },
      { path: "instructorManageIdeas", element: <InstructorManageIdeas /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
