import Head from "next/head";
import "./global.css";

export const metadata = {
  title: "Red Black Contact",
  description: "Averigua en esta pagina todas nuestras formas de contacto!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
