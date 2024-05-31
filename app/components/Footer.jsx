import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#060216)] mb-10 min-h-[500px] bg-blue-900 p-8 font-poppins">
      <div className="grid grid-cols-6 gap-2 font-poppins text-white">
        <div className="grid-cols-2 space-y-4">
          <p className="whitespace-nowrap text-[1.2rem]">
            What are you waiting for?
          </p>
          <h3 className="whitespace-nowrap font-poppins text-3xl font-extrabold">
            Go get the Opay <br /> app
          </h3>
          <div className="relative h-[9rem] w-[9rem]">
            <Image src="/footer/qr-code.png" alt="QRCode" fill sizes="100vw" />
          </div>
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
            <span>help@frybix.com</span>
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
            <span>+234 3455 235 87</span>
          </div>
        </div>
        {/* links */}
        <div className="space-y-2">
          <h3 className="font-poppins text-2xl font-extrabold">Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Bookings", "Blog"].map((link, i) => (
              <li key={i} className="text-sm">
                {link}
              </li>
            ))}
          </ul>
        </div>
        {/* legal */}
        <div className="">
          <div className="space-y-2">
            <h3 className="font-poppins text-2xl font-extrabold">Legal</h3>
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
            <h3 className="font-poppins text-2xl font-extrabold">Product</h3>
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
    </div>
  );
}

export default Footer;
