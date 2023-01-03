import Head from "next/head";
import Image from "next/image";
import dailyVibe from "../public/dailyVibe.png";
import memeMarket from "../public/memeMarket.png";
import randoMint from "../public/randoMint.png";
import cryptoPrices from "../public/cryptoPrices.png";

export default function Projects() {
  return (
    <div className="w-full max-h-screen px-2">
      <Head>
        <title>Projects</title>
        <meta name="description" content="Portfolio projects page" />
      </Head>
      <h1 className="mt-24 mb-6 text-center text-3xl md:text-4xl font-light text-[#C8A951] mx-auto justify-center">
        PROJECTS
      </h1>

      {/* Card 1 */}
      <div className="flex flex-col pb-16 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 my-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://the-daily-vibe-rylo-13.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-[#C8A951] text-lg"
          >
            <h3 className="text-xl font-extralight mb-2 py-2">
              {" "}
              THE DAILY VIBE{" "}
            </h3>
            <div className=" relative overflow-hidden">
              <Image src={dailyVibe} alt="The Daily Vibe website" />
              <div className="absolute px-2 pb-2 h-full w-full bg-black/80 text-white flex flex-col items-center justify-center bottom-0 group:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="text-xs md:text-sm font-light px-2 pb-2">
                  {" "}
                  Responsive full-stack real-time news website I built using the
                  mediastack API.
                </p>
                <p className="text-xs md:text-sm font-light pt-4">
                  {" "}
                  TypeScript | React | Next.js | Tailwind | StepZen | GraphQL |
                  Vercel{" "}
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm pt-4 font-extralight text-gray-600 underline decoration-gray-600 underline-offset-4 hover:text-[#C8A951] hover:decoration-[#C8A951]">
              the-daily-vibe.vercel.app
            </p>
          </a>
        </div>

        {/* Card 2 */}
        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://crypto-price-updates.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 text-lg hover:text-[#C8A951]"
          >
            <h3 className="text-xl font-extralight mb-2 py-2">
              CRYPTO PRICE UPDATES
            </h3>
            <div className="relative overflow-hidden">
              <Image src={cryptoPrices} alt="Crypto Price Updates website" />{" "}
              <div className="absolute py-10 px-4 h-full w-full bg-black/80 text-white flex flex-col items-center justify-center bottom-0 group-hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="text-xs md:text-sm font-light pt-2 px-2">
                  React website with live crypto price updates I built using the
                  CoinGecko API.
                </p>
                <p className="text-xs md:text-sm font-light pt-4 pb-2">
                  {" "}
                  JavaScript | React | CoinGecko API | CSS | Vercel{" "}
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm pt-6 font-extralight text-gray-600 underline decoration-gray-600 underline-offset-4 hover:text-[#C8A951] hover:decoration-[#C8A951]">
              crypto-prices.vercel.app
            </p>
          </a>
        </div>

        {/* Card 3 */}
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
              <div className="absolute p-2 h-full w-full bg-black/80 text-white flex flex-col items-center justify-center bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="text-xs md:text-sm font-light pb-2 px-2">
                  Full stack NFT project I built to understand the entire
                  process of creating a mintable NFT drop.
                </p>
                <p className="text-xs md:text-sm font-light pt-4">
                  TypeScript | React | Next.js | Tailwind | Thirdweb | MetaMask
                  | Sanity | Vercel
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm pt-4 font-extralight text-gray-600 underline decoration-gray-600 underline-offset-4 hover:text-[#C8A951] hover:decoration-[#C8A951]">
              {" "}
              rando-mint.vercel.app{" "}
            </p>
          </a>
        </div>

        {/* Card 4 */}
        <div className="basis-1/3 items-center flex-auto text-center rounded-lg pt-4 pb-8 px-4 mt-6 mb-6 mx-12 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <a
            href="https://cryptpromememarket.herokuapp.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 text-lg hover:text-[#C8A951]"
          >
            <h3 className="text-xl font-extralight mb-2 py-2">MEME MARKET</h3>
            <div className="relative overflow-hidden">
              <Image src={memeMarket} alt="Mememarket website" />{" "}
              <div className="absolute py-10 px-4 h-full w-full bg-black/80 text-white flex flex-col items-center justify-center bottom-0 group-hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                <p className="text-xs md:text-sm font-light pt-2 px-2">
                  NFT inspired marketplace for memes. Served as full stack
                  developer, primarily focused on the backend with Ruby. Built
                  and deployed in 1 week with a team of 4.
                </p>
                <p className="text-xs md:text-sm font-light pt-4 pb-2">
                  {" "}
                  Ruby on Rails | JavaScript | PostgreSQL | SASS | Heroku{" "}
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm pt-6 font-extralight text-gray-600 underline decoration-gray-600 underline-offset-4 hover:text-[#C8A951] hover:decoration-[#C8A951]">
              cryptpromememarket.herokuapp.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
