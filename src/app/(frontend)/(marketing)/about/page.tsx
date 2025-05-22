import Header from '../_components/Header'

async function AboutPage() {
  return (
    <>
      <Header />
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-300 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      À propos de notre programme - Samuproperties Académie
                    </h2>
                    <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                      Samuproperties Académie est une formation spécialisée dans l'immobilier
                      international, conçue pour former une nouvelle génération de conseillers,
                      investisseurs et professionnels capables d'agir sur plusieurs marchés à
                      travers le monde.
                    </p>
                    <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                      Nous offrons plusieurs cours adaptés à différents niveaux, disponibles dans
                      plusieurs pays et régions, en ligne ou en présentiel selon les cas.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <h2 className="text-gray-300 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Notre mission
                  </h2>
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 bg-[#1c316a] rounded-xl border border-gray-700 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <p className="text-gray-400 text-base font-normal leading-relaxed">
                        Des connaissances solides sur l'investissement immobilier à l'international
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 bg-[#1c316a] rounded-xl border border-gray-700 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <p className="text-gray-400 text-base font-normal leading-relaxed">
                        Les stratégies concrètes pour réussir dans différents contextes immobiliers
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 bg-[#1c316a] rounded-xl border border-gray-700 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <p className="text-gray-400 text-base font-normal leading-relaxed">
                        Un accompagnement professionnel pour bâtir votre carrière dans le domaine
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 bg-[#1c316a] rounded-xl border border-gray-700 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <p className="text-gray-400 text-base font-normal leading-relaxed">
                        Des opportunités concrètes d'agir sur des projets réels, dès la fin de la
                        formation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-300 rounded-3xl sm:border border-gray-200 relative">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="/photos/rl1.jpeg"
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
          <hr className="mt-16 border-gray-700" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
            <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
              <div className="relative w-full text-center lg:text-left lg:w-2/4">
                <h2 className="text-4xl font-bold text-gray-300 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                  Ce que vous recevez
                </h2>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              <div className="group relative w-full bg-[#1c316a] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400 transition-all duration-500 leading-5 group-hover:text-white">
                  Un certificat officiel de réussite délivré par Samuproperties Académie
                </p>
              </div>

              <div className="group relative w-full bg-[#1c316a] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400 transition-all duration-500 leading-5 group-hover:text-white">
                  Un permis vous permettant de vendre certains projets immobiliers internationaux,
                  en partenariat avec des agences et promoteurs reconnus
                </p>
              </div>

              <div className="group relative w-full bg-[#1c316a] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400 transition-all duration-500 leading-5 group-hover:text-white">
                  Des outils et techniques pour rechercher, évaluer et présenter des projets à
                  l'échelle internationale
                </p>
              </div>

              <div className="group relative w-full bg-[#1c316a] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400 transition-all duration-500 leading-5 group-hover:text-white">
                  L'accès à une communauté dynamique et à un réseau de partenaires actifs dans
                  plusieurs régions du monde
                </p>
              </div>
            </div>
          </div>

          <hr className="mt-16 border-gray-700" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
            <div className="mb-14 text-center">
              <h2 className="text-4xl text-center font-bold text-gray-300 py-5">
                Nos cours couvrent
              </h2>
            </div>

            <div className="flex justify-center items-center gap-x-5 gap-y-10 flex-wrap md:justify-between">
              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-indigo-300 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400">
                  Les bases de l'investissement immobilier à l'international
                </p>
              </div>

              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-indigo-300 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400">
                  L'analyse de projets : lecture, rentabilité, comparaison
                </p>
              </div>

              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-indigo-300 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400">
                  Le rôle du conseiller immobilier : communication, éthique, accompagnement client
                </p>
              </div>

              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-indigo-300 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400">
                  Les démarches d'achat à l'étranger (juridiques, financières, logistiques)
                </p>
              </div>

              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-indigo-300 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400">
                  La recherche d'opportunités dans plusieurs marchés étrangers
                </p>
              </div>

              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-indigo-300 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="text-sm font-normal text-gray-400">
                  La mise en place de votre activité (en tant qu'agent ou consultant indépendant)
                </p>
              </div>
            </div>
          </div>

          <hr className="mt-16 border-gray-700" />

          <div className="container mx-auto mt-10">
            <h2 className="text-4xl font-semibold text-white mb-8 text-center">Pour qui ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#1c316a] rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16 h-16">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Les débutants curieux de découvrir l'immobilier international
                  </p>
                </div>
              </div>

              <div className="bg-[#1c316a] rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16 h-16">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Les jeunes souhaitant se lancer dans un domaine d'avenir
                  </p>
                </div>
              </div>

              <div className="bg-[#1c316a] rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16 h-16">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Les agents ou investisseurs locaux qui veulent élargir leur champ d'action
                  </p>
                </div>
              </div>

              <div className="bg-[#1c316a] rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16 h-16">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Toute personne cherchant à développer des revenus ou une carrière à l'échelle
                    mondiale
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-16 border-gray-700" />

          <div className="px-8 py-12 text-center bg-[#1c316a] rounded-lg shadow-xl mt-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-white text-3xl font-bold mb-8">Accès à la formation</h2>
              <div>
                <p className="text-slate-300 text-base mb-4">
                  Pour accéder au programme, vous devez faire une demande d'inscription par
                  courriel. Écrivez-nous à : academie@samuproperties.ca Nous vous enverrons ensuite
                  votre mot de passe personnel pour accéder à la plateforme de formation
                </p>
                <p className="text-slate-300 text-base">
                  Samuproperties Académie vous ouvre les portes de l'immobilier international.
                  Apprenez, certifiez-vous, vendez et grandissez partout dans le monde.
                </p>
              </div>
            </div>
          </div>
          <h2 className="mt-12 text-gray-300 text-xl">Autres contacts utiles</h2>
          <p className="text-gray-400">+1 873-993-1780</p>
        </div>
      </section>
    </>
  )
}

export default AboutPage
