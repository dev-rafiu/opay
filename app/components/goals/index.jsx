import Image from "next/image";

import img1 from "/public/images/goals/img1.png";
import img2 from "/public/images/goals/img2.png";
import img3 from "/public/images/goals/img3.png";

function Goals() {
  return (
    <section className="py-14">
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

        <ul className="grid gap-14">
          <li className="relative flex flex-col-reverse items-start justify-between gap-4 lg:flex-row">
            {/* designs */}
            <div className="absolute bottom-10 left-[25%] z-10 mx-auto hidden space-y-4 lg:block">
              <div className="flex -rotate-3 items-center gap-4 rounded-lg bg-background p-4 shadow-lg">
                <div className="relative grid h-12 w-14 place-content-center rounded-md bg-primary/30 p-4">
                  <Image
                    src="/images/goals/pay-bills.png"
                    alt=""
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <p className="leading-5">Pay your bills</p>
                  <p className="text-sm leading-5 text-foreground/60">
                    Get a free debit card and make payment anywhere
                  </p>
                </div>
              </div>

              <div className="flex -rotate-6 items-center gap-4 rounded-lg bg-background p-4 shadow-lg">
                <div className="relative grid h-12 w-14 place-content-center rounded-md bg-primary/30 p-4">
                  <Image
                    src="/images/goals/pay-simplified.png"
                    alt=""
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>
                <p className="text-2xl leading-5">Payment simplified</p>
              </div>
            </div>

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
            <div className="relative h-[20rem] w-full max-w-[35rem] lg:h-[35rem]">
              <Image
                src={img1}
                alt=""
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </li>

          <li className="relative flex flex-col-reverse items-start justify-between gap-4 lg:flex-row-reverse">
            {/* designs */}
            <div className="absolute bottom-10 left-[25%] z-10 mx-auto hidden space-y-4 lg:block">
              <div className="flex rotate-1 items-center gap-4 rounded-lg bg-background p-4 shadow-lg">
                <div className="relative grid h-12 w-14 place-content-center rounded-md bg-primary/30 p-4">
                  <Image
                    src="/images/goals/light-bills.png"
                    alt=""
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <p className="leading-5">Split light bills</p>
                  <p className="text-sm leading-5 text-foreground/60">
                    Share a payment details among your neighbours
                  </p>
                </div>
              </div>

              <div className="flex -rotate-2 items-center gap-4 rounded-lg bg-background p-4 shadow-lg">
                <div className="relative grid h-12 w-14 place-content-center rounded-md bg-primary/30 p-4">
                  <Image
                    src="/images/goals/house-rent.png"
                    alt=""
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <p className="leading-5">House rent</p>
                  <p className="text-sm leading-5 text-foreground/60">
                    Make a payment of your house rent
                  </p>
                </div>
              </div>
            </div>

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
            <div className="relative h-[25rem] w-full max-w-[35rem] lg:h-[35rem]">
              <Image
                src={img2}
                alt=""
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </li>

          <li className="relative flex flex-col-reverse items-start justify-between gap-4 lg:flex-row">
            {/* designs */}
            <div className="absolute bottom-10 left-[25%] z-10 mx-auto hidden space-y-4 lg:block">
              <div className="flex -rotate-3 items-center gap-4 rounded-lg bg-background p-4 shadow-lg">
                <div className="relative grid h-12 w-14 place-content-center rounded-md bg-red-100 p-4">
                  <Image
                    src="/images/goals/personal-aim.png"
                    alt=""
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <p className="leading-5">Personal aim</p>
                  <p className="text-sm leading-5 text-foreground/60">
                    Save money to achieve your personal goals
                  </p>
                </div>
              </div>

              <div className="flex -rotate-6 items-center gap-4 rounded-lg bg-background p-4 shadow-lg">
                <div className="relative grid h-12 w-14 place-content-center rounded-md bg-primary/30 p-4">
                  <Image
                    src="/images/goals/savings.png"
                    alt=""
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>
                <p className="text-2xl leading-5">Payment simplified</p>
              </div>
            </div>

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
            <div className="relative h-[20rem] w-full max-w-[35rem] lg:h-[35rem]">
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
