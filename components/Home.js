import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import { loadTweet, addTweet } from "../reducers/tweet";
import Link from "next/Link";
import Tweet from "./Tweet";
import Trends from "./Trends";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const tweetData = useSelector((state) => state.tweet.value);
  const router = useRouter();

  if (!user.token) {
    router.push("/");
  }

  const [newTweet, setNewTweet] = useState("");

  useEffect(() => {
    if (!user.token) {
      return;
    }

    fetch(`http://localhost:3000/tweets/all/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        data.result && dispatch(loadTweet(data.tweets));
      });
  }, []);

  const handleTweet = (e) => {
    if (
      newTweet.length < 280 ||
      e.nativeEvent.inputType === "deleteContentBackward"
    ) {
      setNewTweet(e.target.value);
    }
  };

  const handleSubmit = () => {
    fetch("http://localhost:3000/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: user.token,
        content: newTweet,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          const createdTweet = {
            ...data.tweet,
            user: { username: user.username, firstname: user.firstname },
          };
          dispatch(addTweet(createdTweet));
          setNewTweet("");
        }
      });
  };

  const tweetsArr = tweetData.map((tweet) => {
    return <Tweet key={tweet._id} {...tweet} />;
  });

  return (
    <div className={styles.PageTwitter}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link href="/">
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
            <div className={styles.userInfo}>
              <p className={styles.name}>{user.firstname}</p>
              <p className={styles.username}>@{user.username}</p>
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
        <div className={styles.writtentweet}>
          <div className={styles.titleHome}>
            <span>Home</span>
          </div>
          <div className={styles.addTweet}>
            <div className={styles.textinput}>
              <textarea
              type="text"
              placeholder="What's up"
              className={styles.input}
              onChange={(e) => handleTweet(e)}
              value={newTweet}
              /> 
            </div>
            <div className={styles.contentundertext}>
                  <div className={styles.textlength}>
                      <p>{newTweet.length}/280</p>
                  </div>
                  <div>
                      <button className={styles.button} onClick={() => handleSubmit()}>
                        Tweet
                      </button>
                  </div>
            </div>
          </div>
        </div>
        <div className={styles.tweetscroll}>
            <div className={styles.tweets}>{tweetsArr}</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.Trends}>
          <span>Trends</span>
          <Trends />
        </div>
      </div>
    </div>
  );
}

export default Home;
