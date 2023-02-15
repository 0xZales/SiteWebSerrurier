import React from "react";
import banner from "../assets/Serrurier.jpg";
import certif from "../assets/certificat.png";
import porte from "../assets/porte.jpg";
import locked from "../assets/portecle.jpg";
const Serrurier = () => {
  const callNumber = () => {
    // Remplacez le numéro ci-dessous par le numéro que vous souhaitez appeler
    var phoneNumber = "0123456789";

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
        <h1 className="absolute text-white md:left-[20%] left-8 top-48 text-4xl font-bold">
          Ouverture de porte
        </h1>
        <div className="w-[400px] h-[150px] bg-orange-500 absolute md:right-[50%] md:left-[70%]  md:top-40 top-64 flex flex-col gap-3 px-7 left-1 py-4">
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
              Serrurerie - Vitrerie - Rideaux Métallique
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            Vous avez besoin d’un serrurier vitrier en urgence fiable en moins
            de 30 min ? Nous intervenons sur Bordeaux, la Gironde, Archachon et
            son bassin. Quelque soit votre soucis de serrurerie ou vitrerie sur
            Bordeaux : Ouverture de porte Porte claquée Perte de clés Clé cassée
            Serrure blindée qui ne ferme ou ne s’ouvre plus Serrure forcée Votre
            porte ne peut pas s’ouvrir Votre vitrage est à remplacer. Rapid
            Dépannage 33 intervient dans les domaines de la serrurerie et
            vitrerie. Votre serrurier vitrier d’urgence certifié et diplômé
            d’état. Devis gratuit.
          </p>
        </div>
        <div className="flex w-full flex-col ">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-2xl font-bold">
              Domaines d'intervention
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            Notre expertise en tant que serrurier vitrier nous permet
            d’intervenir sur le dépannage et la pose de tout type de serrures*.
            Mais également sur tout type de vitrage, qu’il soit fissuré, cassé,
            vandalisé. * Nous utilisons les méthodes d’ouvertures fines pour
            assurer un minimum de frais.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-2xl font-bold">Assurance</h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            Pensez à vérifier votre couverture en cas d’effraction ou de perte
            de clés. En effet, votre banque ou votre assurance habitation
            peuvent couvrir tous services et réparations de vitrerie. Que ce
            soit pour une vitre cassée ou fissurée (avec la prise en charge par
            l’assurance de “bris de glace”). Un serrurier d’urgence intervient
            pour: ouverture de porte simple ou porte blindée remplacement de
            cylindre ou serrure en fonction des clauses incluses dans les
            contrats. Avant les vacances Pensez à l’opération Tranquillité
            Vacances Prévenez la Gendarmerie Vérifiez l’état de vos portes et
            serrures Prévenez vos voisins
          </p>
          <img src={locked} alt="serrurier" className="md:w-[50%]" />
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-2xl font-bold">Cambriolage</h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            Si vous avez été cambriolé, votre porte ou cylindre ont été forcé ou
            cassé, une vitre cassée, contactez immédiatement la Police ou la
            Gendarmerie Nationale. Contactez ensuite votre assurance, ainsi
            qu’un serrurier en urgence et un vitrier pour l’installation de
            serrure ou remplacement de vitrage à Bordeaux pour la mise en
            sécurité.
          </p>
          <img src={porte} alt="Serrurier" className="md:w-2/4 m-auto" />
        </div>
      </section>
    </div>
  );
};

export default Serrurier;
