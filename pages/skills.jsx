import Image from "next/image";
import HTML from "../public/html.png";
import CSS from "../public/css.png";
import JavaScript from "../public/javascript.png";
import ReactImg from "../public/react.png";
import Node from "../public/node.png";
import GitHub from "../public/github.png";
import Tailwind from "../public/tailwind.png";

export default function Skills() {
  return (
    <div className="w-full min-h-screen bg-[#f6f6f6] text-gray-500">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4">Skills</p>
          <p className="py-4">Technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="bg-white shadow-md shadow-[#040c16]">
            <Image className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 py-1 bg-[#191b1d] text-[#C8A951]">HTML</p>
          </div>
          <div className="bg-white shadow-md shadow-[#040c16]">
            <Image className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4 py-1 bg-[#191b1d] text-[#C8A951]">CSS</p>
          </div>
          <div className="bg-white shadow-md shadow-[#040c16]">
            <Image className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-4 py-1 bg-[#191b1d] text-[#C8A951]">JAVASCRIPT</p>
          </div>
          <div className="bg-white shadow-md shadow-[#040c16]">
            <Image className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4 py-1 bg-[#191b1d] text-[#C8A951]">REACT</p>
          </div>
          <div className="bg-white shadow-md shadow-[#040c16]">
            <Image className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4 py-1 bg-[#191b1d] text-[#C8A951]">GITHUB</p>
          </div>
          <div className="bg-white shadow-md shadow-[#040c16]">
            <Image className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4 py-1 bg-[#191b1d] text-[#C8A951]">NODE JS</p>
          </div>
          <div className="bg-white shadow-md shadow-[#040c16]">
            <Image className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 py-1 bg-[#191b1d] text-[#C8A951]">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
}
