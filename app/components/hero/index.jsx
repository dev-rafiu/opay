import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col items-center space-y-4 py-10 lg:space-y-8">
      {/* gradient */}
      <div className="absolute left-0 top-0 -z-10 hidden h-[60rem] w-[60rem] lg:block">
        <Image
          src="/hero-section/radial-gradient.png"
          alt="Radial Gradient"
          fill
          sizes="100vw"
        />
      </div>

      <p className="max-w-3xl text-center font-prosto_one text-[5rem] font-normal leading-none text-[#1A1A1A]">
        We are Beyond Banking
      </p>

      <p className="text-center font-poppins text-[1.3rem] text-foreground/60">
        Providing secure, easy to use & affordable financial services with
        superfast user experience.
      </p>

      {/* app stores */}
      <div className="relative h-[40px]  w-full max-w-[280px]">
        <Image
          src="/hero-section/app-stores.png"
          alt="App Stores"
          className=""
          fill
          sizes="100vw"
        />
      </div>

      {/* licence */}
      <div className="relative h-[2.5rem] w-80">
        <Image
          src="/hero-section/license.svg"
          alt="License"
          className="object-contain"
          fill
          sizes="100vw"
        />
      </div>

      {/* phone */}
      <div className="relative h-[25rem] w-full max-w-[34.25rem]">
        <Image
          src="/hero-section/phone.svg"
          alt="App Stores"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
export default Hero;
