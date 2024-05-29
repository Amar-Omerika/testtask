import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Amars Tech Blog</title>
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
