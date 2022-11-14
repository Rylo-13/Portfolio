/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";

export default function about() {
  return (
    <div className="w-full h-full max-h-screen px-10 mx-auto">
      <Head>
        <title>About</title>
        <meta name="description" content="Portfolio about page" />
      </Head>
      <div className="text-center mx-auto flex flex-col justify-center h-full">
        <div className="max-w-[700px] w-full items-center font-extralight px-2 md:text-lg grid grid-cols-1 gap-4 mx-auto">
          <h1 className="mt-24 mb-4 text-3xl md:text-4xl font-light text-[#C8A951]">
            {" "}
            ABOUT{" "}
          </h1>
          <p className=" text-gray-600">
            While pursuing skateboarding, I also worked for YMCA Victoria as an
            event organiser and skateboarding coach. Mentoring and teaching
            students of different ages and backgrounds. I continue to do private
            coaching sessions on my weekends.{" "}
          </p>
          <p className="mx-auto text-gray-600">
            After always being fascinated by tech and the art of programming, I
            decided to pursue a new career path by working through some online
            coding courses. This led me to studying web development on campus at
            Le Wagon Bootcamp and becoming a full stack developer, proficient in
            Ruby On Rails and JavaScript.{" "}
          </p>
          <p className="mx-auto text-gray-600">
            I'm a life-long learner and continue to work on my skills as a
            developer. Currently, I am focused on expanding my knowledge of
            Typescript, Next.js and Solidity. I love exploring new technologies
            and understanding how they work!
          </p>
          <p className="mb-20 mx-auto text-gray-600">
            {" "}
            I live in the beautiful suburb of Elwood in Melbourne, Australia
            with my wife, Rita, who is a talented visual artist for a US-based
            AI company.
          </p>
        </div>
      </div>
    </div>
  );
}
