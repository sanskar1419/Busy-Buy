import { useValues } from "./context/authContext";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Importing Pages and Component
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";

// Creating App functional component
function App() {
  // Fetching value from useValues custom hook
  const { isLoggedIn } = useValues();

  // Protecting Routes
  const PrivateRoute = ({ children }) => {
    if (isLoggedIn) {
      return <Navigate to="/" replace={true} />;
    }
    return children;
  };

  // Defining routing for different pages and component
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

// Exporting component
export default App;
