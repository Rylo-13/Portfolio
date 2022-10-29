import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/Ai";

export default function Footer() {
  return (
    <footer className="w-full h-[70px] z-10 fixed left-0 bottom-0 flex justify-center items-center text-4xl bg-[#191b1d]">
      <div className="flex flex-wrap justify-between gap-5 items-center mx-auto">
        <a
          href="https://instagram.com/ryl0"
          target="_blank"
          rel="noreferrer"
          className=" hover:animate-bounce text-[#C8A951] hover:text-[#957725]"
        >
          <AiFillInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/rylanmcneil/"
          target="_blank"
          rel="noreferrer"
          className=" hover:animate-bounce text-[#C8A951] hover:text-[#957725]"
        >
          <AiFillLinkedin />
        </a>

        <a
          href="https://github.com/Rylo-13"
          target="_blank"
          rel="noreferrer"
          className=" hover:animate-bounce text-[#C8A951] hover:text-[#957725]"
        >
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
}
