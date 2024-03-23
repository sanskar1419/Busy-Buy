// Importing necessary module, component etc.
import styles from "./SignUp.module.css";
import signUpImg from "../../images/sign-up.png";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";

// Defining SignUp functional Component
function SignUp() {
  // Using useState hook to store the value of username, password and confirmPassword
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  // Destructuring loading state and signup function from useSignUp custom hook
  const { loading, signup } = useSignUp();

  // Function to handle the form submit ans calling signUp function from useSignUp custom Hook
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  };

  // Returning the JSX content
  return (
    <div className={styles.container}>
      <div className={styles.signUpContainer}>
        <div className={styles.headingContainer}>
          <img src={signUpImg} alt="signUp" />
          <h2>Sign Up Here</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formInput}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Your username"
              value={inputs.username}
              // Whenever the something type setting the input with there value
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
              // Whenever the something type setting the input with there value
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              required
            />
          </div>
          <div className={styles.formInput}>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Enter Your Confirm Password"
              value={inputs.confirmPassword}
              // Whenever the something type setting the input with there value
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  confirmPassword: e.target.value,
                })
              }
              required
            />
          </div>
          <Link to="/signIn">
            <h4>Already Have a account ?</h4>
          </Link>
          <div className={styles.buttonContainer}>
            {/* If loading state is true it will show PropagateLoader component
            (Until the data of user is not saved to Users collection in cloud firestore) */}
            {loading ? (
              <PropagateLoader color="rgb(102, 102, 240)" />
            ) : (
              <button>Sign Up</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

// Exporting SignUp Component
export default SignUp;
