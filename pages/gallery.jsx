import Image from "next/image";
import beni from "../public/beni.png";
import melon from "../public/melon.png";
import halfpipe from "../public/halfpipe.png";
import kickflip from "../public/kickflip.png";
import ollie from "../public/ollie.png";

function gallery() {
  return (
    <div className="w-full">
      <div className="max-w-[1000px] mx-auto px-8 mb-20 flex flex-col justify-center w-full h-full">
        <h1 className="mt-24 mb-12 text-3xl md:text-4xl 2xl:text-6xl font-light text-center text-[#C8A951]">
          GALLERY
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
          <div className="object-cover items-center justify-center rounded-xl pt-6 pb-4 px-6 shadow-md shadow-[#c5c5c5]">
            <Image src={beni} alt="Beni" />
          </div>

          <div className="object-cover items-center rounded-xl pt-6 pb-4 px-6 shadow-md shadow-[#c5c5c5]">
            {" "}
            <Image src={kickflip} alt="Kickflip" />
          </div>

          <div className="object-cover items-center rounded-xl pt-6 pb-4 px-6 shadow-md shadow-[#c5c5c5]">
            {" "}
            <Image src={melon} alt="Melon" />
          </div>

          <div className="h-fit items-center rounded-xl pt-6 pb-4 px-6 shadow-md shadow-[#c5c5c5]">
            {" "}
            <div className="pt-4 pb-2">
              <Image src={ollie} alt="Ollie" />
            </div>
            <div className="pt-2 pb-4">
              <Image src={halfpipe} alt="Half pipe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default gallery;
