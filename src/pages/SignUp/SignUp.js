import styles from "./SignUp.module.css";
import signUpImg from "../../images/sign-up.png";

function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.signUpContainer}>
        <div className={styles.headingContainer}>
          <img src={signUpImg} alt="signUp image" />
          <h2>Sign Up Here</h2>
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
          <div className={styles.formInput}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter Your Confirm Password" />
          </div>
          <h4>Already Have a account ?</h4>
          <div className={styles.buttonContainer}>
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
