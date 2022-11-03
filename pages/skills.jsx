export default function Skills() {
  return (
    <div className="w-full max-h-screen mx-auto">
      <h1 className="mt-20 text-3xl text-center text-[#C8A951]">SKILLS</h1>
      <div>
        <h2 className="text-xl font-extralight mt-4 text-gray-500 text-center">
          TECHNOLOGIES I HAVE WORKED WITH
        </h2>
      </div>
      <div className="pt-4 max-w-[900px] mx-auto grid grid-cols-1 items-start md:grid-cols-3 gap-4">
        <div className="mx-auto flex flex-col justify-center text-center">
          {" "}
          <h3 className="text-lg font-light text-[#C8A951]">LANGUAGES</h3>
          <div className="text-justify mx-auto pt-2 mb-4">
            <ul class="font-extralight list-disc list-inside">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Ruby</li>
              <li>CSS</li>
              <li>HTML5</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mb-4 flex flex-col flex-wrap justify-center text-center">
          {" "}
          <h3 className="text-lg font-light text-[#C8A951]">
            FRAMEWORKS & LIBRARIES
          </h3>
          <div className="text-justify mx-auto pl-5 pt-2">
            <ul class="font-extralight list-disc list-inside">
              <li>React</li>
              <li>Next.js</li>
              <li>Ruby On Rails</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          {" "}
          <h3 className="text-lg font-light text-[#C8A951]">OTHER TECH</h3>
          <div className="text-justify mx-auto pt-2 pl-14 mb-20">
            <ul class="font-extralight list-disc list-inside">
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Git Version Control</li>
              <li>Sanity</li>
              <li>Vercel</li>
              <li>Heroku</li>
              <li>Thirdweb</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
