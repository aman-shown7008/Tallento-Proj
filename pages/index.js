import Head from "next/head";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tallento.ai – Where AI Meets Ambition</title>
      </Head>
      <Header />
      <main style={{ paddingBottom: "40px" }}>
        <HeroBanner />
      </main>
    </>
  );
}
