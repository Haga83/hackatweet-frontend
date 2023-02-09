import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.left}>
                <span className={styles.logo}>
                <img src="logo.webtwitter.webp" alt="logo" className={styles.img}/>
                </span>
        </div>
        <div className={styles.right}>
            <div className={styles.logo}>
                <span className={styles.logoRight}>
                    <img src="logo.webtwitter.webp" alt="logo" className={styles.imgRight}/>
                </span>
            </div>
            <div className={styles.title}>
                <h2>
                  See what's
                  Happening
                </h2>
            </div>
            <div className={styles.sub_title}>
                <h3>Join Hackatweet today.</h3>
            </div>
            <div className={styles.signing}>
                <div className={styles.sign_up}>
                    <a className={styles.sign_upBtn}>Sign up</a>
                </div>
                <span className={styles.question}>Already have an account?</span>
                <div className={styles.signin}>
                    <a className={styles.signinBtn}>Signin</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
