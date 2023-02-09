import styles from '../styles/Home.module.css';
import Image from 'next/image';
function Home() {
    return (
      <div className={styles.PageTwitter}>
            <div className={styles.left}>
                    <div className={styles.logo}>
                            <Image src="/logo.webp" 
                            alt="logo" 
                            className={styles.imgLeft}
                            width={50}
                            height={50}/>
                    </div>
                    <div className={styles.bottomLeft}>
                        <div className={styles.id}>
                            <div className={styles.user}>
                                <Image 
                                src="/user.webp" 
                                alt="user image" 
                                className={styles.userimg}
                                width={50}
                                height={50}
                                />
                            </div>
                              {/* user */}
                        </div>
                        <div className={styles.logout_btn}>
                            <button className={styles.logout}>logout</button>
                        </div>
                    </div>
            </div>
            <div className={styles.center}>
                    <div className={styles.writtentweet}>
                        <div className={styles.titleHome}>
                            <span>Home</span>
                        </div>
                        <div className={styles.addTweet}>
                            {/* add tweet */}
                        </div>
                    </div>
                    <div className={styles.tweets}>
                        {/* tweets */}
                    </div>
            </div>
            <div className={styles.right}>
                <div className={styles.Trends}>
                    <span>Trends</span>
                </div>
                <div>
                    {/* # */}
                </div>
            </div>
      </div>
    );
  }
  
  export default Home;
  
