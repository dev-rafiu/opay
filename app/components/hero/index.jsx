import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col items-center space-y-4 pt-[3rem]">
      {/* gradient */}
      <div className="absolute -left-[10rem] top-0 -z-10 h-[60rem] w-[60rem] ">
        <Image
          src="/hero-section/radial-gradient.svg"
          alt="Radial Gradient"
          fill
          sizes="100vw"
        />
      </div>

      <p className="max-w-3xl text-center font-prosto_one text-[5rem] font-normal leading-none text-[#1A1A1A]">
        We are Beyond Banking
      </p>

      <p
        className="text-center font-poppins text-[1.3rem]"
        style={{ color: "rgba(26, 26, 26, 0.61)" }}
      >
        Providing secure, easy to use & affordable financial <br /> services
        with superfast user experience.
      </p>

      {/* app stores */}
      <div className="relative h-[40px] w-[280px]">
        <Image
          src="/hero-section/app-stores.png"
          alt="App Stores"
          className=""
          fill
          sizes="100vw"
        />
      </div>

      <div className="relative h-[2.5rem] w-[25rem]">
        <Image
          src="/hero-section/license.svg"
          alt="License"
          className=""
          fill
          sizes="100vw"
        />
      </div>

      {/* phone */}
      <div className="relative h-[34.25rem] w-[34.25rem]">
        <Image
          src="/hero-section/phone.svg"
          alt="App Stores"
          fill
          sizes="100vw"
        />
      </div>
    </div>
  );
}
export default Hero;
