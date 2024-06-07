import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-footerDarkBlue font-poppins">
      <div className="container space-y-[4rem] py-10 lg:p-[5rem]">
        <div className="space-y-8">
          {/* footer grid items */}
          <div className="grid grid-rows-1 gap-8 font-poppins text-white md:grid-cols-[auto,_auto,_auto,_auto,_auto] lg:gap-8">
            {/* QRCode */}
            <div className="space-y-4">
              <p className="leading-5">What are you waiting for?</p>

              <h3 className="font-poppins text-3xl font-bold">
                Go get the Opay app
              </h3>

              <div className="relative h-[9rem] w-[10rem]">
                <Image
                  src="/footer/qr-code.png"
                  alt="QRCode"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* contact */}
            <div className="space-y-4 font-poppins">
              <div className="relative h-[23px] w-[120px]">
                <Image
                  src="/footer/opay-logo-white.svg"
                  alt="Opay"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

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

          {/* stores and newletter */}
          <div className="grid justify-between gap-8 md:grid-cols-2 md:flex-row md:items-center">
            <div className="flex gap-5 md:col-start-1 md:self-end">
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

            <div className="space-y-6 text-background">
              <div className="space-y-4">
                <p className="text-2xl font-semibold leading-6">Newsletter</p>
                <p className="text-sm">Stay up to date</p>
              </div>

              <form className="flex w-full gap-2">
                <input
                  type="text"
                  className="w-full rounded border border-gray-700 bg-transparent px-2 text-gray-400 outline-none"
                  placeholder="Your Email"
                />
                <button
                  href={"#"}
                  className="rounded bg-primary px-4 py-3 text-white"
                >
                  Subscribe
                </button>
              </form>
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
