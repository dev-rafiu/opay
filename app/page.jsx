import ClientsSay from "./components/clients-say";
import FAQs from "./components/faqs";
import Features from "./components/features";

import TrustedBy from "./components/trusted-by";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <TrustedBy />
      <ClientsSay />
      <Features />
      <FAQs />
    </main>
  );
}
