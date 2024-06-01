<<<<<<< HEAD
import ClientsSay from "./components/clients-say";
import FAQs from "./components/faqs";
import Features from "./components/features";

export default function Home() {
  return (
    <>
      <ClientsSay />
      <Features />
      <FAQs />
    </>
=======
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
>>>>>>> main
  );
}
