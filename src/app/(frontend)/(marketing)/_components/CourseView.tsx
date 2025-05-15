import Link from 'next/link'
import React from 'react'

const CourseView = () => {
  return (
    <section className="overflow-hidden bg-[#1c316a] mt-2 pb-3">
      <div className="flex flex-col gap-3 justify-center items-center pt-10">
        <div className="text-gray-300 font-semibold text-3xl border-b-2 border-b-gray-300 pb-2">
          Marché local
        </div>
        <div className="flex flex-col gap-3 justify-center items-center bg-[#002157] py-6 px-8 mx-6 md:mx-36 text-gray-300 pb-14 mt-3">
          <div className="font-medium text-xl mb-3">Présentation de Dubaï</div>
          <p>
            Dubaï est l'une des villes les plus dynamiques et modernes du monde. Située aux Émirats
            arabes unis, elle est reconnue pour sa croissance rapide, sa sécurité, son innovation et
            son style de vie luxueux.
            <br /> <br />
            Pourquoi Dubaï attire les investisseurs ?
            <br /> <br />
            vantages fiscaux : <br />
            Dubaï offre un environnement fiscal très attractif, avec 0 % d'impôt sur le revenu, pas
            de taxe foncière et aucune taxe sur les plus-values immobilières. Cela maximise les
            rendements nets pour les investisseurs.
            <br /> <br />
            Rendements locatifs élevés : <br />
            Les rendements peuvent aller de 6 % à 10 % par an, bien plus que dans de nombreuses
            grandes villes internationales.
            <br /> <br />
            Stabilité et sécurité : <br />
            Dubaï est reconnu pour sa stabilité politique, son système juridique clair, et figure
            parmi les villes les plus sécuritaires au monde, ce qui rassure les investisseurs et les
            familles.
            <br /> <br />
            Croissance rapide : <br />
            La ville est en pleine expansion avec de nombreux projets d'infrastructure, d'hôtels, de
            quartiers résidentiels et de loisirs, ce qui fait augmenter la valeur des biens
            immobiliers.
            <br />
            <br />
            Marché accessible aux étrangers : <br />
            Les investisseurs étrangers peuvent acheter des biens en Freehold dans plusieurs zones
            désignées, avec un titre de propriété clair et sécurisé.
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex justify-center items-center py-2 px-6 text-xl font-bold text-center text-slate-300 rounded-lg bg-[#002157] mt-2"
        >
          Suivant
        </Link>
      </div>
    </section>
  )
}

export default CourseView
