import App from "./App";
import CustomAuthContext from "./context/authContext";

function AppRoot() {
  return (
    <CustomAuthContext>
      <App />
    </CustomAuthContext>
  );
}

export default AppRoot;
