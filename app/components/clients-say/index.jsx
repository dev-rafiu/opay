import Image from "next/image";
import sectionImg from "/public/images/clients-say/img-orbit.png";

function ClientsSay() {
  return (
    <section className="space-y-2 py-16">
      <header className="text-center text-foreground">
        <h2 className="mx-auto max-w-xs">What our users say about us?</h2>
      </header>

      <div className="container grid gap-2 md:grid-cols-2 lg:gap-5">
        {/* image wrapper */}
        <div className="relative h-[27rem]">
          <Image
            src={sectionImg}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>

        {/* text wrapper */}
        <div className="space-y-4 self-center">
          <h3 className="mx-auto max-w-xs text-center md:mx-0 md:text-left">
            The best financial accounting App ever!
          </h3>

          <p className="mx-auto max-w-md text-center leading-6 text-foreground/60 md:mx-0 md:text-left">
            “Opay has been the best financial app in terms of swift
            transactions, I remember during the cashless time where every
            nigerian was struggling to get cash because there was scarcity of it
            due to the change of naira design and look, thanks to Opay we can
            make transfers without stress and receive payments easily.”
          </p>

          <div className="space-y-2 text-center md:text-left">
            <div className="relative mx-auto h-[2rem] w-[8rem] md:mx-0">
              <Image
                src="/images/clients-say/clients.png"
                alt="clients"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <p className="font-bold text-foreground">Nick Jonas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSay;
