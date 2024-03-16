import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { useValues } from "./context/authContext";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

function App() {
  const { isLoggedIn } = useValues();

  const PrivateRoute = ({ children }) => {
    if (isLoggedIn) {
      return <Navigate to="/" replace={true} />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "signIn",
          element: (
            <PrivateRoute>
              <SignIn />
            </PrivateRoute>
          ),
        },
        {
          path: "signUp",
          element: (
            <PrivateRoute>
              <SignUp />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
