import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col items-center space-y-6 py-6 lg:space-y-8">
      {/* gradient */}
      <div className="absolute left-0 top-0 -z-10 hidden h-[60rem] w-[60rem] lg:block">
        <Image
          src="/hero-section/radial-gradient.png"
          alt="Radial Gradient"
          fill
          sizes="100vw"
        />
      </div>

      <h1 className="max-w-3xl text-center font-prosto_one font-normal text-[#1A1A1A] lg:text-[5rem]">
        We are Beyond Banking
      </h1>

      <p className="max-w-lg text-center font-poppins text-[1.3rem] text-foreground/60">
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
