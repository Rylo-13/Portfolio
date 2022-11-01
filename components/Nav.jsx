import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed w-full h-[50px] z-10 flex justify-between items-center px-4 bg-[#191b1d] text-gray-300">
      <Link href="/" className="flex items-center">
        <a className="font-[Lato] text-md text-[#C8A951] hover:underline hover:decoration-[#C8A951] underline-offset-4">
          RYLAN MCNEIL
        </a>
      </Link>

      <div className="hidden w-full md:block md:w-auto">
        <ul className="flex flex-col mt-4 bg-gray-50 rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
          <li>
            <Link href="/about" className=" rounded md:border-0 md:p-0">
              <a className="text-md font-[Lato] text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
                ABOUT
              </a>
            </Link>
          </li>

          <li>
            <Link href="/projects" className="rounded md:border-0 md:p-0">
              <a className="text-md font-[Lato] text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
                PROJECTS
              </a>
            </Link>
          </li>

          <li>
            <Link href="/skills" className="rounded md:border-0 md:p-0">
              <a className="text-md font-[Lato] text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
                SKILLS
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contact" className="rounded md:border-0 md:p-0">
              <a className="Lato text-md font-[Lato] text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
                CONTACT
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
