import Header from "../../../components/Header.js";

export default function Resources() {
  return (
    <section>
      <Header />
      <main className="">
        <img src="/resources-poster.jpg" alt="OTTK Film Poster" />
        <img
          src="/resources-logo-old.png"
          alt="Hooligun Studios Cinematic Logo"
        />
        <img src="/resources-logo-new.png" alt="Hooligun Studios Brand Logo" />
        <img
          src="/signatureLogo.png"
          alt="Hooligun Studios Signature Logo"
          className="hidden"
        />
      </main>
    </section>
  );
}
