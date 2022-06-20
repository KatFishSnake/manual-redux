import type { NextPage } from "next";
import Head from "next/head";
import { MainCounter } from "../components/MainCounter";
import { SideCounter } from "../components/SideCounter";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex justify-center flex-row gap-10">
          <MainCounter />
          <SideCounter />
        </div>
      </main>
    </div>
  );
};

export default Home;
