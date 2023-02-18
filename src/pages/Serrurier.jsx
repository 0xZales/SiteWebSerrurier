import React from "react";
import banner from "../assets/Serrurier.jpg";
import locked from "../assets/porte.jpg";
const Serrurier = () => {
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
          alt="Certification"
          className="z-10 opacity-100 absolute md:left-20 top-10 left-[33%]"
        /> */}
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
            <h1 className="text-[#061729]  text-xl font-bold my-6">
              Serrurerie - Vitrerie - Rideaux Métallique
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            Vous avez besoin d’un serrurier vitrier d’urgence en moins de 30 min
            ? Nous intervenons sur le département de la Gironde. Quelque soit
            votre soucis de serrurerie,vitrerie ou rideaux métalliques :
            <ul className="ml-5 flex flex-col gap-3 list-disc my-4">
              <li>Ouverture de porte</li>
              <li>Porte claquée</li>
              <li>Perte de clés</li>
              <li>Clé cassée</li>
              <li>Serrure blindée qui ne ferme ou ne s’ouvre plus</li>
              <li>Serrure forcée</li>
              <li>Votre porte ne peut pas s’ouvrir</li>
              <li>Votre vitrage est à remplacer.</li>
            </ul>
            RAPID DEPANNAGE 33 intervient dans les domaines de la serrurerie et
            vitrerie. Votre serrurier vitrier d’urgence certifié et diplômé
            d’état. Devis gratuit.
          </p>
        </div>

        <div className="flex w-full  flex-col ">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729]  text-xl font-bold my-6">Nos tarifs</h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <div className="w-full  flex md:flex-row flex-col gap-3">
            <div className="flex flex-col items-center justify-center  shadow-md md:w-4/12 w-full p-4 gap-4 ">
              <h1 className="text-left w-full font-bold">Ouverture de porte</h1>
              <span className="h-[2px] w-3/4 bg-gray-300"></span>
              <h1 className="w-full text-left"> A partir de 95 € HT </h1>
              <div className="w-full flex justify-start items-center ">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p >Ouverture porte claquée</p>
              </div>
              <div className="w-full flex justify-start items-center ">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p >Ouverture porte fermée à clé</p>
              </div>
              <div className="w-full flex justify-start items-center">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p > Ouverture de porte blindée </p>
              </div>
              <div className="w-full flex justify-start items-center">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p > Ouverture clé cassée </p>
              </div>
              <button
            className=" w-3/4 bg-orange-500 h-10 uppercase    flex items-center justify-center gap-3  rounded-md"
            onClick={callNumber}
          >
            Appelez-nous !{" "}
            <svg
              width="20"
              height="20"
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

            <div className="flex flex-col items-center justify-center  shadow-md md:w-4/12 w-full p-4 gap-4 ">
              <h1 className="text-left w-full font-bold">Service de serrurerie</h1>
              <span className="h-[2px] w-3/4 bg-gray-300"></span>
              <h1 className="w-full text-left"> A partir de 55 € </h1>
              <div className="w-full flex justify-start items-center ">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p > Remplacement de cylindre </p>
              </div>
              <div className="w-full flex justify-start items-center ">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p > Remplacement de serrure </p>
              </div>
              <div className="w-full flex justify-start items-center">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p > Pose de serrure A2P </p>
              </div>
              <div className="w-full flex justify-start items-center">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p > Sécurisation de logement </p>
              </div>
              <button
            className=" w-3/4 bg-orange-500 h-10 uppercase    flex items-center justify-center gap-3  rounded-md"
            onClick={callNumber}
          >
            Appelez-nous !{" "}
            <svg
              width="20"
              height="20"
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
            <div className="flex flex-col items-center justify-center  shadow-md md:w-4/12 w-full p-4 gap-4 ">
              <h1 className="text-left w-full font-bold">Service de vitrerie</h1>
              <span className="h-[2px] w-3/4 bg-gray-300"></span>
              <h1 className="w-full text-left"> Nous consulter </h1>
              <div className="w-full flex justify-start items-center ">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p > Remplacement simple vitrage </p>
              </div>
              <div className="w-full flex justify-start items-center ">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p >Remplacement double vitrage </p>
              </div>
              <div className="w-full flex justify-start items-center">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p > Remplacement vitrine sécurité</p>
              </div>
              <div className="w-full flex justify-start items-center">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
                </svg>{" "}
                <p > Fermeture provisoire</p>
              </div>
              <button
            className=" w-3/4 bg-orange-500 h-10 uppercase    flex items-center justify-center gap-3  rounded-md"
            onClick={callNumber}
          >
            Appelez-nous !{" "}
            <svg
              width="20"
              height="20"
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
          </div>
        </div>

        <div className="flex w-full flex-col ">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-xl font-bold my-6">
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
            <h1 className="text-[#061729] text-xl font-bold my-6">Nos conseils</h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            <h1 className="text-xl font-bold my-4">Assurance</h1>
            Pensez à vérifier votre couverture en cas d’effraction ou de perte
            de clés. En effet, votre banque ou votre assurance habitation
            peuvent couvrir tous services et réparations de vitrerie. Que ce
            soit pour une vitre cassée ou fissurée (avec la prise en charge par
            l’assurance de “bris de glace”). Un serrurier d’urgence intervient
            pour:
            <ul className="ml-5">
              <li>ouverture de porte simple ou porte blindée</li>
              <li>
                remplacement de cylindre ou serrure en fonction des clauses
                incluses dans les contrats.
              </li>
            </ul>
            <h1 className="text-xl font-bold my-4">Avant les vacances</h1>
            <ul className="ml-5">
              <li>Pensez à l’opération Tranquillité Vacances</li>
              <li>
                <a
                  href="https://www.gendarmerie.interieur.gouv.fr/"
                  className="text-orange-500"
                >
                  Prévenez la Gendarmerie
                </a>
              </li>
              <li>Vérifiez l’état de vos portes et serrures</li>
              <li>Prévenez vos voisins</li>
            </ul>
            <h1 className="text-xl font-bold my-4">Cambriolage</h1>
            Si vous avez été cambriolé, votre porte ou cylindre ont été forcé ou
            cassé, une vitre cassée, contactez immédiatement la Police ou la
            Gendarmerie Nationale. Contactez ensuite votre assurance, ainsi
            qu’un serrurier en urgence et un vitrier pour l’installation de
            serrure ou remplacement de vitrage à Bordeaux pour la mise en
            sécurité.
          </p>
          <img src={locked} alt="serrurier" className="md:w-[50%]" />
        </div>

        <div className="flex w-full flex-col gap-3 mt-3">
          <div className="flex gap-2 items-center justify-center">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-xl font-bold my-6">
              Nos valeurs
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <div className="w-full flex md:flex-row flex-col gap-5">
            <div className="flex flex-col md:w-4/12">
              <h1 className="underline my-6 font-bold">Serrurier intervention rapide</h1>
              Nous intervenons en général en moins de 30mn sur Bordeaux et en
              moins d'une heure dans les autres zones de l'aire urbaine de
              Bordelaise - 24h/24 et 7j/7
            </div>
            <div className="flex flex-col md:w-4/12">
              <h1 className="underline my-6 font-bold">Serrurier intervention rapide</h1>
              Nous intervenons en général en moins de 30mn sur Bordeaux et en
              moins d'une heure dans les autres zones de l'aire urbaine de
              Bordelaise - 24h/24 et 7j/7
            </div>
            <div className="flex flex-col md:w-4/12">
              <h1 className="underline my-6 font-bold">
                Zones d’intervention en détail.
              </h1>
              Bordeaux, Bordeaux lac, Floirac, Talence, Cenon, Bruges, Eysines,
              Blanquefort, Bassens, Gradignan, Canéjan, Léognan, Lastrene,
              Artigues-près-Bordeaux, Bègles, Lormont, Mérignac, Pessac, Le
              Bouscat, Bruges, Villenave-d'Ornon, Carbon-Blanc, Cadaujac
            </div>
          </div>
          <p>
            Spécialiste en travaux de vitrerie-serrurerie, Rapid Dépannage 33
            est votre prestataire qualifié pour toute intervention dans la ville
            de Bordeaux et ses environs. Il n’est en effet pas évident de
            trouver un serrurier fiable et disponible en tout temps dans
            l’urgence. Grâce à notre équipe de professionnels avérés, nous vous
            assurons un travail impeccable et réalisé dans les meilleurs délais,
            en vue de garantir votre sécurité. Serrurier Bordeaux : nos zones
            d'opération entreprise en France Contactez la société Rapid
            Dépannage Bordeaux, pour une assistance avec une ligne de service de
            qualité fiable en moins d’une demi-heure. Quelle que soit la
            prestation dont vous avez besoin, nous prenons en charge l’opération
            pour préserver la sécurité de votre domicile ou de votre local
            commercial. Nous proposons les services suivants : L’ouverture de
            porte Le dépannage d’une porte claquée et d’une serrure blindée
            bloquée Le remplacement de clés cassées, de serrures forcées…
          </p>
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="flex gap-2 items-center justify-center">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-xl my-6 font-bold">
              Serrurier Bordeaux : nos zones d'opération entreprise en France
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            Notre société déploie ses services de serruriers artisans sur
            Bordeaux et ses environs, notamment :
          </p>
          <ul className="ml-5 list-disc h-80 flex flex-col flex-wrap">
            <li>Bordeaux</li>
            <li>Bordeaux lac</li>
            <li>Floirac</li>
            <li>Talence</li>
            <li>Cenon</li>
            <li>Bruges</li>
            <li>Eysines</li>
            <li>Blanquefort</li>
            <li>Bassens</li>
            <li>Gradignan</li>
            <li>Canéjan</li>
            <li>Léognan</li>
            <li>Lastrene</li>
            <li>Artigues-près-Bordeaux</li>
            <li>Bègles</li>
            <li>Lormont</li>
            <li>Mérignac</li>
            <li>Pessac</li>
            <li>Le Bouscat</li>
            <li>Bruges</li>
            <li>Villenave-d'Ornon</li>
            <li>Carbon-Blanc</li>
            <li>Cadaujac</li>
          </ul>
          <p>
            Le serrurier Rapid Dépannage 33 pas cher vous promet une
            intervention rapide, efficace et au meilleur prix. S’il vous faut
            par exemple une réparation de serrurerie sur les quais , le
            serrurier Rapid Dépannage 33 centre se tient à votre disposition. De
            même, pour un dépannage de porte claquée aux Chartrons , le
            serrurier Rapid dépannage 33 vous garantit une excellente
            prestation. Où que vous soyez, soyez sûr de profiter de notre
            savoir-faire. Les principaux domaines d’un serrurier Les opérations
            de serrurerie ne se limitent pas à la reproduction de clefs et au
            dépannage de serrures. C’est en effet un métier qui a constamment
            évolué au fil du temps. Tout d’abord, il n’est pas qu’un spécialiste
            des serrures de portes d’entrée. Il peut également s’occuper de la
            serrure d’une fenêtre, d’un coffre-fort ou d’un portail.
          </p>
        </div>

        {/*  */}
        <div className="flex w-full flex-col gap-2">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-xl font-bold my-6">
              Les principaux domaines d’un serrurier{" "}
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            Les opérations de serrurerie Bordeaux ne se limitent pas à la
            reproduction de clefs et au dépannage de serrures. C’est en effet un
            métier qui a constamment évolué au fil du temps. Tout d’abord, il
            n’est pas qu’un spécialiste des serrures de portes d’entrée. Il peut
            également s’occuper de la serrure d’une fenêtre, d’un coffre-fort ou
            d’un portail.
            <div className="w-full flex justify-start items-center my-3">
              <svg
                className="text-red-500"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
              </svg>{" "}
              <h1 className="text-md md:text-md font-bold">
                L’ouverture des serrures{" "}
              </h1>
            </div>
            C’est le principal service proposé par un serrurier. Lorsque vous
            perdez votre trousseau et ne pouvez plus rentrer chez vous, vous
            pouvez faire appel à une urgence serrurier à Bordeaux pour vous
            dépanner. Ce professionnel peut intervenir sur tous les systèmes
            d’ouverture.
          </p>
          <p>
            <div className="w-full flex justify-start items-center my-3">
              <svg
                className="text-red-500"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
              </svg>{" "}
              <h1 className="text-md md:text-md font-bold">
                Le dépannage d’une porte claquée
              </h1>
            </div>
            Cette situation se produit très souvent. La porte d’entrée se
            claque, alors que le trousseau est resté à l’intérieur. Ne s’ouvrant
            qu’à double tours, seule l’intervention d’un serrurier permettra
            d’ouvrir la porte sans avoir à détériorer les portes ou effectuer
            des travaux de serrurerie importants. N'importe où en France, que
            vous viviez à Paris, en province ou en ville, nous sommes tous un
            jour confrontés à cette situation. Notre ligne de prix et tarif
            correspond à celle d'un artisan spécialiste en serrurerie avec un
            savoir-faire de longue date made in France. Vous pouvez consulter
            les avis et comparatifs en ligne afin de comparer nos tarifs et vous
            verrez que nos prix sont alignés avec ceux du marché.
          </p>
          <p>
            <div className="w-full flex justify-start items-center my-3">
              <svg
                className="text-red-500"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
              </svg>{" "}
              <h1 className="text-md md:text-md font-bold">
                Le dépannage de porte ou de serrure bloquée
              </h1>
            </div>
            Plusieurs raisons et avis peuvent expliquer le blocage d’une porte.
            On peut citer un mauvais fonctionnement du cylindre ou une tentative
            de cambriolage. Dans les deux cas, la clé ne permet plus d’ouvrir la
            porte. Aussi, le serrurier Bordeaux est le plus qualifié pour vous
            dépanner. Nous pouvons diagnostiquer le problème rapidement et vous
            apporter une assistance immédiate.
          </p>
          <p>
            <div className="w-full flex justify-start items-center my-3">
              <svg
                className="text-red-500"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
              </svg>{" "}
              <h1 className="text-md md:text-md font-bold">
                Le remplacement de serrures
              </h1>
            </div>
            Dans le cadre de la rénovation de vos portes, d’un portail de garage
            ou d’une fenêtre, le savoir-faire et l’expertise d'une société
            d'artisan spécialisée en serrurerie sont indispensables.
            L'installation de serrure de qualité fait en effet partie de ses
            domaines d’intervention. Si l’option la plus économique consiste à
            remplacer le cylindre, la plus sécuritaire est de modifier
            complètement le système de verrouillage. Il existe aujourd’hui un
            large choix de produits de serrurerie pour équiper vos menuiseries.
            On peut citer les serrures multipoints et celles connectées qui
            offrent un niveau de protection maximal.
          </p>
          <p>
            <div className="w-full flex justify-start items-center my-3">
              <svg
                className="text-red-500"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m10.585 13.415-2.828-2.829L6.343 12l4.242 4.243 7.071-7.071-1.414-1.414-5.657 5.657Z"></path>
              </svg>{" "}
              <h1 className="text-md md:text-md font-bold">
                La reproduction de clé
              </h1>
            </div>
            Cette prestation s’adresse aux personnes qui ont perdu leurs clefs
            ou qui ont besoin d’un nouveau trousseau pour les autres occupants
            de leur maison. Ainsi, en cas de perte, cela leur évite de remplacer
            le cylindre et économiserez sur le prix et tarifs finaux de votre
            prestation.
          </p>
        </div>
        {/*  */}
        <div className="flex w-full flex-col gap-2">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-xl font-bold my-6">
              Les sous-domaines du métier de serrurier
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
            Le métier de serrurier est englobé dans le domaine du BTP. Il se
            charge de la pose, de l’entretien et de la réparation des
            installations. Il travaille aussi bien sur les portes que la
            charpente (pylône, pont…) et la menuiserie (fenêtre, véranda,
            garage…). En fonction de ses domaines d’expertise, on distingue des
            sous-domaines du métier de serrurier :
          </p>
          <div className="w-full flex justify-start items-center md:flex-row flex-col gap-3">
            <div>
              <h1 className="text-md md:text-md font-bold flex items-center justify-start my-4">
                <svg
                  className="text-red-500"
                  width="25"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 10.8a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM3.6 21.6a8.4 8.4 0 0 1 16.8 0H3.6Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Le serrurier-métallier{" "}
              </h1>
              <p>
                Le serrurier-métallier est spécialisé dans la ferronnerie d’art.
                Outre le travail des serruriers artisans, de réparation des
                gonds et des clés, il travaille sur différentes constructions
                métalliques, notamment la charpente et la menuiserie. En effet,
                son intervention se déroule après celle du charpentier
                métallique. Il est chargé de façonner des feuilles nervurées,
                des volutes et des portails. D’ailleurs, il peut collaborer avec
                l’architecte et le décorateur sur le terrain. Après avoir
                réalisé son ouvrage, il s’occupe de son installation, ainsi que
                de l’entretien et de la maintenance des différents éléments.{" "}
              </p>
            </div>
            <div>
              <h1 className="text-md md:text-md font-bold flex items-center justify-start my-4">
                <svg
                  className="text-red-500"
                  width="25"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 10.8a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM3.6 21.6a8.4 8.4 0 0 1 16.8 0H3.6Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Le serrurier dépanneur
              </h1>
              <p>
                {" "}
                Comme son nom l’indique, le serrurier dépanneur se charge des
                dépannages d’urgence dans toute la ville de Bordeaux. Il peut
                s’agir de portes bloquées, de clé perdue, d’une porte claquée ou
                de la perte de trousseau. Certifié et diplômé d’État, votre
                serrurier Rapid Dépannage 33 Bordeaux vous assure une intervention fiable et
                efficace à tout moment.{" "}
              </p>
            </div>
          </div>
        </div>
        {/*  */}
    
        <div className="flex w-full flex-col gap-2">
          <div className="flex gap-2 items-center justify-start">
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
            <h1 className="text-[#061729] text-xl font-bold my-6">
            Serrurier Bordeaux : un expert polyvalent. 
            </h1>
            <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          </div>
          <p>
          Le serrurier dispose de compétences techniques spécifiques en matière de dépannage et travaux de serrurerie, lui permettant de s’adresser à une clientèle variée. C’est un professionnel polyvalent qui peut intervenir dans différents domaines en rapport avec les serrures. Vous pouvez par exemple contacter un serrurier automobile pour un dépannage de serrure pour votre voiture. Quelle que soit la situation, il trouvera toujours une solution à chaque problème. En cas d’urgence, cet expert se tient à vos côtés.
          </p>
          
              <p>
              Demandez un devis gratuit pour vous faire une idée et un avis de tarif pour l’ensemble de la prestation. Cela vous aidera à faire une comparaison des offres en fonction de vos objectifs. En plus d’intervenir sur la pose de serrures, nous proposons aussi des travaux de remplacement de vitrage. Quel que soit le type de dépannage dont vous avez besoin, confiez-le à l’entreprise serrurerie vitrier Rapid Dépannage  33 et vous profiterez d’une qualité de service irréprochable avec un niveau de tarif juste et saint.
              </p>
           
        </div>
      </section>
    </div>
  );
};

export default Serrurier;
