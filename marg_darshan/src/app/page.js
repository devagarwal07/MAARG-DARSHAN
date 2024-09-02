import Image from "next/image";
import HomePage from "@/components/homepage/HomePage";
import About from "@/components/about/About";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <HomePage />
        
      </section>
      <section className={styles.content}>
        <About />
      </section>
    </>
  );
}
