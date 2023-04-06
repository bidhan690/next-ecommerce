import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import { FiSearch } from "react-icons/fi";
import { BsCartDash } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";

import SearchBar from "../searchbar/SearchBar";
import SmNavbar from "./SmNavbar";

export default function Hero() {
  const [navShadow, setNavShadow] = useState(false);
  const [search, toggleSearch] = useState(false);
  const [navBarToggle, setNavbarToggle] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 30) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (search || navBarToggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [search, navBarToggle]);

  const navToggler = () => {
    setNavbarToggle(!navBarToggle);
  };

  return (
    <>
      {search && (
        <SearchBar search={search} handleClose={() => toggleSearch(!search)} />
      )}

      <div
        className={`fixed w-full h-20  z-[100]  px-2 ${
          navShadow && "shadow-xl bg-[#ecf0f3]"
        }`}
      >
        <div className="flex justify-between items-center w-full h-[80px] ">
          <div className="flex items-center w-[100px] h-[100px]">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="ring logo"
                width={500}
                height={500}
                priority
              />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <div className="font-andika text-lg">
              <ul className="hidden md:flex justify-center font-bold">
                <li className="mx-4 ">
                  <Link href="/">Home</Link>
                </li>
                <li className="mx-4">
                  <Link href="/products">Products</Link>
                </li>
                <li className=" mx-4">
                  <Link href="/#latest">What&apos;s New</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mr-2 md:mx-0 flex items-center ">
            <FiSearch
              className="cursor-pointer ml-2 mr-6 "
              size={20}
              onClick={() => toggleSearch(!search)}
            />
            <BsCartDash className="cursor-pointer mx-2" size={20} />
            <HiOutlineBars3
              className="cursor-pointer ml-6 md:hidden"
              size={25}
              onClick={navToggler}
            />
          </div>
        </div>
      </div>
      <SmNavbar navBarToggle={navBarToggle} navToggler={navToggler} />
    </>
  );
}
