import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 w-full h-[50px] z-10 bg-[#191b1d]">
      <div className="max-w-[1240px] flex justify-between items-center p-4 text-gray-300">
        <Link href="/">
          <a className="font-extralight text-md text-[#C8A951] hover:underline hover:decoration-[#C8A951] underline-offset-4">
            <h1 className="font-bold text-xl">RYLAN MCNEIL</h1>
          </a>
        </Link>

        <div className="w-full md:block md:w-auto">
          <ul className="flex flex-col mt-4 bg-gray-50 rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
            <li>
              <Link href="/about" className=" rounded md:border-0 md:p-0">
                <a className="font-extralight text-md text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
                  ABOUT
                </a>
              </Link>
            </li>

            <li>
              <Link href="/projects" className="rounded md:border-0 md:p-0">
                <a className="font-extralight text-md text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
                  PROJECTS
                </a>
              </Link>
            </li>

            <li>
              <Link href="/skills" className="rounded md:border-0 md:p-0">
                <a className="font-extralight text-md text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
                  SKILLS
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contact" className="rounded md:border-0 md:p-0">
                <a className="font-extralight text-md text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
                  CONTACT
                </a>
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div className="block sm:hidden z-10">
            <AiOutlineMenu size={20} />
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-400 text-center ease-in duration-300">
            <ul>
              <li className="p-4 text-4xl hover:text-gray-500">
                <Link href="/about">
                  <a>ABOUT</a>
                </Link>
              </li>

              <li className="p-4 text-4xl hover:text-gray-500">
                <Link href="/projects">
                  <a>PROJECTS</a>
                </Link>
              </li>

              <li className="p-4 text-4xl hover:text-gray-500">
                <Link href="/skills">
                  <a>SKILLS</a>
                </Link>
              </li>

              <li className="p-4 text-4xl hover:text-gray-500">
                <Link href="/contact">
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Navbar() {
//   return (
//     <nav className="fixed w-full h-[50px] z-10 flex justify-between items-center px-10 bg-[#191b1d] text-gray-300">
//       <Link href="/" className="flex items-center">
//         <a className="font-extralight text-md text-[#C8A951] hover:underline hover:decoration-[#C8A951] underline-offset-4">
//           <h1>RYLAN MCNEIL</h1>
//         </a>
//       </Link>

//       <div className="hidden w-full md:block md:w-auto">
//         <ul className="flex flex-col mt-4 bg-gray-50 rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
//           <li>
//             <Link href="/about" className=" rounded md:border-0 md:p-0">
//               <a className="font-extralight text-md text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
//                 ABOUT
//               </a>
//             </Link>
//           </li>

//           <li>
//             <Link href="/projects" className="rounded md:border-0 md:p-0">
//               <a className="font-extralight text-md text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
//                 PROJECTS
//               </a>
//             </Link>
//           </li>

//           <li>
//             <Link href="/skills" className="rounded md:border-0 md:p-0">
//               <a className="font-extralight text-md text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
//                 SKILLS
//               </a>
//             </Link>
//           </li>

//           <li>
//             <Link href="/contact" className="rounded md:border-0 md:p-0">
//               <a className="font-extralight text-md text-white hover:underline hover:decoration-[#C8A951] underline-offset-4">
//                 CONTACT
//               </a>
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Button */}
//         <div>
//           <AiOutlineMenu size={20} />
//         </div>
//         {/* Mobile Menu */}
//         <div>
//           <ul className="">
//             <li>
//               <Link href="/about" className=" rounded md:border-0 md:p-0">
//                 <a className="">ABOUT</a>
//               </Link>
//             </li>

//             <li>
//               <Link href="/projects" className="rounded md:border-0 md:p-0">
//                 <a className="">PROJECTS</a>
//               </Link>
//             </li>

//             <li>
//               <Link href="/skills" className="rounded md:border-0 md:p-0">
//                 <a className="">SKILLS</a>
//               </Link>
//             </li>

//             <li>
//               <Link href="/contact" className="rounded md:border-0 md:p-0">
//                 <a className="">CONTACT</a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
