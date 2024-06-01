import TrustedBy from "./components/trusted-by";
import Hero from "./components/hero";
import Services from "./components/services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <TrustedBy />
      {/* <Footer /> */}
    </main>
  );
}
