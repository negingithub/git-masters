import Head from "next/head";
import { HOME_OG_IMAGE_URL, SITE_DESCRIPTION } from "../../lib/constants";
import React from "react";

export const Meta: React.FC = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link
        rel="preload"
        href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
        as="script"
      />
      <link
        rel="preload"
        href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
        as="script"
      />
      <link
        rel="preload"
        href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
        as="script"
      />
      <link
        rel="preload"
        href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
        as="script"
      />
      <link
        href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
        rel="stylesheet"
      />
      {/* https://github.com/leerob/nextjs-prism-markdown */}
      {/*<link*/}
      {/*  href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}*/}
      {/*  rel="stylesheet"*/}
      {/*/>*/}
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
};
