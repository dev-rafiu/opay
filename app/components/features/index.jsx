import Image from "next/image";
import Link from "next/link";

import sectionImg from "/public/images/features/app.png";

const FEATURES = [
  "Instant transactions",
  "Saving accounts",
  "Payments worldwide",
  "100% mobile banking",
];

function Features() {
  return (
    <section className="py-14">
      <div className="container grid gap-8 rounded-md bg-primary pl-8 md:h-[28rem] md:grid-cols-2">
        <div className="space-y-6 self-center pt-2 text-background">
          <h1 className="max-w-xs font-medium">Payment made easy.</h1>

          <p className="max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          {/* features list */}
          <ul className="grid gap-4 md:grid-cols-2">
            {FEATURES.map((text, index) => {
              return (
                <li key={index} className="flex items-center gap-4">
                  <span className="size-6 rounded-full bg-background/50 p-1 text-[#1A191E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>

                  {text}
                </li>
              );
            })}
          </ul>

          {/* download links */}
          <ul className="flex items-center gap-8">
            <li>
              <Link href="#" className="relative block h-12 w-32">
                <Image
                  src="/images/features/appstore.png"
                  alt="Appstore"
                  fill
                  sizes="100vw"
                />
              </Link>
            </li>

            <li>
              <Link href="#" className="relative block h-12 w-32">
                <Image
                  src="/images/features/playstore.png"
                  alt="Appstore"
                  fill
                  sizes="100vw"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile app image */}
        <div className="relative h-[25rem] w-[20rem] self-end lg:ml-auto">
          <Image
            src={sectionImg}
            alt="Mobile app"
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
