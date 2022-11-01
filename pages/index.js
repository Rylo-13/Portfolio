import Head from "next/head";
import Image from "next/image";
import rylan from "../public/rylan.png";
import { TiThMenu } from "react-icons/ti";

export default function main() {
  return (
    <div>
      <Head>
        <title>Rylan McNeil</title>
        <meta name="Rylan McNeil Portfolio" content="Portfolio" />
        <link rel="icon" href="/" />
      </Head>

      <main>
        <div className="w-full min-h-screen bg-[#ececec]">
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center lg:px-8">
            <div className=" relative shadow-md rounded-full mb-12 mx-auto w-60 h-60 md:h-80 md:w-80 md:mt-20 lg:mt-20 ">
              <Image src={rylan} alt="Rylan PFP" />
            </div>
            <h2 className=" text-4xl py-2 font-light text-gray-600 font-butler md:text-6xl">
              Rylan McNeil
            </h2>
            <div>
              <h3 className=" text-2xl font-light py-2 text-gray-500 md:text-3xl">
                Full Stack Developer based in Melbourne
              </h3>
              <p className=" text-lg py-5 leading-8 md:text-xl max-w-xl mx-auto text-gray-400">
                I’m a full-stack developer ! Currently, I’m focused on building
                responsive full-stack web applications and learning new
                programming technologies.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
