import SearchList from "./SearchList";
import { useRouter } from "next/router";
import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

export default function SearchBar({ handleClose }) {
  const router = useRouter();
  const searchRef = useRef();

  function handleKey(e) {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      handleClose();
    }
  }
  function handleSearch(e) {
    router.push(`search?q=${searchRef.current.value}`);
    handleClose();
  }

  return (
    <div className="py-[10px] px-[20px] block z-[1000] mt-[50px] mx-auto mb-0 text-[18px] w-screen  h-screen top-0 bottom-0 left-0 right-0 fixed">
      <div
        onClick={handleClose}
        className="w-screen bg-[rgba(49,49,49,0.8)] h-screen top-0 bottom-0 left-0 right-0 fixed"
      />

      <div
        className="absolute top-0 w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2
             leading-1.4 bg-gray-100 py-[50px] rounded-md max-w-600 min-w-300 flex justify-center items-start "
      >
        <div className="flex justify-between items-center w-[60vw] md:w-[50vw] h-full rounded-md border-y-[2px] border-x-[2px] border-solid border-[rgba(2,236,170,1)]">
          <div className="w-screen ml-2 ">
            <input
              onKeyDown={handleKey}
              ref={searchRef}
              className="mr-2 w-full bg-transparent font-[500] font-andika focus:outline-none"
              placeholder="Type here to search..."
              type="text"
              autoComplete="off"
            />
          </div>
          <div className="mx-2 cursor-pointer" onClick={handleSearch}>
            <FiSearch />
          </div>
        </div>
        <div className="mt-2 ml-4 cursor-pointer" onClick={handleClose}>
          <GrClose />
        </div>
      </div>
    </div>
  );
}
