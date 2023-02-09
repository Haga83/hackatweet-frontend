import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import Link from "next/Link";
// import LastTweets from "./LastTweets";
// import Trends from "./Trends";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const router = useRouter();

  if (!user.token) {
    router.push("/");
  }

  return (
    <div className={styles.PageTwitter}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src="/logo.webp"
            alt="logo"
            className={styles.imgLeft}
            width={50}
            height={50}
          />
        </div>
        <div className={styles.bottomLeft}>
          <div className={styles.id}>
            <div className={styles.user}>
              <Image
                src="/user.webp"
                alt="user image"
                className={styles.userimg}
                width={46}
                height={46}
              />
            </div>
            {/* user */}
          </div>
          <div className={styles.logout_btn}>
            <button
              onClick={() => {
                router.push("/");
                dispatch(logout());
              }}
              className={styles.logout}
            >
              logout
            </button>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.writtentweet}>
          <div className={styles.titleHome}>
            <span>Home</span>
          </div>
          <div className={styles.addTweet}>{/* add tweet */}</div>
        </div>
        <div className={styles.tweets}>{/* tweets */}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.Trends}>
          <span>Trends</span>
        </div>
        <div>{/* # */}</div>
      </div>
    </div>
  );
}

export default Home;
