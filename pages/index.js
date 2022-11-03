import Head from "next/head";
import Image from "next/image";
import rylan from "../public/rylan.png";
import { TiThMenu } from "react-icons/ti";

export default function main() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col min-h-screen py-20 px-10 lg:px-10 2xl:px-0">
      <Head>
        <title>Rylan McNeil</title>
        <meta name="Rylan McNeil Portfolio" content="Portfolio" />
        <link rel="icon" href="/" />
      </Head>

      <main className="w-full rounded-2xl min-h-screen shadow-xl">
        <div className="max-w-[1000px] justify-center mx-auto px-8 flex flex-col h-full text-center lg:px-8">
          <div className="mt-8 shadow-md rounded-full mx-auto w-60 h-60 md:h-80 md:w-80 ">
            <Image src={rylan} alt="Rylan PFP" />
          </div>
          <h2 className="text-3xl my-8 font-normal text-[#C8A951] md:text-4xl">
            RYLAN MCNEIL
          </h2>
          <div>
            <h3 className="text-lg font-extralight mb-2 text-gray-500 md:text-2xl">
              Full Stack Developer based in Melbourne, Australia.
            </h3>
            <p className="font-extralight pt-4 md:text-lg max-w-2xl mx-auto text-gray-500">
              I’m a full-stack developer, currently focused on building
              responsive web applications and learning new technologies. My
              experience as an accomplished skateboarder helps me bring
              creativity, perseverance, and meticulousness to the job.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
