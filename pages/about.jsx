export default function about() {
  return (
    <div className="w-full max-h-screen px-10 mx-auto">
      <div className="mt-20 text-center text-3xl text-[#C8A951] mx-auto flex flex-col justify-center h-full">
        <div className="max-w-[600px] w-full items-center grid grid-cols-1 gap-6 mx-auto">
          <h1 className="text-3xl"> ABOUT </h1>
          <p className=" text-sm mx-auto text-gray-500">
            While pursuing skateboarding, I also worked for YMCA Victoria as an
            event oraganiser and skateboarding coach. Mentoring and teaching
            students of different ages and backgrounds. I continue to do private
            coaching sessions on my weekends.{" "}
          </p>
          <p className="text-sm mx-auto text-gray-500">
            After always being fascinated by tech and the art of programming, I
            decided to pursue it by starting to do some online courses and
            tutorials. This led me to studying web development at Le Wagon
            Bootcamp and becoming a full stack developer, proficient in Ruby On
            Rails and JavaScript.{" "}
          </p>
          <p className="text-sm mx-auto text-gray-500">
            I'm a life-long learner and continue to work on my skills as a
            developer. Currently, I am focused on expanding my knowledge in
            Typescript, React and Next.js. I love exploring new technologies and
            understanding how they work!
          </p>
          <p className="text-sm mb-20 mx-auto text-gray-500">
            {" "}
            I live in Elwood of Melbourne, Australia with my wife Rita who is a
            talented visual artist for a US based AI company.
          </p>
        </div>
      </div>
    </div>
  );
}
