import styles from "./Signin.module.css";
import signInImg from "../../images/login.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignIn from "../../hooks/useSignIn";
import { PropagateLoader } from "react-spinners";

function SignIn() {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const { loading, signIn } = useSignIn();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(inputs);
  };

  // console.log(loading);
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
          <Link to="/signUp">
            <h4>Don't Have an account ?</h4>
          </Link>
          <div className={styles.buttonContainer}>
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
export default SignIn;
