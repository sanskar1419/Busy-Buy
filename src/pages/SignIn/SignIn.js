import styles from "./Signin.module.css";
import signInImg from "../../images/login.png";

function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.signInContainer}>
        <div className={styles.headingContainer}>
          <img src={signInImg} alt="SignIn" />
          <h2>Sign In Here</h2>
        </div>
        <form>
          <div className={styles.formInput}>
            <label>Username</label>
            <input type="text" placeholder="Enter Your username" />
          </div>
          <div className={styles.formInput}>
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <h4>Don't Have an account ?</h4>
          <div className={styles.buttonContainer}>
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
