import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--body-font" });

export const metadata = {
  title: "Hooligun Studios",
  description: "Movie and Music Production Studio from Armenia",
};

export default function RootLayout({ params, children }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`
    ${inter.variable} `}
    >
      <body className={` font-body text-lg leading-tight text-[#bab49e]`}>
        {children}
      </body>
    </html>
  );
}