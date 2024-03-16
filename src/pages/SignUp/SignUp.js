import styles from "./SignUp.module.css";
import signUpImg from "../../images/sign-up.png";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";

function SignUp() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, signup } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    signup(inputs);
  };

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
export default SignUp;
