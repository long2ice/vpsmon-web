import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Doucment() {
  return (
    <Html>
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4103172601745047"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
