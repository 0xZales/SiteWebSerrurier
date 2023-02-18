import React from 'react'

const Mentions = () => {
  return (
    <div className="w-full h-full flex items-center justify-center md:bg-[#f5f5f5] py-24">

      <div className='md:w-2/4  bg-white p-8 flex flex-col gap-4'>

        <h1 className='text-2xl mb-3 text-[#061729]'>Mentions légales</h1>
        <p>
          Le présent site internet <a href="https://www.rapid-depannage33.fr/" className='text-[#061729]'>https://www.rapid-depannage33.fr/</a> est la propriété de <span className='text-[#061729] '>Rapid Dépannage 33</span>, un serrurier vitrier enregistré au Registre du Commerce et des Sociétés de Bordeaux sous le numéro    <span className='text-[#061729]'> 807 507 405 </span> <br /> .
        </p>
        <p className='leading-10'>
          Siège social : 
          <span className='text-[#061729] '> 24 rue Brulatour
            33800 Bordeaux</span><br />
          Téléphone :  <span className='text-[#061729]'>0651388366</span> <br />
          E-mail : <span className='text-[#061729]'>contact@rapid-depannage33.fr </span> <br />
          Responsable publication : <a href="https://0xzalesdev.netlify.app/" target='_blank' className='text-[#061729]'>Rozales Assimpah</a> <br />
          Hébergeur : <span className='text-[#061729]'> OVH, 2 rue Kellermann – 59100 ROUBAIX – France </span> <br /> 
        </p>

        <p>Les informations fournies sur ce site sont fournies à titre indicatif. <span className='text-[#061729] '>Rapid Dépannage 33</span> ne saurait être tenue responsable de l'exactitude ou de l'exhaustivité des informations fournies, ni de l'utilisation qui pourrait en être faite.</p>
        <p>
          Les liens vers d'autres sites internet sont fournis à titre de service aux utilisateurs du site. <span className='text-[#061729]'>Rapid Dépannage 33</span> ne saurait être tenue responsable du contenu de ces sites, ni des éventuels préjudices qu'ils pourraient causer.
        </p>
        <p>
          Conformément à la loi "Informatique et Libertés" du 6 janvier 1978, les utilisateurs du site disposent d'un droit d'accès, de rectification et de suppression des données les concernant. Pour exercer ce droit, vous pouvez envoyer un e-mail à <span className='text-[#061729]'>contact@rapid-depannage33.fr</span>.
        </p>
        <p>
          La loi française s'applique à ce site. En cas de litige, les tribunaux français seront seuls compétents.
        </p>
        <p>Date de dernière mise à jour : <span className='text-[#061729]'>18/02/2023</span> .</p>

      </div>
    </div>
  )
}

export default Mentions
