import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="relative ">
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "rgba(2,236,170,1)" }} />
              <stop offset="100%" style={{ stopColor: "rgba(0,212,255,1)" }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,32L40,64C80,96,160,160,240,197.3C320,235,400,245,480,213.3C560,181,640,107,720,80C800,53,880,75,960,101.3C1040,128,1120,160,1200,149.3C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>

      <div className=" h-full w-full  pb-12 z-[60] bg-gradient-to-r from-[rgba(2,236,170,1)] to-[rgba(0,212,255,1)]">
        <div className="h-full w-full ">
          <div className="flex flex-col md:flex-row  gap-4  justify-around items-center mx-2">
            <div className="flex gap-[1px] justify-center items-center">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
              <h1 className="font-andika text-xl">GoShow</h1>
            </div>
            <div className="w-[300px] text-center mb-2 md:mb-0">
              <h1 className="text-xl font-[500] mb-4">We accept</h1>
              <div className="flex justify-around items-center h-full ">
                <div className="">
                  <Image
                    src="/assets/esewa.svg"
                    alt="esewa"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="">
                  <Image
                    src="/assets/imepay.svg"
                    alt="imepay"
                    width={130}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <div className=" flex flex-col w-[200px] text-center items-center mt-2 md:mt-0">
              <h1 className="text-xl font-[500] mb-2">Follow Us</h1>
              <ul className="w-full flex  justify-around items-center">
                <li
                  className=" cursor-pointer"
                  onClick={() => window.open("https://fb.com")}
                >
                  <MdFacebook size={40} />
                </li>
                <li
                  className="ml-4 cursor-pointer"
                  onClick={() => window.open("https://instagram.com")}
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
      </div>
    </div>
  );
}
