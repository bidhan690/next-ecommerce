import "@/styles/globals.css";
import Head from "next/head";
import { Chewy, Andika, Oxygen } from "next/font/google";
import Layout from "@/components/header/Layout";
import NextNProgress from "nextjs-progressbar";

const chewy = Chewy({
  subsets: ["latin"],
  variable: "--font-chewy",
  weight: "400",
});

const andika = Andika({
  subsets: ["latin"],
  variable: "--font-andika",
  weight: "400",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  variable: "--font-oxygen",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Priceless&apos;s Fashions</title>
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
      </Head>
      <div
        className={`${chewy.variable} ${andika.variable} ${oxygen.variable} `}
      >
        <NextNProgress
          color="rgba(2,236,170,1)"
          height={4}
          options={{ showSpinner: false }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
