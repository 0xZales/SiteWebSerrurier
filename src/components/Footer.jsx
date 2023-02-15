import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#061729] flex text-md text-white p-5 items-center justify-between md:flex-row flex-col w-full">
      <p className="text-center">
        Copyright © 2023 Serrurier Toulouse Obert : 6 Rue Maurice Hurel, 31500
        Toulouse
      </p>
      <div className="flex gap-5 mt-2">
        <a href="">Mentions légales</a>
        <a href="">Politique de confidentialité</a>
      </div>
    </div>
  );
};

export default Footer;
