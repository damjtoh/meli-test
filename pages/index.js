import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <title>Mercado Libre Argentina</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto">
        <main />
      </div>
    </div>
  );
}
