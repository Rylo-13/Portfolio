import Image from "next/image";
import Cryptocademy from "../public/Cryptocademy.png";
import Mememarket from "../public/Mememarket.png";
import randoMint from "../public/randoMint.png";

export default function Projects() {
  return (
    <div className="w-full min-h-screen py-6 px-2 mb-10 flex flex-col justify-center bg-[#f6f6f6]">
      <h1 className="text-center text-4xl mt-20 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:flex-auto">
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
              <h3 className="text-2xl py-6"> Cryptocademy </h3>
              <div className="pt-4 pb-6">
                <Image src={Cryptocademy} alt="Cryptocademy website" />
              </div>
              <p>cryptocademy.deliciousdao.com</p>
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
              <h3 className=" text-2xl py-6"> Meme Market </h3>
              <div className=" pt-2 pb-6">
                <Image src={Mememarket} alt="Mememarket website" />
              </div>

              <p> cryptpromememarket.herokuapp.com </p>
            </div>
          </a>
        </div>

        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C8A951] text-lg "
          >
            <div>
              <h3 className=" text-2xl py-6">Rando-Mint</h3>
              <div className=" pt-2 pb-6">
                <Image src={randoMint} alt="Rando-Mint Website" />
              </div>

              <p> randomint.herokuapp.com </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
