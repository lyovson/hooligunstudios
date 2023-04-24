import { Inter } from "next/font/google";

import Header from "../components/Header.js";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--body-font" });

export const metadata = {
  title: "Hooligun Studios",
  description: "Movie and Music Production Studio from Armenia",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
    ${inter.variable} `}
    >
      <body className={` font-body text-lg leading-tight text-[#bab49e]`}>
        {children}
      </body>
    </html>
  );
}
