import React from "react";
import certif from '../assets/certificat.png'
const Footer = () => {
  return (
    <>
      <div className="w-full bg-orange-500 flex md:flex-row flex-col  justify-between items-center md:px-10 py-3 md:text-lg text-xs gap-4">
        <p>Artisan Serrurier Bordeaux </p>
        <p>Email : rapid.depannage33@gmail.com | Tél. 06 51 38 83 66</p>
      </div>
      <div className="bg-[#061729] flex  items-center justify-center w-full">
        <img src={certif} alt="certificat" className=" mt-4" />
      </div>
      <div className="bg-[#061729] flex text-md text-white p-5 items-center justify-between md:flex-row flex-col w-full">


        <p className="text-center">
          Copyright © 2023 Rapide dépannage 33 Bordeaux
        </p>
        <div className="flex gap-5 mt-2">
          <a href="mentions-legales">Mentions légales</a>
          <a href="politique-de-confidentialite">Politique de confidentialité</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
