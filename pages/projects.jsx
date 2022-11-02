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
              <div className=" pt-4 pb-6">
                <Image src={randoMint} alt="Rando-Mint Website" />
              </div>

              <p className="text-sm font-extralight">
                {" "}
                randomint.comrandomint.com{" "}
              </p>
            </div>
          </a>
        </div>

        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://cryptpromememarket.herokuapp.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C8A951] text-lg"
          >
            <div>
              <h3 className="text-2xl font-extralight py-6">MEME MARKET</h3>
              <div className=" pt-4 pb-6">
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
