import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Page from "../modules/color/component/page";
import ChairViewer from "../modules/color/chair-viewer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Page title="Just a chair">
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <ChairViewer />
      </div>
    </Page>
  );
}
