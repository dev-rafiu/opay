import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { servicesItems } from "./servicesItems";

function Services() {
  return (
    <div className="relative flex flex-col items-center space-y-4 py-8">
      <h3 className="font-poppins text-3xl font-bold">Our Banking Services</h3>

      {/* gradient */}
      <div className="absolute right-0 top-0 -z-10 h-[50rem] w-[50rem]">
        <Image
          src="/hero-section/radial-gradient.png"
          alt="Radial Gradient"
          fill
          sizes="100vw"
        />
      </div>

      {/* cards */}
      {/* <div className="z-20 grid w-full max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-3"> */}
      <div className="z-20 grid w-full max-w-6xl grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 px-4">
        {servicesItems.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
