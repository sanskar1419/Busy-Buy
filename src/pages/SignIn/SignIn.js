// Import necessary module, component etc.
import styles from "./Signin.module.css";
import signInImg from "../../images/login.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignIn from "../../hooks/useSignIn";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-hot-toast";

// SignIn Functional Component
function SignIn() {
  // Defining useState hook name inputs for storing the username and password field
  const [inputs, setInputs] = useState({ username: "", password: "" });
  // Destructuring loading state amd signIn function from useSignIn hook
  const { loading, signIn } = useSignIn();

  // Function for handling signIn form submit and call the signIn function from useSignIn hook
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(inputs);
    toast.success("Logged In Successfully 😎😎😎");
  };

  // Render JSX content
  return (
    <div className={styles.container}>
      <div className={styles.signInContainer}>
        <div className={styles.headingContainer}>
          <img src={signInImg} alt="SignIn" />
          <h2>Sign In Here</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formInput}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Your username"
              value={inputs.username}
              // Whenever value is changed, setting the inputs
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              required
            />
          </div>
          <div className={styles.formInput}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={inputs.password}
              // Whenever value is changed, setting the inputs
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              required
            />
          </div>
          <Link to="/signUp">
            <h4>Don't Have an account ?</h4>
          </Link>
          <div className={styles.buttonContainer}>
            {/* Until the user verification is not done then loading state will be true
            then PropagateLoader will be shown  */}
            {loading ? (
              <PropagateLoader color="rgb(102, 102, 240)" />
            ) : (
              <button>Sign In</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

// Exporting SignIn component
export default SignIn;
