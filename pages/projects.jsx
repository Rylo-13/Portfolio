import Image from "next/image";
import Cryptocademy from "../public/Cryptocademy.png";
import Mememarket from "../public/Mememarket.png";
import randoMint from "../public/randoMint.png";

export default function Projects() {
  return (
    <div className="w-full max-h-screen px-2">
      <h1 className="mt-20 text-center text-3xl text-[#C8A951] mx-auto justify-center">
        PROJECTS
      </h1>
      <div className="flex flex-col gap-4 pb-12 lg:flex-row">
        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 my-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="http://cryptocademy.deliciousdao.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-[#C8A951] text-lg"
          >
            <h3 className="text-xl font-extralight mb-2 py-2">
              {" "}
              CRYPTOCADEMY{" "}
            </h3>
            <div className="relative overflow-hidden">
              <Image src={Cryptocademy} alt="Cryptocademy website" />
              <div className="absolute h-full w-full bg-black/80 flex items-center justify-center bottom-0 group-hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <div></div>
                <p className="text-sm pt-4 font-light p-10">
                  Some dummy text about the stack used on this project. Some
                  dummy text about the stack used on this project.
                </p>
              </div>
            </div>
            <p className="text-sm pt-4 font-extralight">
              cryptocademy.deliciousdao.com
            </p>
          </a>
        </div>

        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://rando-mint-h91bedtuc-rylo-13.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-[#C8A951] text-lg"
          >
            <h3 className="text-xl font-extralight mb-2 py-2">RANDO-MINT</h3>
            <div className="group relative overflow-hidden">
              <Image src={randoMint} alt="Rando-Mint Website" />
              <div className="absolute h-full w-full bg-black/80 flex items-center justify-center bottom-0 group-hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="font-light text-sm p-10">
                  Some dummy text about the stack used on this project. Some
                  dummy text about the stack used on this project.
                </p>
              </div>
            </div>
            <p className="text-sm pt-4 font-extralight">
              {" "}
              randomint.comrandomint.com{" "}
            </p>
          </a>
        </div>

        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://cryptpromememarket.herokuapp.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-[#C8A951] text-lg"
          >
            <h3 className="text-xl font-extralight mb-2 py-2">MEME MARKET</h3>
            <div className="relative overflow-hidden">
              <Image src={Mememarket} alt="Mememarket website" />
              <div className="absolute h-full w-full bg-black/80 flex items-center justify-center bottom-0 group-hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="text-sm pt-4 font-light p-10">
                  Some dummy text about the stack used on this project. Some
                  dummy text about the stack used on this project.
                </p>
              </div>
            </div>
            <p className="text-sm pt-4 font-extralight">
              cryptpromememarket.herokuapp.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
