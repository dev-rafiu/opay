import Link from "next/link";
import Image from "next/image";

import Accordion from "../ui/accordion";

const FAQS = [
  { id: 1, title: "How do I open an Opay with account?", content: "" },
  { id: 2, title: "How do I order a new card?", content: "" },
  { id: 3, title: "How to change my account limits?", content: "" },
  {
    id: 4,
    title: "How does Opay premium works?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.
        Eget gravida cum sociis natoque penatibus et magnis dis parturient.`,
  },
  { id: 5, title: "Can I have two Opay accounts?", content: "" },
];

function FAQs() {
  return (
    <section className="py-14">
      <div className="container grid gap-8 px-0 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-medium">Need help?</h1>

          <ul className="grid gap-3">
            <li className="flex items-center gap-4">
              <span className="size-10 rounded-full bg-[#E8F2EE] p-3 text-[#1A191E]">
                <Image
                  src="/images/faqs/phone.png"
                  alt=""
                  width={16}
                  height={16}
                />
              </span>

              <div className="">
                <p className="leading-6 text-foreground">+49 176 123 456</p>
                <p className="text-sm leading-6 text-foreground/50">
                  Support Hotline
                </p>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <span className="size-10 rounded-full bg-[#E8F2EE] p-3 text-[#1A191E]">
                <Image
                  src="/images/faqs/email.png"
                  alt=""
                  width={16}
                  height={16}
                />
              </span>

              <div>
                <p className="leading-5 text-foreground">help@banquee.com</p>
                <p className="text-sm leading-5 text-foreground/50">
                  Support Email
                </p>
              </div>
            </li>
          </ul>

          <Link href="#" className="flex items-center gap-2 text-primary">
            Support
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <ul className="grid gap-4">
          {FAQS.map((item) => {
            return (
              <li key={item.id}>
                <Accordion title={item.title}>
                  <p className="text-sm leading-6 text-foreground/50">
                    {item.content}
                  </p>
                </Accordion>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FAQs;
