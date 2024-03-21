import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Orders from "./pages/Orders/Orders";
import { useValues } from "./context/authContext";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";

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
        {
          path: "cart",
          element: isLoggedIn ? <Cart /> : <Navigate to={"/signIn"} />,
        },
        {
          path: "order",
          element: isLoggedIn ? <Orders /> : <Navigate to={"/signIn"} />,
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
