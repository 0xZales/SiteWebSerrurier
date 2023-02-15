import React from "react";
import logo from "../assets/crop.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
// #061729

import { navLikns } from "../constant/index.js";
const Header = () => {
  const [active, setActive] = useState("serrurerie");
  const [visible, setVisible] = useState(true);
  const show = (lien)=>{
    setActive(lien.link)
    setVisible(false)
  }
  return (
    <div className="w-full relative">
      <div className={`absolute w-[80%] bg-[#061729] left-[10%] md:hidden ${visible? "flex ":"hidden"} flex text-white z-50 top-[50%]`}>
        <ul className="w-full text-center">
          {navLikns.map((link) => (
            <div
              key={link.id}
              className={`border border-t-0 p-2 h-10 ${
                active === link.link ? "bg-orange-500" : ""
              }`}
            >
              <li>
                <Link
                  to={`/${link.link}`}
                  className="hover:text-orange-500 transition-all duration-300"
                  onClick={() => show(link)}
                >
                  {link.title}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="w-full bg-orange-500 flex md:flex-row flex-col  justify-between items-center md:px-10 py-3 md:text-lg text-xs gap-4">
        <p>Artisan Serrurier Toulouse : 6 Rue Maurice Hurel, 31500 Toulouse </p>
        <p>Email : contact@depanneur-toulousain.fr | Tél. 06 45 79 25 44</p>
      </div>
      <div className="w-full bg-[#061729] md:flex  justify-between items-center md:px-[20%]  text-white h-36">
        <div className="bg-white flex flex-col items-center justify-center h-full md:p-4 text-black relative">
          <svg
          onClick={()=>setVisible(!visible)}
            className="absolute right-1 top-0 cursor-pointer md:hidden flex"
            width="46"
            height="46"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 12h18"></path>
            <path d="M3 6h18"></path>
            <path d="M3 18h18"></path>
          </svg>
          <img src={logo} alt="Logo" className="h-16" />
          <p className="text-lg font-bold mt-1 uppercase">
            Rapide dépannage 33
          </p>
          <div className="flex gap-1 text-xs font-bold mt-1">
            <p>Serrurerie -</p>
            <p>Vitrerie -</p>
            <p>Rideaux Métallique</p>
          </div>
        </div>
        <ul className="w-2/4 md:flex hidden justify-between">
          {navLikns.map((link) => (
            <li key={link.id}>
              <Link
                to={`/${link.link}`}
                className={`hover:text-orange-500 transition-all duration-300 ${active===link.link? "text-orange-500":"text-white"}`}
                onClick={() => setActive(link.link)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
