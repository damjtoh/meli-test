import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <title>Mercado Libre Argentina</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="La comunidad de compra y venta online más grande de América Latina."
          data-head-react="true"
        />
      </Head>
      <div className="container mx-auto">
        <main />
      </div>
    </div>
  );
}
