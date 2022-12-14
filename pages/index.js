import Head from "next/head";
import Image from "next/image";
import rylan from "../public/rylan.png";

export default function main() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col min-h-screen justify-center px-6 lg:px-2 2xl:px-0">
      <Head>
        <title>Rylan McNeil</title>
        <meta name="description" content="Portfolio index page" />
      </Head>

      <div className="rounded-2xl shadow-xl justify-center mx-auto my-16 px-14 pb-14 flex flex-col h-full text-center">
        <div className="shadow-md scale-90 rounded-full mx-auto w-60 h-60 md:scale-100 ">
          <Image src={rylan} alt="Rylan PFP" />
        </div>
        <h1 className="text-3xl my-6 font-light text-[#C8A951] md:text-4xl">
          RYLAN MCNEIL
        </h1>
        <div>
          <h3 className="text-lg font-light mb-2 text-gray-600 md:text-2xl">
            Full Stack Developer based in Melbourne, Australia.
          </h3>
          <p className="font-light pt-4 px-1 md:text-lg max-w-2xl mx-auto text-gray-600">
            I’m a full-stack developer, focused on building responsive web
            applications with a clean design. I love working alone or in a team
            with like-minded people to build useful applications. My experience
            as an accomplished skateboarder helps me bring creativity,
            perseverance and determination to the job.
          </p>
          <ul className="font-light flex flex-col items-center text-center pt-8 px-1 md:text-lg max-w-2xl mx-auto text-gray-600">
            <li>
              {" "}
              - JavaScript, React.js, Next.js, HTML, CSS, SASS and Tailwind{" "}
            </li>
            <li> - Ruby on Rails, AWS, Heroku, Vercel, GitHub, SQL </li>
            <li> - Relational Databasing + Active Record </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
