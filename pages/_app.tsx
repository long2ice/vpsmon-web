import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnFocusLoss={false}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        <meta name="propeller" content="190c8aaeb89168666d11446e59184a5d" />
        <meta name="description" content="VPS商家聚合，性价比VPS" />
        <title>VPSMON | VPS商家聚合</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
