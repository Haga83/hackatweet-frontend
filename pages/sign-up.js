import Head from "next/head";
import SignUp from "../components/Signup";

function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign-up / Hackatweet</title>
      </Head>
      <SignUp />
    </>
  );
}

export default SignUpPage;