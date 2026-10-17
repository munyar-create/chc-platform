import Head from 'next/head';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CHC | Captra Handies</title>
        <meta name="description" content="CHC — custom and bulk furniture manufacturing, workshop routing, and doorstep fulfillment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-[#fbf9f5] text-slate-800">
        <Header />
        <main className="container py-8 md:py-12">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
