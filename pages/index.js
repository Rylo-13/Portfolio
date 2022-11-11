import Head from "next/head";
import Image from "next/image";
import rylan from "../public/rylan.png";

export default function main() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col min-h-screen justify-center px-6 lg:px-2 2xl:px-0">
      <Head>
        <title>Rylan McNeil</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <div className=" rounded-2xl shadow-xl justify-center mx-auto px-12 pb-12 flex flex-col h-full text-center">
        <div className="shadow-md scale-90 rounded-full mx-auto w-60 h-60 md:scale-100 ">
          <Image src={rylan} alt="Rylan PFP" />
        </div>
        <h1 className="text-3xl md:text-4xl 2xl:text-6xl my-6 font-light text-[#C8A951]">
          RYLAN MCNEIL
        </h1>
        <div>
          <h3 className="text-lg md:text-2xl 2xl:text-3xl font-extralight mb-2 text-gray-600">
            Full Stack Developer based in Melbourne, Australia.
          </h3>
          <p className="font-extralight pt-4 px-1 md:text-lg 2xl:text-xl max-w-2xl mx-auto text-gray-600">
            I’m a full-stack developer, focused on building responsive web
            applications with a clean design. My experience as an accomplished
            skateboarder helps me bring creativity, perseverance, and
            meticulousness to the job.
          </p>
        </div>
      </div>
    </div>
  );
}
