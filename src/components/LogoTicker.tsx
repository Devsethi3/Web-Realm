import Image from "next/image";
import client1 from "../../public/client1.png";
import client3 from "../../public/client3.png";
import client5 from "../../public/client5.png";
import TextSlider from "./TextSlider";

const images = [
  { src: client1 },
  { src: client3 },
  { src: client5 },
  { src: client1 },
  { src: client3 },
  { src: client5 },
];

const LogoTicker = () => {
  return (
    <div className="bg-black text-white pt-[72px] lg:pt-[102px] pb-[30px] overflow-hidden">
      <h2 className="text-xl text-center text-white/80 mb-14">
        Trusted by the world&apos;s most innovative companies
      </h2>
      <div className="relative">
        <div className="absolute top-0 left-0 w-1/12 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-1/12 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

        <div className="flex animate-slide">
          <div className="flex flex-nowrap">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt="logo"
                width={150}
                className="object-contain max-w-none opacity-60 mx-20"
              />
            ))}
          </div>
          <div className="flex flex-nowrap">
            {images.map((img, i) => (
              <Image
                key={i + "dup"}
                src={img.src}
                alt="logo"
                width={150}
                className="object-contain max-w-none opacity-60 mx-20"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <TextSlider />
      </div>
    </div>
  );
};

export default LogoTicker;
