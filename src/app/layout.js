import "./globals.css";

export const metadata = {
  title: "Hooligun Studios",
  description: "Movie and Music Production Studio from Armenia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` text-[#bab49e]`}>{children}</body>
    </html>
  );
}
