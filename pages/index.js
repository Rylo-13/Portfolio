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
        <div className="w-full h-screen bg-[#ececec]">
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center">
            <div className=" relative shadow-md rounded-full mb-12 mx-auto w-60 h-60 md:h-80 md:w-80">
              <Image src={rylan} alt="Rylan PFP" />
            </div>
            <h2 className=" text-4xl py-2 text-gray-500 font-butler md:text-6xl">
              Rylan McNeil
            </h2>
            <div>
              <h3 className=" text-2xl py-2 text-gray-500 md:text-3xl">
                Full Stack Developer based in Melbourne
              </h3>
              <p className=" text-lg py-5 leading-8 md:text-xl max-w-xl mx-auto text-gray-500">
                I’m a full-stack developer with a love for programming.
                Currently, I’m focused on building responsive full-stack web
                applications.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
