import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { useValues } from "./context/authContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { isLoggedIn } = useValues();
  return (
    <>
      <Navbar />
      <SignUp />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
