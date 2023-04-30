import { useLocale } from "next-intl";
import { Cuprum, Inter } from "next/font/google";
import { notFound } from "next/navigation";

import Header from "../../components/Header.js";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--body-font",
});
const cuprum = Cuprum({
  subsets: ["latin", "cyrillic"],
  variable: "--russian-font",
});

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
    ${inter.variable} ${cuprum.variable} }`}
    >
      <body
        className={`mx-auto  flex max-w-[1200px] flex-col font-body text-lg leading-tight text-[#bab49e]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
