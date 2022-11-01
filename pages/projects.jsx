import Image from "next/image";
import Cryptocademy from "../public/Cryptocademy.png";
import Mememarket from "../public/Mememarket.png";
import randoMint from "../public/randoMint.png";

export default function Projects() {
  return (
    <div className="w-full min-h-screen py-6 px-2 mb-10 flex flex-col justify-center bg-[#f6f6f6]">
      <h1 className="text-center text-4xl font-semibold font-sans mt-20 max-w-[1000px] text-zinc-600 mx-auto px-8 flex flex-col justify-center h-full lg:flex-auto">
        PROJECTS
      </h1>
      <div className="flex flex-col gap-2 py-6 lg:mb-20 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 my-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="http://cryptocademy.deliciousdao.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C8A951] text-lg"
          >
            <div>
              <h3 className="text-2xl font-extralight py-6"> CRYPTOCADEMY </h3>
              <div className="pt-4 pb-6">
                <Image src={Cryptocademy} alt="Cryptocademy website" />
              </div>
              <p className="text-sm font-extralight">
                cryptocademy.deliciousdao.com
              </p>
            </div>
          </a>
        </div>

        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://rando-mint-h91bedtuc-rylo-13.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C8A951] text-lg "
          >
            <div>
              <h3 className="text-2xl font-extralight py-6">RANDO-MINT</h3>
              <div className=" pt-2 pb-6">
                <Image src={randoMint} alt="Rando-Mint Website" />
              </div>

              <p className="text-sm font-extralight"> randomint.com </p>
            </div>
          </a>
        </div>

        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://cryptpromememarket.herokuapp.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C8A951] text-lg "
          >
            <div>
              <h3 className="text-2xl font-extralight py-6">MEME MARKET</h3>
              <div className=" pt-2 pb-6">
                <Image src={Mememarket} alt="Mememarket website" />
              </div>
              <p className="text-sm font-extralight">
                cryptpromememarket.herokuapp.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
