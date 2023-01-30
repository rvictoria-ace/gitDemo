import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Image
        src="/../public/images/vei.webp"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <Image
        src="/../public/images/cyclops.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </>
  );
}
