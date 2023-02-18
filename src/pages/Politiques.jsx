import React from 'react'

const Politiques = () => {
    return (
        <div className="w-full h-full flex items-center justify-center md:bg-[#f5f5f5] py-24">

            <div className='md:w-2/4  bg-white p-8 flex flex-col gap-4'>

                <h1 className='text-2xl mb-3 text-[#061729]'>
                    Politique de confidentialité
                </h1>
                <h1 className='text-2xl mb-3 text-[#061729]'>Qui sommes-nous ?</h1>
                <p>L’adresse de notre site Web est : https://www.rapid-depannage33.fr/.</p>
                <h1 className='text-2xl mb-3 text-[#061729]'>Utilisation des données personnelles collectées</h1>
                <p className='font-bold'>Commentaires</p>
                <p>
                    Quand vous laissez un commentaire sur notre site web, les données inscrites dans le formulaire de commentaire, mais aussi votre adresse IP et l’agent utilisateur de votre navigateur sont collectés pour nous aider à la détection des commentaires indésirables.
                </p>

                <p  className='font-bold'>Médias</p>
                <p>
                    Si vous êtes un utilisateur ou une utilisatrice enregistré·e et que vous téléversez des images sur le site web, nous vous conseillons d’éviter de téléverser des images contenant des données EXIF de coordonnées GPS. Les visiteurs de votre site web peuvent télécharger et extraire des données de localisation depuis ces images.
                </p>
                <p  className='font-bold'>Cookies</p>
                <p>
                    Si vous déposez un commentaire sur notre site, il vous sera proposé d’enregistrer votre nom, adresse de messagerie et site web dans des cookies. C’est uniquement pour votre confort afin de ne pas avoir à saisir ces informations si vous déposez un autre commentaire plus tard. Ces cookies expirent au bout d’un an.
                </p>
                <p>
                    Si vous vous rendez sur la page de connexion, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.
                </p>
                <p>
                    Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.
                </p>
                <p>
                    En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l’ID de la publication que vous venez de modifier. Il expire au bout d’un jour.
                </p>
                <p  className='font-bold'>
                    Contenu embarqué depuis d’autres sites
                </p>
                <p>Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.

                    Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.</p>
                    <p  className='font-bold'>
                    Les droits que vous avez sur vos données
                    </p>
                    <p>
                    Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.
                    </p>
            </div>
        </div>
    )
}

export default Politiques
