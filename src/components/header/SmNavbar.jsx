import Link from "next/link";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export default function SmNavbar({ navBarToggle, navToggler }) {
  return (
    <div
      className={
        navBarToggle
          ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[1000] "
          : ""
      }
    >
      <div
        className={
          navBarToggle
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F6F1E9]   ease-in duration-500 "
            : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-300 "
        }
      >
        <div>
          <div className="flex justify-end mr-4 mt-2">
            <div
              className="flex justify-center items-center  w-[50px] h-[50px] cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 "
              onClick={navToggler}
            >
              <GrClose size={25} />
            </div>
          </div>
          <div className="flex items-center ">
            <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
            <h1 className="font-andika text-xl ml-3 font-[500] ">GoShow</h1>
          </div>
        </div>

        <div className=" flex justify-center  ">
          <h1 className="font-oxygen text-lg text-center border-b border-gray-300 ">
            Buy quality products!
          </h1>
        </div>

        <div className="h-[200px] ">
          <ul className="flex flex-col h-full justify-center items-center font-andika text-xl font-[500] ">
            <li className="my-3" onClick={navToggler}>
              <Link href="/">Home</Link>
            </li>
            <li className="my-3" onClick={navToggler}>
              <Link href="/products">Products</Link>
            </li>
            <li className="my-3" onClick={navToggler}>
              <Link href="/#latest">What&apos;s New</Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col text-center items-center mt-6">
          <h1 className="text-xl font-[500] mb-6">Follow Us</h1>
          <ul className="flex justify-around w-full">
            <li
              className=" cursor-pointer"
              onClick={() =>
                window.open("https://www.facebook.com/priceless.hub")
              }
            >
              <MdFacebook size={40} />
            </li>
            <li
              className="ml-4 cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/priceless_fashions_")
              }
            >
              <AiOutlineInstagram size={40} />
            </li>
            <li
              className="ml-4 cursor-pointer"
              onClick={() => window.open("https://whatsapp.com")}
            >
              <BsWhatsapp size={35} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
