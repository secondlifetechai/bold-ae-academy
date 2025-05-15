function Hero() {
  return (
    <section className="pt-10 overflow-hidden bg-[#1c316a] md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="pl-4 mx-auto sm:pl-6 lg:pl-8 max-w-7xl pt-24 md:pt-32 flex justify-end md:justify-center pb-0">
        <div className="pb-0 relative">
          <div className="absolute top-16 md:top-24 text-gray-300 w-48 text-center font-light leading-6 mr-16 md:mr-0">
            <p className="text-[17px]">Formez-vous pour réussir dans l'immobilier international</p>
          </div>
          <img src="/photos/p1.png" alt="" className="w-xl pb-0 mb-0" />
        </div>
      </div>
    </section>
  )
}

export default Hero
