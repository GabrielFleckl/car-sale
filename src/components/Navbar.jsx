import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isBottomOfPage, setIsBottomOfPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const BottomOfPage =
        window.innerHeight + window.scrollY > document.body.offsetHeight;
      setIsBottomOfPage(BottomOfPage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className={`${isBottomOfPage ? "hidden" : "w-full fixed z-50"}`}>
      <div
        className={`${
          scrolled
            ? "bg-slate-600 bg-opacity-20 backdrop-blur-md shadow-lg delay-100 ease-in"
            : "md:bg-transparent md:bg-opacity-0 md:backdrop-blur-none md:shadow-none bg-slate-600 bg-opacity-20 backdrop-blur-md shadow-lg delay-100 ease-in transition"
        } text-white px-5 py-5 my-5 w-4/5 top-0 rounded-xl container border-b border-[#383838]`}
      >
        <div className="flex justify-between items-center font-medium">
          <ul className="flex">
            <img src={logo} alt="UCT" />
          </ul>
          <ul className="hidden items-center gap-9 md:flex">
            <li className="cursor-pointer hover:bg-red-700 rounded-md transition p-2">
              Home
            </li>
            <li className="cursor-pointer hover:bg-red-700 rounded-md transition p-2">
              Service Booking
            </li>
            <li className="cursor-pointer hover:bg-red-700 rounded-md transition p-2">
              Cars
            </li>
            <li className="cursor-pointer hover:bg-red-700 rounded-md transition p-2">
              Workshop
            </li>
            <li className="cursor-pointer hover:bg-red-700 rounded-md transition p-2">
              (51)xxxx-xxxx
            </li>
          </ul>
          <Dropdown
            name="Menu"
            sectionsName={["Home", "Service Booking", "Cars", "Workshop"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Navbar;

// className={`${
//   scrolled
//     ? "bg-slate-600 bg-opacity-20 backdrop-blur-md shadow-lg delay-100 ease-in"
//     : "md:bg-transparent md:bg-opacity-0 md:backdrop-blur-none md:shadow-none bg-slate-600 bg-opacity-20 backdrop-blur-md shadow-lg delay-100 ease-in transition"
// } navbar w-3/4 m-auto bg-base-100 mt-4 rounded-lg transition md:px-8`}
