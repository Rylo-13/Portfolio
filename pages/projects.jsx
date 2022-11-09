import Image from "next/image";
import Cryptocademy from "../public/Cryptocademy.png";
import Mememarket from "../public/Mememarket.png";
import randoMint from "../public/randoMint.png";

export default function Projects() {
  return (
    <div className="w-full max-h-screen px-2">
      <h1 className="mt-20 text-center text-3xl md:text-4xl font-light text-[#C8A951] mx-auto justify-center">
        PROJECTS
      </h1>

      <div className="flex flex-col gap-4 pb-12 lg:flex-row">
        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 my-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="http://cryptocademy.deliciousdao.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-[#C8A951] text-lg"
          >
            <h3 className="text-xl font-extralight mb-2 py-2">
              {" "}
              CRYPTOCADEMY{" "}
            </h3>
            <div className=" relative overflow-hidden">
              <Image src={Cryptocademy} alt="Cryptocademy website" />
              <div className="absolute px-2 pb-2 h-full w-full bg-black/80 text-white flex flex-col items-center justify-center bottom-0 group:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-light px-2 pb-2">
                  {" "}
                  Served as a full stack Ruby on Rails developer in a team of
                  4.mCreating and deploying this educational blockchain app in
                  under 2 weeks.
                </p>
                <p className="text-xs font-light pt-4">
                  {" "}
                  Ruby on Rails | JavaScript | PostgreSQL | SASS | Heroku{" "}
                </p>
              </div>
            </div>
            <p className="text-xs pt-4 font-extralight text-gray-600 underline decoration-gray-600 underline-offset-4 hover:text-[#C8A951] hover:decoration-[#C8A951]">
              cryptocademy.deliciousdao.com
            </p>
          </a>
        </div>

        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://rando-mint-h91bedtuc-rylo-13.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 text-lg hover:text-[#C8A951]"
          >
            <h3 className="text-xl font-extralight mb-2 py-2">RANDO-MINT</h3>
            <div className="relative overflow-hidden">
              <Image src={randoMint} alt="Rando-Mint Website" />
              <div className="absolute p-4 h-full w-full bg-black/80 text-white flex flex-col items-center justify-center bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-light p-2">
                  A full stack NFT project I am currently working on to
                  understand the entire process of creating a mintable NFT drop.
                </p>
                <p className="text-xs font-light pt-4">
                  TypeScript | React | Next.js | Tailwind | Thirdweb | MetaMask
                  | Sanity | Vercel
                </p>
              </div>
            </div>
            <p className="text-xs pt-4 font-extralight text-gray-600 underline decoration-gray-600 underline-offset-4 hover:text-[#C8A951] hover:decoration-[#C8A951]">
              {" "}
              rando-mint.vercel.app{" "}
            </p>
          </a>
        </div>

        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://cryptpromememarket.herokuapp.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 text-lg hover:text-[#C8A951]"
          >
            <h3 className="text-xl font-extralight mb-2 py-2">MEME MARKET</h3>
            <div className="relative overflow-hidden">
              <Image src={Mememarket} alt="Mememarket website" />{" "}
              <div className="absolute py-10 px-4 h-full w-full bg-black/80 text-white flex flex-col items-center justify-center bottom-0 group-hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-light pt-2 px-2">
                  NFT inspired marketplace for memes. Served as full stack
                  developer, primarily focused on the backend with Ruby. Built
                  and deployed in 1 week with a team of 4.
                </p>
                <p className="text-xs font-light pt-4 pb-2">
                  {" "}
                  Ruby on Rails | JavaScript | PostgreSQL | SASS | Heroku{" "}
                </p>
              </div>
            </div>
            <p className="text-xs pt-6 font-extralight text-gray-600 underline decoration-gray-600 underline-offset-4 hover:text-[#C8A951] hover:decoration-[#C8A951]">
              cryptpromememarket.herokuapp.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
