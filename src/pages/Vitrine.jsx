import React from "react";
import banner from "../assets/vitrier.webp";
import locked from "../assets/vitre.jpg";
const Vitrine = () => {
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
        className={` banner w-full h-[500px] banner  text-black bg-cover bg-top bg-sky-500/100 relative `}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-full bg-[#061729] opacity-60 absolute"></div>
        <h1 className="absolute md:w-1/2 text-white md:left-[15%] left-8 top-24 md:text-4xl text-2xl font-bold">
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
            <h1 className="text-[#061729] md:text-xl text-md font-bold my-6">
              Remplacement de vitrage cassé ou fissuré
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            Des vitriers à votre service. Intempéries, choc thermique ou simple
            accident, le bris d’une baie vitrée, d’une vitre de fenêtre ou de
            porte-fenêtre pose problème tant pour la sécurité que pour
            l’isolation. Autant un simple vitrage est relativement simple à
            remplacer pour un bricoleur, autant les remplacements de vitrage,
            doubles et triples ainsi que les panneaux de verre sécurisés
            demandent un savoir faire et un matériel de vitrier professionnels.
          </p>
          <p>
            Simple vitrage, petit carreau ou grande surface (vitrage feuilleté,
            opaque , armé, teinté, de couleur, effet miroir, ou acoustique), un
            double vitrage (ordinaire, sécurité, acoustique ou thermique), ou
            encore un triple vitrage (feuilleté ou acoustique). S’il ne peut
            être remplacé immédiatement, nos vitriers pourrons à votre demande,
            procéder à une sécurisation provisoire des lieux avant d’effectuer
            la pose du nouveau vitrage.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#061729] md:text-xl text-md font-bold my-6">
            La vitre cassée
          </h1>
          <p>
            Vous ne pouvez pas rester avec une vitre cassée, que ce soit pour
            des raisons de sécurité – vous ou un tiers pourrait se blesser, sans
            parler de risque d’intrusion accru – ou pour des raisons d’isolation
            et de confort. N’hésitez pas à solliciter notre équipe de vitriers
            pour toute demande de remplacement de vitrage sur devis gratuit.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-2 w-full">
          <h1 className="text-[#061729] md:text-xl text-md font-bold my-6">
            L'isolation thermique et acoustique
          </h1>
          <div className="flex md:flex-row w-full flex-col items-center">
            <p className="md:w-[50%]">
              Avec le temps, les qualités d’isolation des double et triple
              vitrages diminuent sensiblement. Nous pouvons améliorer vos
              résistances acoustique de 32 à 50 db. Nous pouvons remplacer les
              vitrages simples par des doubles vitrages, ce qui apporte un gain
              thermique et acoustique considérable et immédiat à votre logement.
              Si vous constatez des courants d’air fenêtres fermées, si les
              parois sont froides ou si de la condensation se forme entre les
              vitrages, il est temps de faire remplacer vos vitre par un vitrie
            </p>
            <img
              src={locked}
              alt="serrurier"
              className="md:w-[30%] md:mt-0 mt-3"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <h1 className="text-[#061729] md:text-xl text-md my-6 font-bold">
            Changements et réparation de vitrines
          </h1>
          <div className="flex md:flex-row w-full flex-col gap-5 items-center">
            <p className="">
              Que ce soit pour une vitrine de magasin, d’une boutique ou pour
              une baie vitrée pour votre intérieur, nous offrons une solution
              sur mesure pour votre commerce ou votre maison. La vitrine doit
              être à la fois attrayante, propre et sure dans le but de laisser
              entrevoir les activités et la décoration réalisées à l’intérieur
              du commerce et créer une atmosphère gaie et chaleureuse afin
              d’inviter les visiteurs à entrer. Cela dans le but de les
              convertir en clients potentiels. Les différentes options de
              vitrerie pour vitrines :
              <ul className="ml-5">
                <li>simple vitrage</li>
                <li>double vitrine</li>
                <li>triple vitrage</li>
                <li>Vitrine acoustique ou thermique.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vitrine;
