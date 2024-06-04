import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-footerDarkBlue font-poppins">
      <div className="container mb-10 min-h-[500px] space-y-[4rem] p-[5rem]">
        <div className="space-y-2">
          {/* footer grid items */}
          <div className="grid grid-cols-6 gap-2 font-poppins text-white">
            <div className="grid-cols-2 space-y-4">
              <p className="whitespace-nowrap text-[1rem]">
                What are you waiting for?
              </p>
              <h3 className="whitespace-nowrap font-poppins text-3xl font-extrabold">
                Go get the Opay <br /> app
              </h3>
            </div>
            <div className="">&nbsp;</div>
            <div className="space-y-4 font-poppins">
              {/* logo */}
              <div className="relative h-[68px] w-[120px]">
                <Image
                  src="/footer/opay-logo-white.svg"
                  alt="Opay"
                  fill
                  sizes="100vw"
                />
              </div>
              {/* help email */}
              <div className="flex items-center gap-2">
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/footer/email-icon.svg"
                    alt="Email"
                    fill
                    sizes="100vw"
                  />
                </div>
                <span className="whitespace-nowrap text-sm">
                  help@frybix.com
                </span>
              </div>
              {/* phone number */}
              <div className="flex items-center gap-2">
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/footer/phone-icon.svg"
                    alt="Phone"
                    fill
                    sizes="100vw"
                  />
                </div>
                <span className="whitespace-nowrap text-sm">
                  +234 3455 235 87
                </span>
              </div>
            </div>
            {/* links */}
            <div className="space-y-2">
              <h3 className="font-poppins text-2xl font-semibold">Links</h3>
              <ul className="space-y-2">
                {["Home", "About Us", "Bookings", "Blog"].map((link, i) => (
                  <li key={i} className="text-sm">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            {/* legal */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-poppins text-2xl font-semibold">Legal</h3>
                <ul className="space-y-2">
                  {["Terms of Use", "Privacy Policy", "Cookie Policy"].map(
                    (link, i) => (
                      <li key={i} className="text-sm">
                        {link}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
            {/* product */}
            <div className="">
              <div className="space-y-2">
                <h3 className="font-poppins text-2xl font-semibold">Product</h3>
                <ul className="space-y-2">
                  {["Take Tour", "Live Chat", "Reviews"].map((link, i) => (
                    <li key={i} className="text-sm">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* play stores */}
          <div className="flex items-center gap-16">
            <div className="relative h-[9rem] w-[9rem]">
              <Image
                src="/footer/qr-code.png"
                alt="QRCode"
                fill
                sizes="100vw"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative h-[3rem] w-[9rem]">
                <Image
                  src="/footer/apple-Store.svg"
                  alt="Apple store"
                  fill
                  sizes="100vw"
                />
              </div>

              <div className="relative h-[3rem] w-[9rem]">
                <Image
                  src="/footer/google-Store.svg"
                  alt="Apple store"
                  fill
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="space-y-3">
              {/* newsletter */}
              <div className="space-y-1 text-white">
                <p className="text-2xl font-semibold">Newsletter</p>
                <p className="text-sm">Stay up to date</p>
              </div>
              {/* email input and btn */}
              <div className="flex gap-2">
                <input
                  type="text"
                  className="w-[12rem] border border-gray-700 bg-transparent px-2 text-gray-400 outline-none"
                  placeholder="Your Email"
                />
                <Link href={"#"} className="bg-primary px-4 py-3 text-white">
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* liine */}
        <hr />

        <p className="cursor-pointer text-center text-sm text-white">
          Copyright <span>{new Date().getFullYear()}</span> Opay.com all rights
          reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
