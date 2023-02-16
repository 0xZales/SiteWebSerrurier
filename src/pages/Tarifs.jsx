import React from "react";
import banner from "../assets/Serrurier.jpg";
import certif from "../assets/certificat.png";
import porte from "../assets/porte.jpg";
import locked from "../assets/portecle.jpg";
const Tarifs = () => {
  const callNumber = () => {
    var phoneNumber = "0651388366";

    if ("contacts" in navigator) {
      navigator.contacts.find(
        ["phoneNumbers"],
        function (contacts) {
          var contact = contacts[0];
          var number = contact.phoneNumbers[0].value;
          window.open("tel:" + number);
        },
        function () {
          window.open("tel:" + phoneNumber);
        }
      );
    } else {
      window.open("tel:" + phoneNumber);
    }
  };
  return (
    <div className="text-sm md:text-base">
        <section
        className={` banner w-full h-[500px] banner  text-black bg-cover bg-center bg-sky-500/100 relative `}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-full bg-[#061729] opacity-60 absolute"></div>
        {/* <img
          src={certif}
          alt=""
          className="z-10 opacity-100 absolute md:left-20 top-10 left-[33%]"
        /> */}
            <h1 className="absolute md:w-1/2 text-white md:left-[20%] left-8 top-32 md:text-4xl text-2xl font-bold">
          Nous intervenons sur le département de la Gironde. Quelque soit votre
          soucis de serrurerie,vitrerie ou rideaux métallique
        </h1>
        <div className="md:w-[400px] w-[80%] h-[80px] bg-orange-500 absolute md:right-[50%] md:left-[70%]  md:top-[45%] top-[60%] flex flex-col gap-3  left-10 p-4">

          <button
            className="w-full bg-[#061729] h-14 text-white flex items-center justify-center gap-3 text-xl rounded-md"
            onClick={callNumber}
          >
            Appelez-nous !{" "}
            <svg
              width="25"
              height="25"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
        </div>
      </section>
      <section className="w-full flex flex-col  gap-1 md:px-[20%] py-10 px-3">
        <div className="flex w-full flex-col ">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-xl font-bold">
              Grille tarifaire Serrurerie / Vitrerie
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>Ouverture de porte 95 € </p>
          <p>Remplacement de cylindre 85 €</p>
          <p>Remplacement batteuse de boite aux lettres 55 €</p>
          <p>Déplacement 60 €</p>
          <p>Main d'oeuvre 70 €</p>
        </div>
        <p className="text-sm">
          Majoration de 50% pour les interventions de 18h à 8h, les weekends et
          jours fériés
        </p>
      </section>
    </div>
  );
};

export default Tarifs;
