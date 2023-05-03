import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

import Header from "../../components/Header.js";
import "./globals.css";

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
    <html lang={locale} className={``}>
      <body
        className={`mx-auto  flex max-w-[1200px] flex-col text-lg leading-tight text-[#bab49e]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
