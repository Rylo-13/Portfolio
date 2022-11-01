import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/Ai";

export default function Footer() {
  return (
    <footer className="w-full h-[50px] z-10 fixed left-0 bottom-0 flex justify-center items-center text-4xl bg-[#191b1d]">
      <div className="flex flex-wrap justify-between gap-5 items-center mx-auto">
        <a
          href="https://instagram.com/ryl0"
          target="_blank"
          rel="noreferrer"
          className="text-[#C8A951] hover:text-[#957725]"
        >
          <AiFillInstagram className="p-[3px]" />
        </a>

        <a
          href="https://github.com/Rylo-13"
          target="_blank"
          rel="noreferrer"
          className="text-[#C8A951] hover:text-[#957725]"
        >
          <AiFillGithub className="p-[3px]" />
        </a>

        <a
          href="https://www.linkedin.com/in/rylanmcneil/"
          target="_blank"
          rel="noreferrer"
          className="text-[#C8A951] hover:text-[#957725]"
        >
          <AiFillLinkedin className="p-[3px]" />
        </a>
      </div>
    </footer>
  );
}
