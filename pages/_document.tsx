import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4103172601745047"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <Script
          defer
          data-domain="vpsmon.me"
          src="https://plausible.long2ice.io/js/plausible.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Q2GT1KL6LW"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Q2GT1KL6LW');
         `}
        </Script>
        <Script id="propellerads-multitag" async strategy="afterInteractive">
          {`
            (function(s,u,z,p){s.src = u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://inklinkor.com/tag.min.js',5516323,document.body||document.documentElement)  
         `}
        </Script>
        <Script id="propellerads-vignette" async strategy="afterInteractive">
          {`
             (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gloaphoo.net',5516324,document.createElement('script'))
         `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
