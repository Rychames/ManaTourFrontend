import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      {/* Seção de boas-vindas */}
      <div className="bg-[#1d1a1a] text-white p-6 flex flex-col md:flex-row justify-between items-center h-[500px] gap-6 md:gap-12">
        {/* Texto à esquerda */}
        <div className="flex justify-center items-center w-full md:w-1/2 h-full">
          <h1 className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-bold text-center md:text-center">
            Bem-vindo(a)
          </h1>
        </div>

        {/* Texto à direita */}
        <div className="hidden md:flex flex-col justify-center items-center md:items-start w-full md:w-1/2 h-full">
          <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center md:text-left leading-relaxed max-w-[90%] md:max-w-none">
            Conheça à ManaTour, o guia perfeito para vivenciar o melhor da cidade de Manacapuru.
            Desvende suas belezas, explore pontos incríveis e saboreie as riquezas da cultura local!
          </p>
        </div>
      </div>

      <section className="w-full bg-[#0e434d] py-20 relative flex items-center justify-center">
        {/* Contêiner principal */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative me-5 mb-5">
          {/* Imagem à esquerda */}
          <div className="w-full md:w-1/2 flex justify-center ">
            <img
              src="../ManacapuruLove.png"
              alt="Paisagem de Manacapuru"
              className="rounded-lg shadow-lg w-[90%] md:w-full"
            />
          </div>

          {/* Caixa de texto sobreposta */}
          <div className="absolute bg-white p-8 md:p-12 rounded-lg shadow-lg w-[95%] md:w-[60%] left-1/2 transform -translate-x-1/2 translate-y-[35%] md:translate-y-[20%]">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0e434d] mb-6 text-center md:text-left">
              Bem-vindo(a)
            </h2>
            <p className="text-xl md:text-2xl text-[#4a4a4a] mb-8 leading-relaxed text-center md:text-left">
              Descubra a história de Manacapuru, uma cidade rica em histórias, cultura e belezas naturais.
              Explore suas virtudes e deixe-se surpreender por tudo o que esse lugar especial tem a oferecer!
            </p>
            <Link href="../pages/cityAbout">
              <button className="bg-[#0e434d] text-white px-8 py-4 text-lg md:text-xl rounded-lg flex items-center gap-3 shadow-md hover:bg-[#08343a] transition">
                Conheça mais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>

          </div>
        </div>
      </section>



      {/* Nova Seção Simples */}
      <section className="w-full bg-[#1d1a1a] py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imagem à esquerda */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="../CirandaHome.png"
              alt="Paisagem de Manacapuru"
              className="rounded-lg shadow-lg w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%]"
            />
          </div>

          {/* Texto à direita */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Descubra mais sobre Manacapuru
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#d1d1d1] mb-6 leading-relaxed">
              Manacapuru é uma cidade repleta de cultura, história e beleza natural. Venha conhecer os encantos que ela tem a oferecer!
            </p>
            <Link href="../pages/CulturePage">
            <button className="bg-[#0e434d] text-white px-6 py-3 text-sm md:text-lg rounded-lg flex items-center gap-3 shadow-md hover:bg-[#08343a] transition">
              Conheça mais
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            </Link>
          </div>
        </div>
        <p className="text-white text-center text-[1.5rem] mt-[5rem]">
          Descubra o que Manacapuru tem de melhor para oferecer! Hospede-se em hotéis confortáveis,
          aproveite os balneários paradisíacos, saboreie a culinária local nos restaurantes e
          curta momentos de descontração nos bares animados. Tudo para tornar sua estadia agradável.
        </p>
      </section>

      {/* Nova Seção com Imagens */}
      <section className="w-full bg-[#f9f9f9] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e434d] text-center mb-12">
            Descubra Manacapuru
          </h2>
          {/* Grid de Imagens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Imagem 1 */}
            <Link href="./pages/hotelsPage">
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="../HOTEIS.png"
                    alt="Hotéis"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                    <span className="text-white text-2xl font-semibold">Hotéis</span>
                  </div>
                </div>
              </div>
            </Link>


            {/* Imagem 2 */}
            <Link href="./pages/barsPage">
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="../BARES .png"
                    alt="Bares"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                    <span className="text-white text-2xl font-semibold">Bares</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Imagem 3 */}
            <Link href="./pages/restaurantPage">
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="../ROXINHO.png"
                    alt="Restaurantes"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                    <span className="text-white text-2xl font-semibold">Restaurantes</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Imagem 4 */}
            <Link href="./pages/bathhousesPage">
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="../BALNEÁRIOS.png"
                    alt="Balneários"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                    <span className="text-white text-2xl font-semibold">Balneários</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
