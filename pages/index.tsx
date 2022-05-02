import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/marketing/header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Untitled UI React</title>
        <meta
          name="description"
          content="The ultimate UI kit and design system for React "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header divider />
      </main>
    </>
  );
};

export default Home;
