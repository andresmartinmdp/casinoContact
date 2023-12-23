"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import dotenv from "dotenv";
import { useSearchParams } from "next/navigation";
dotenv.config();

const landingPage = () => {
  const [query, setQuery] = useState();

  const searchParams = useSearchParams();
  const actualNumber = searchParams.get("id");
  useEffect(() => {
    if (actualNumber && actualNumber !== null) {
      console.log(actualNumber);
      setQuery(actualNumber);
    }
  }, [actualNumber]);

  const wppNumbers = [
    process.env.NEXT_PUBLIC_NUMBER1,
    process.env.NEXT_PUBLIC_NUMBER2,
    process.env.NEXT_PUBLIC_NUMBER3,
    process.env.NEXT_PUBLIC_NUMBER4,
    process.env.NEXT_PUBLIC_NUMBER5,
    process.env.NEXT_PUBLIC_NUMBER6,
    process.env.NEXT_PUBLIC_NUMBER7,
    process.env.NEXT_PUBLIC_NUMBER8,
    process.env.NEXT_PUBLIC_NUMBER9,
    process.env.NEXT_PUBLIC_NUMBER10,
  ];

  if (!actualNumber || actualNumber === null || query > 10 || query < 1) {
    return <p>Error</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.backDiv}>
        <div className={styles.blackWall} />
        <img className={styles.background} src="newBack.jpg" />
      </div>
      <img className={styles.logo} src="logo.png" />
      <p className={styles.texto}>Envianos un mensaje para crear tu usuario</p>
      <div className={styles.buttons}>
        <a href={wppNumbers[parseInt(query) - 1]} className={styles.button1}>
          <img src="https://www.svgrepo.com/show/452133/whatsapp.svg" />
          Whatsapp
        </a>
        <a href="https://casino-chat.vercel.app" className={styles.button2}>
          <img src="https://www.svgrepo.com/show/510890/chat-circle.svg" /> Chat
        </a>
      </div>
    </div>
  );
};

export default landingPage;
