import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import Image from "next/image";
import styles from "../styles/SignUp.module.css";

function SignUp() {
  const dispatch = useDispatch();

  const [firstname, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.result &&
          dispatch(
            login({
              token: data.token,
              username: data.username,
              firstname: data.firstname,
            })
          );
      });
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/logo.webp"
        alt="logo"
        width={50}
        height={50}
        padding-top={10}
      />
      <h2 className={styles.title}>Create your Hackatweet account</h2>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setFirstName(e.target.value)}
        value={firstname}
        placeholder="Firstname"
      />
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Username"
      />
      <input
        type="password"
        className={styles.input}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />
      <button className={styles.button} onClick={() => handleSubmit()}>
        Sign up
      </button>
    </div>
  );
}

export default SignUp;
