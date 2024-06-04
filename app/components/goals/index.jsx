import Image from "next/image";

import img1 from "/public/images/goals/img1.png";
import img2 from "/public/images/goals/img2.png";
import img3 from "/public/images/goals/img3.png";

function Goals() {
  return (
    <section className="py-16">
      <div className="space-y-16 font-poppins">
        <header className="space-y-2 text-center">
          <p className="text-xl font-medium text-gray-500">
            Our goal is simple
          </p>
          <p className="text-md mx-auto max-w-sm font-medium text-foreground">
            to make managing your finances easier and
            <span className="block text-primary">
              {" "}
              put you incharge of your money
            </span>
          </p>
        </header>

        {/* list */}
        <ul className="grid gap-14">
          <li className="flex flex-col-reverse items-start justify-between gap-4 lg:flex-row">
            {/* text content */}
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-xl font-normal">
                Get paid instantly with ease
              </h3>

              <p className="max-w-xl text-base text-foreground/60">
                With mission to make financial services more inclusive through
                technology. Opay is dedicated to providing secure, easy to use
                and affordable financial services with super fast user
                experience, amazing insentive package on transfer/airtime and
                data top-up innovative product.
              </p>
            </div>

            {/* image */}
            <div className="relative h-[20rem] w-full max-w-[35rem] lg:h-[25rem]">
              <Image
                src={img1}
                alt=""
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </li>

          <li className="flex flex-col-reverse items-start justify-between gap-4 lg:flex-row-reverse">
            {/* text content */}
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-xl font-normal">Split payment with anyone</h3>
              <p className="max-w-xl text-base text-foreground/60">
                Split anything! The rent! transport fares, eating out, paying
                fees, light bills and Netflix fees. Split rent amont family and
                groups, also enjoy outing with groups and split payments between
                each other.
              </p>
            </div>

            {/* image */}
            <div className="relative h-[20rem] w-full max-w-[35rem] lg:h-[25rem]">
              <Image
                src={img2}
                alt=""
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </li>

          <li className="flex flex-col-reverse items-start justify-between gap-4 lg:flex-row">
            {/* text content */}
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-xl font-normal">Meet your savings goal</h3>

              <p className="max-w-xl text-base text-foreground/60">
                Saving is more fun when it is automated. Save up for a friends
                trip, a new car, or whatever financial goals with the gostash at
                no extra fees. With its flexibility, you can choose to automate
                your savings or lock your funds till a certain date.
              </p>
            </div>

            {/* image */}
            <div className="relative h-[20rem] w-full max-w-[35rem] lg:h-[25rem]">
              <Image
                src={img3}
                alt=""
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Goals;
