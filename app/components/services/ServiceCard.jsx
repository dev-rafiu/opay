import Image from "next/image";

function ServiceCard({ service }) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-sm p-8 font-poppins font-medium shadow-lg">
      <div className="rounded-full bg-primary/30 p-2">
        <div className="relative h-5 w-5">
          <Image
            src={service.iconSrc}
            alt="License"
            className=""
            fill
            sizes="100vw"
          />
        </div>
      </div>
      <p>{service.description}</p>
    </div>
  );
}

export default ServiceCard;
