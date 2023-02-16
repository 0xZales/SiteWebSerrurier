import React from 'react'
import banner from "../assets/Serrurier.jpg";
import certif from "../assets/certificat.png";
import porte from "../assets/porte.jpg";
import locked from "../assets/portecle.jpg";
const Rideaux = () => {
  const callNumber = () => {
    // Remplacez le numéro ci-dessous par le numéro que vous souhaitez appeler
    var phoneNumber = "0651388366";

    // Vérifie si le navigateur supporte la fonction d'appel
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
    <div>
        <section
        className={` banner w-full h-[500px] banner  text-black bg-cover bg-center bg-sky-500/100 relative `}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-full bg-[#061729] opacity-60 absolute"></div>
        <img
          src={certif}
          alt=""
          className="z-10 opacity-100 absolute md:left-20 top-10 left-[33%]"
        />
        <h1 className="absolute md:w-1/2 text-white md:left-[20%] left-8 top-48 md:text-4xl font-bold">
          Nous intervenons sur le département de la Gironde. Quelque soit votre
          soucis de serrurerie,vitrerie ou rideaux métallique
        </h1>
        <div className="w-[400px] h-[150px] bg-orange-500 absolute md:right-[50%] md:left-[70%]  md:top-40 top-[60%] flex flex-col gap-3 px-7 left-1 py-4">
          <div className="w-full h-14 flex items-center justify-center gap-3">
            <div className="w-2/12 h-[2px] bg-white"></div>
            <p className="text-xl italic">On vous rappelle </p>
            <div className="w-2/12 h-[2px] bg-white"></div>
          </div>

          <button
            className="w-full bg-[#061729] h-14 text-white flex items-center justify-center gap-3 text-xl"
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
          <h1 className="text-[#061729] text-2xl font-bold">
            L'ouverture de porte
          </h1>
          <div className="w-1/12 h-[2px] bg-[#061729]"></div>
        </div>
        <p>
          Vous avez perdu vos clés, vous êtes victime d’un cambriolage, vous
          avez tout simplement claqué la porte et vous ne pouvez plus rentrer.
          Quel que soit le cas de figure, Obert Toulouse intervient rapidement
          pour vous dépanner, sans changer la serrure si ce n’est pas
          nécessaire en pratiquant la technique d’ouverture fine pour
          l’ouverture de votre porte.
        </p>
        <br />
        <p>
          Quel que soit le cas de figure, Obert Toulouse intervient rapidement
          pour vous dépanner, sans changer la serrure si ce n’est pas
          nécessaire en pratiquant la technique d’ouverture fine pour
          l’ouverture de votre porte.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#061729] text-xl font-bold">La porte claquée</h1>
        <p>
          {" "}
          Lorsqu’une porte – simple ou blindée – est claquée, la technique de
          la feuille radio devrait permettre l’ouverture de la porte.
          Ceci-dit, on a rarement une radiographie sous la main quand on se
          retrouve coincé en extérieur. Votre dépanneur a, lui, à disposition
          l’outillage nécessaire pour toute ouverture de porte sans endommager
          la serrure.
        </p>
        <img src={porte} alt="Serrurier" className="md:w-2/4 m-auto" />
      </div>
      <div className="flex flex-col gap-2 mt-2 w-full">
        <h1 className="text-[#061729] text-xl font-bold">
          La porte fermée à clé
        </h1>
        <div className="flex md:flex-row w-full flex-col items-center">
          <p className="md:w-[50%]">
            {" "}
            Lorsqu’une porte – simple ou blindée – est claquée, la technique
            de la feuille radio devrait permettre l’ouverture de la porte.
            Ceci-dit, on a rarement une radiographie sous la main quand on se
            retrouve coincé en extérieur. Votre dépanneur a, lui, à
            disposition l’outillage nécessaire pour toute ouverture de porte
            sans endommager la serrure.
          </p>
          <img src={locked} alt="serrurier" className="md:w-[50%] md:mt-0 mt-3" />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-[#061729] text-xl font-bold">
          Pose de serrure de boite aux lettres
        </h1>
        <div className="flex md:flex-row w-full flex-col gap-5 items-center">
          <img src={locked} alt="serrurier" className="md:w-[30%]" />
          <p className="md:w-[50%]">
            {" "}
            Vous avez perdu votre trousseau ou clé de la serrure de boite aux
            lettres. Nous pouvons vous la remplacer.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-[#061729] text-xl font-bold">
          Pose de ferme porte
        </h1>
        <div className="flex md:flex-row w-full flex-col gap-5 items-center">
          <p className="md:w-[50%]">
            {" "}
            Le ferme porte aussi appelé groom est un dispositif font le
            mécanisme assure la fermeture automatique d’une porte. Ce
            dispositif permet d’assurer la fermeture d’une porte de hall,
            d’escalier ou d’un portail en toute sécurité. Il existe des fermes
            porte à bras compas, à bras coulissant ou à ressort. Quel que soit
            le modèle, il est indispensable de porter une attention toute
            particulière à la pose, pour que le ferme porte joue pleinement
            son rôle. Obert Serrurier Toulouse vous accompagne dans le choix,
            la pose et les réglages de votre ferme porte.
          </p>
          <img src={locked} alt="serrurier" className="md:w-[50%]" />
        </div>
      </div>
    </section>
  </div>
  )
}

export default Rideaux
