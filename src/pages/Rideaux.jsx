import React from 'react'
import banner from "../assets/Serrurier.jpg";
import certif from "../assets/certificat.png";
import porte from "../assets/porte.jpg";
import locked from "../assets/rideau.jpg";
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
      <div className="flex w-full flex-col gap-4">
        <div className="flex gap-2 items-center justify-start">
          <div className="w-1/12 h-[2px] bg-[#061729]"></div>
          <h1 className="text-[#061729] text-2xl font-bold">
          Service Rideaux métalliques
          </h1>
          <div className="w-1/12 h-[2px] bg-[#061729]"></div>
        </div>
        <p>
        Rapid dépannage 33 assure la fabrication, l’entretien et le dépannage de vos rideaux métalliques. En fonction du type d’activité que vous menez, un choix peut se faire entre les rideaux métalliques à lames pleines, les rideaux métalliques à tubes ondulés et les rideaux métalliques à lames micro-perforées. Les rideaux métalliques à lames pleines sont très pratiques pour les garages, les magasins et entrepôts étant donné qu’ils sont opaques et ne permettent pas aux usagers d’avoir une idée de ce qui est à l’intérieur après fermeture.
        </p>
        <p>Les rideaux métalliques à tube ondulé, sont quant à eux conseillés aux commerçants. Encore appelés grille GTO, ces types de rideaux permettent d’avoir une meilleure visibilité de l’intérieur.</p>
        <p>Les rideaux métalliques à lames perforées tout comme ceux à tube ondulée permettent également de voir l’intérieur mais sont relativement plus sécurisants.</p>
        <img src={locked} alt="Image ridau metallique" />
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <h1 className="text-[#061729] text-xl font-bold">Installation rideaux métalliques</h1>
        <p>
        Vous venez d’ouvrir un bureau, un magasin, une entreprise à Bordeaux et dans les villes de Floirac, Talence, Cenon, Bruges, Eysines, Blanquefort, Bassens, Gradignan, Canéjan, Léognan, Lastrene, Artigues-près-Bordeaux, Bègles, Lormont, Mérignac, Pessac, Le Bouscat, Bruges, Villenave-d'Ornon, Carbon-Blanc, Cadaujac ? L’un des premiers réflexes à avoir est d’installer un rideau métallique solide qui permettra d’assurer la sécurité et la protection de votre local. L’installation de rideaux métallique se déroule en plusieurs étapes et nécessite une certaine expertise. Il faut entre autres, installer les coulisses, mettre en place l’axe des supports et procéder à de nombreux réglages. En fonction que votre rideau métallique est manuel ou à moteur de nombreuses autres composantes peuvent entrer en jeu.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-2 w-full">
        <h1 className="text-[#061729] text-xl font-bold">
        Déblocage rideaux métalliques
        </h1>
        <div className="flex md:flex-row w-full flex-col items-center">
          <p className="">
          Le blocage des rideaux métalliques est souvent constaté lors de la fermeture ou de l’ouverture. Ce blocage peut être causé par les déformations au niveau des lames des rideaux. Les chocs peuvent en être également la cause. Vous pourrez penser pouvoir les réparer tout seul mais attention, il est préférable de faire appel à Rapid Dépannage 33. Cela vous épargne non seulement les risques de blessure mais aussi vous permet de bénéficier des privilèges de la garantie que vous aviez après l’installation. Le blocage des rideaux métalliques peut également être causé par la surchauffe du moteur suite à un usage répétitif sur une période relativement courte. La saleté des rails, le manque de lubrifiant, une défectuosité de la source d’alimentation sont également d’autres facteurs qui peuvent favoriser le blocage des rideaux métalliques. Quelle que soit la source du problème, dès que vous le rencontrez, prenez contact avec Rapid Dépannage 33 pour une intervention en moins de 30 minutes.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-[#061729] text-xl font-bold">
        Réparation rideaux métalliques
        </h1>
        <div className="flex md:flex-row w-full flex-col gap-5 items-center">
          <p >
          Les rideaux métalliques sont de plus en plus utilisés afin de protéger les habitations, les bureaux … des effractions. Ils permettent également de protéger les baies vitrées des jets de pierre et autres objets solides. Le taux d’utilisation de ces rideaux varie généralement en fonction de là où il est situé. Dans certains cas, un rideau métallique d’un parking pourrait être plus utilisé que celui d’une boutique qui ouvre le matin et referme le soir. La fréquence d’utilisation peut avoir une incidence sur le bon fonctionnement des rideaux métalliques peu importe qu’ils soient manuels ou électriques. Au niveau des rideaux à moteur, vous pouvez entre autres remarquer que le rideau se ferme plus lentement en raison d’un moteur trop vieux ou encore que le rideau ne réponde plus aux « ordres » de la commande. Les bobines peuvent également être la source du problème. Pour les rideaux manuels, il est possible que le rideau subisse une désaxassions ou que les lames s’abiment. Dans l’un ou l’autre des cas, une réparation s’impose. Chez Rapid Dépannage 33, nous intervenons dans les 30 premières minutes et nous faisons les tests nécessaires afin de poser le bon diagnostic. Ainsi nous parvenons à assurer une réparation qui garantit une longue durée de vos installations.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-[#061729] text-xl font-bold">
        Entretien des rideaux métalliques
        </h1>
        <div className="flex md:flex-row w-full flex-col gap-5 items-center">
          <p>
            {" "}
            Le manque d’entretien des rideaux métalliques peut occasionner ou accélérer sa détérioration. Pire, vous pouvez vous retrouver enfermés dans le local si le rideau n’arrivait plus à s’ouvrir. Les produits de votre magasin peuvent également être endommagés. Pire, il est possible que le rideau défectueux tombe sur un employé ou un visiteur. Autant de désastres auxquels il faut ajouter qu’un rideau métallique défectueux rend moins sûr votre boutique, magasin … au point d’attirer les cambrioleurs. Chez Rapid Dépannage 33, nous menons les travaux d’entretien nécessaires au bon fonctionnement de vos rideaux métalliques. Cet entretien qui devrait être périodique (chaque deux mois) consiste entre autres à nettoyer les trous de ventilation et les lattes, éliminer les saletés, huiler les roulements …
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-[#061729] text-xl font-bold">
        Pourquoi faire confiance à Rapid Dépannage 33 pour vos Rideaux métalliques ?
        </h1>
        <div className="flex  w-full flex-col gap-5 items-center">
          <p >
          L’importance des rideaux métalliques n’est plus à prouver. Toutefois, il est important de trouver le bon serrurier afin de vous l’installer et surtout d’en assurer le bon fonctionnement. Chez Rapid Dépannage 33, nous disposons d’une équipe de serruriers compétents nantis de plus de 10 ans d’expérience. Nous concevons aussi bien des rideaux métalliques à lame pleine que des rideaux à tube ondulé et des rideaux à lame perforée.
          </p>
          <p>Nous sommes disponibles afin de vous conseiller sur le type du rideau qui vous conviendra en fonction du secteur dans lequel vous évolués et des risques auxquels vous êtes potentiellement exposés. Rapid D’epannage 33 installe également des rideaux à moteur où manuels. Afin d’assurer la protection de chacun de nos clients et celles de nos artisans, ces derniers sont formés et recyclés sur les règles de sécurité à adopter. Mieux nous avons souscrit à l’une des assurances les plus crédibles de France. Nous sommes présents à Bordeaux et dans les villes de Bordeaux, Bordeaux lac, Floirac, Talence, Cenon, Bruges, Eysines, Blanquefort, Bassens, Gradignan, Canéjan, Léognan, Lastrene, Artigues-près-Bordeaux, Bègles, Lormont, Mérignac, Pessac, Le Bouscat, Bruges, Villenave-d'Ornon, Carbon-Blanc, Cadaujac.  Cette présence dans plusieurs villes de France, nous permet d’être proche de notre clientèle et d’intervenir dans les premières minutes qui suivent la moindre panne. Parce que notre entreprise se base sur la transparence, pour chaque travail à effectuer, nous vous expliquons les solutions qui s’offrent dégageons la meilleure, vous proposons un devis assez clair. Tous nos rideaux métalliques sont livrés avec une garantie. De l’installation à la réparation en passant par l’entretien nous répondons présents avec pour seul objectif : « votre satisfaction ».</p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Rideaux
