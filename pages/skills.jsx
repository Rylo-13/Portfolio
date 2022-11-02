export default function Skills() {
  return (
    <div className="w-full max-h-screen mx-auto">
      <h1 className="mt-20 mb-10 text-3xl text-center text-[#C8A951]">
        SKILLS
      </h1>
      <div>
        <p className="text-center">Technologies I have worked with</p>
      </div>
      <div className="pt-4 max-w-[1000px] mx-auto grid items-start md:grid-cols-3 gap-4">
        <div className="mx-auto flex flex-col justify-center text-center">
          {" "}
          <h3 className="text-xl text-[#C8A951]">Languages</h3>
          <div className="text-left list-disc p-6">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Ruby</li>
            <li>CSS</li>
            <li>HTML5</li>
            <li>SQL</li>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center text-center">
          {" "}
          <h3 className="text-xl text-[#C8A951]">Frameworks & Libraries</h3>
          <div className="text-left list-disc p-6">
            <li>React</li>
            <li>Next.js</li>
            <li>Ruby On Rails</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center text-left">
          {" "}
          <h3 className="text-xl pl-6 pb-4 text-[#C8A951]">More</h3>
          <div className="text-left justify-center px-2">
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Git Version Control</li>
            <li>Sanity</li>
            <li>Vercel</li>
            <li>Heroku</li>
            <li>Thirdweb</li>
          </div>
        </div>
      </div>
    </div>
  );
}
