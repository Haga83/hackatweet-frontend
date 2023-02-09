import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Modal } from "antd";
import SignUp from "./Signup";
import SignIn from "./Signin";

function Login() {
  const user = useSelector((state) => state.user.value);
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  console.log(signUpModal);

  const showSignUpModal = () => {
    setSignUpModal(true);
  };

  const showSignInModal = () => {
    setSignInModal(true);
  };

  const handleCancelSignUp = () => {
    setSignUpModal(false);
  };

  const handleCancelSignIn = () => {
    setSignInModal(false);
  };


  const router = useRouter();
  if (user.token) {
    router.push('/');
  }

  return (
    <div className={styles.home}>
      <Modal onCancel={() =>handleCancelSignUp()} open={signUpModal} footer={null}>
        <SignUp />
      </Modal>
      <Modal onCancel={() =>handleCancelSignIn()} open={signInModal} footer={null}>
        <SignIn />
      </Modal>
      <div className={styles.left}>
        <span className={styles.logo}>
          <Image
            src="/logo.webp"
            alt="logo"
            width={300}
            height={300}
            className={styles.img}
          />
        </span>
      </div>
      <div className={styles.right}>
        <div className={styles.logo}>
          <span className={styles.logoRight}>
            <Image
              src="/logo.webp"
              alt="logo"
              width={50}
              height={50}
              className={styles.imgRight}
            />
          </span>
        </div>
        <div className={styles.title}>
          <h2>See what's Happening</h2>
        </div>
        <div className={styles.sub_title}>
          <h3>Join Hackatweet today.</h3>
        </div>
        <div>
          <button onClick={() => showSignUpModal()} className={styles.sign_up}>
            Sign up
          </button>
        </div>
        <span className={styles.question}>Already have an account?</span>
        <div>
          <button onClick={() => showSignInModal()} className={styles.signin}>
            Signin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
