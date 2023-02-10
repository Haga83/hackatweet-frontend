import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import Link from "next/Link";
import Trends from "./Trends";
import styles from "../styles/Hashtag.module.css";
import Image from "next/image";


function Hashtag() {
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
          <Link href="/home">
            <Image
              src="/logo.webp"
              alt="logo"
              className={styles.imgLeft}
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.bottomLeft}>
          <div className={styles.userSection}>
            <div className={styles.user}>
              <Image
                src="/user.webp"
                alt="user image"
                className={styles.userimg}
                width={46}
                height={46}
              />
            </div>
            <div className={styles.userInfo}>
              <h3 className={styles.simpleusername}>{user.username}</h3>
              <h3 className={styles.username}>@{user.username}</h3>
            </div>
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
        <div className={styles.SearchContent}>
          <div className={styles.titleHashtag}>
            <span>Hashtag</span>
          </div>
          <div className={styles.searchHashtag}>
            <input
              type="text"
              
              className={styles.Hashtag_searchBar}
              value="#"
            ></input>
          </div>
        </div>
        <div className={styles.Hashtagmatch}>
          
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.Trends}>
          <span>Trends</span>
          <Trends />
        </div>
        <div>{/* # */}</div>
      </div>
    </div>
  );
}

export default Hashtag;
