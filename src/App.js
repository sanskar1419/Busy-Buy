import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { useValues } from "./context/authContext";

function App() {
  const { isLoggedIn } = useValues();
  return (
    <>
      <Navbar />
      <SignUp />
    </>
  );
}

export default App;
