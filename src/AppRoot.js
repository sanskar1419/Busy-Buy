import App from "./App";
import CustomAuthContext from "./context/authContext";

// Creating Functional Component
function AppRoot() {
  return (
    // Wrapping App component inside CustomAuthContext, so that authUser should be accessible to all child component
    <CustomAuthContext>
      <App />
    </CustomAuthContext>
  );
}

// Exporting using default export
export default AppRoot;
