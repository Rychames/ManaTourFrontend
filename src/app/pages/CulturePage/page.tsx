"use client";

import React from "react";
import Link from "next/link";

export default function CulturePage() {
    return (
        <main className="w-full bg-[#1d1a1a] text-gray-300 min-h-screen">
            {/* Título e imagem inicial */}
            <section className="text-center py-10">
                <h1 className="text-6xl font-bold mb-6 text-white bg-[#09515e]">Cultura Local</h1>
                <img
                    src="/CulturePage/cirandas.jpg"
                    alt="Cultura Local"
                    className="w-full h-[34rem] object-cover"
                />
            </section>

            {/* Texto principal */}
            <section className="container mx-auto py-10 px-4 text-justify text-2xl">
                <p>
                    A cidade de Manacapuru tem como principal ponto de cultura o Festival de Cirandas que é um dos eventos culturais mais importantes da cidade e um dos maiores e mais tradicionais festivais folclóricos do estado do Amazonas. Realizado anualmente, geralmente no final do mês de Agosto com três dias de apresentações, o festival celebra a ciranda, um tipo de dança popular da região amazônica, que tem grande importância na cultura local. A ciranda é uma manifestação de alegria, com músicas e danças que envolvem o público de forma participativa.

                    O Festival de Cirandas de Manacapuru é um evento que exalta a cultura popular amazônica, especialmente a dança e a música, e desempenha um papel importante na preservação das tradições locais. Além de ser uma grande festa para os moradores, é também uma vitrine para o Brasil e o mundo conhecerem mais sobre a cultura e as riquezas do interior do Amazonas.
                </p>
            </section>

            {/* Divisória - Conheça as três principais cirandas */}
            <section className="bg-[#1d1a1a] text-black py-8 text-center">
                <h2 className="text-3xl bg-white  font-semibold mb-6">
                    Conheça as três principais cirandas
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">

                    <Link href="../pages/MatizadaPage">
                        <div className="relative group">
                            <img
                                src="/CulturePage/cirandamatizada.jpg"
                                alt="Ciranda Flor Matizada"
                                className="w-80 h-60 object-cover rounded shadow-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                <p className="text-white text-xl font-bold">Flor Matizada</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="../pages/MurasPage">
                        <div className="relative group">
                            <img
                                src="/CulturePage/guerreiros página cultura.jpg"
                                alt="Ciranda Tradicional"
                                className="w-80 h-60 object-cover rounded shadow-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                <p className="text-white text-xl font-bold">Guerreios Mura</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="../pages/TradicionalPage">
                        <div className="relative group">
                            <img
                                src="/CulturePage/tradicional página cultura.jpg"
                                alt="Ciranda Tradicional"
                                className="w-80 h-60 object-cover rounded shadow-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                <p className="text-white text-xl font-bold">Tradicional</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Divisória - Festival Folclórico */}
            <section className="bg-[#1d1a1a] text-white py-8">
                <h2 className="text-3xl bg-[#09515e] font-semibold text-center mb-6">Festival Folclórico</h2>

                {/* Introdução centralizada */}
                <div className="w-full text-center py-10 px-4">
                    <p className="min-w-prose mx-auto text-2xl">
                        O Festival Folclórico de Manacapuru é uma celebração rica e diversificada da cultura amazônica.
                        Este evento anual, promovido pela Prefeitura Municipal e entidades culturais, reúne a comunidade local
                        e turistas para apresentações artísticas que exaltam as tradições populares e folclóricas da região.
                    </p>
                </div>

                {/* Conteúdo principal com imagem e texto */}
                <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-8">
                    {/* Imagem maior e centralizada */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/CulturePage/guerreiros página cultura.jpg"
                            alt="Festival Folclórico"
                            className="w-full md:w-[450px] h-auto object-cover rounded shadow-lg"
                        />
                    </div>

                    {/* Texto com destaques e marcadores */}
                    <div className="w-full md:w-1/2 text-justify space-y-6">
                        {/* Quadrilhas Tradicionais */}
                        <div>
                            <h3 className="text-2xl font-semibold text-[#f3f3f3] mb-2">Quadrilhas Tradicionais</h3>
                            <p>
                                As quadrilhas tradicionais são um dos maiores atrativos do festival. Inspiradas nas festas juninas, elas trazem coreografias sincronizadas, figurinos coloridos e músicas típicas que fazem referência à vida no campo. O enredo geralmente inclui temas de romance e celebrações agrícolas, como a colheita.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-3">
                                <li>
                                    <span className="font-semibold">Características:</span> Passos marcados, como o “anarriê” e “balancê”, e elementos como casamento caipira e cenários rurais.
                                </li>
                                <li>
                                    <span className="font-semibold">Origem:</span> Influenciada pelas danças europeias, adaptadas à cultura brasileira com toques regionais.
                                </li>
                            </ul>
                        </div>

                        {/* Quadrilhas Cômicas */}
                        <div>
                            <h3 className="text-2xl font-semibold text-[#f3f3f3] mb-2">Quadrilhas Cômicas</h3>
                            <p>
                                Essas apresentações têm um caráter humorístico e buscam divertir o público com sátiras e paródias. Os dançarinos vestem figurinos exagerados e incorporam situações engraçadas ao longo da performance.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-3">
                                <li>
                                    <span className="font-semibold">Destaque:</span> Improvisos criativos e interações com o público.
                                </li>
                                <li>
                                    <span className="font-semibold">Importância:</span> Representa o lado irreverente e descontraído da cultura popular.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* Divisória - Dança Portuguesa */}
            <section className="bg-[#1d1a1a] text-white py-8">
                <h2 className="text-3xl bg-[#09515e] font-semibold text-center mb-6">
                    Dança Portuguesa
                </h2>
                <div className="container mx-auto flex flex-col md:flex-row px-4">
                    {/* Ajuste para deixar o texto mais em coluna */}
                    <div className="w-full md:w-1/2 text-justify max-w-prose mx-auto">
                        <p>
                            A dança portuguesa em Manacapuru reflete a forte influência da herança cultural portuguesa, trazida pelos imigrantes que se estabeleceram na região. Uma das manifestações mais representativas dessa influência é o Vira, uma dança tradicional portuguesa que foi adaptada à realidade local, mantendo suas características originais, como os movimentos giratórios e o ritmo acelerado, mas com nuances próprias da cultura amazônica. Além do Vira, a música e a dança do Fado, típica de Portugal, também influenciaram a região, embora com adaptações às particularidades do Amazonas.
                        </p>
                        <p className="mt-4">
                            Essas danças continuam sendo praticadas em festas tradicionais. Contudo, essas expressões culturais foram gradualmente incorporadas à rica diversidade cultural local, criando uma fusão única entre as tradições portuguesas e as influências indígenas e afro-brasileiras do Amazonas. Assim, a dança portuguesa em Manacapuru mantém viva essa memória histórica, ao mesmo tempo em que reflete a identidade cultural própria da região.
                        </p>
                    </div>

                    {/* Ajuste no tamanho e centralização das imagens */}
                    <div className="w-full md:w-1/2 flex flex-col gap-8 items-center mt-6 md:mt-0">
                        <img
                            src="/CulturePage/PORTUGUESA (1).png"
                            alt="Dança Portuguesa 1"
                            className="w-96 h-72 object-cover rounded shadow-lg"
                        />
                        <img
                            src="/CulturePage/PORTUGUESA.png"
                            alt="Dança Portuguesa 2"
                            className="w-96 h-72 object-cover rounded shadow-lg"
                        />
                    </div>
                </div>
            </section>


            {/* Divisória - Boi-Bumbá */}
            <section className="bg-[#1d1a1a] text-white py-8">
                <h2 className="text-3xl bg-[#09515e] font-semibold text-center mb-6">Boi-Bumbá</h2>

                <div className="container mx-auto flex flex-col items-center gap-6 px-4">
                    {/* Div para centralizar as imagens */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <img
                            src="/CulturePage/BOI BUMBA (2).png"
                            alt="Boi-Bumbá 1"
                            className="w-72 h-48 object-cover rounded shadow-lg"
                        />
                        <img
                            src="/CulturePage/BOI BUMBA (1).png"
                            alt="Boi-Bumbá 2"
                            className="w-72 h-48 object-cover rounded shadow-lg"
                        />
                        <img
                            src="/CulturePage/BOI BUMBA.png"
                            alt="Boi-Bumbá 3"
                            className="w-72 h-48 object-cover rounded shadow-lg"
                        />
                    </div>
                </div>

                <div className="container mx-auto py-6 px-4 text-justify">
                    <p>
                        O Boi-Bumbá é uma das manifestações culturais mais representativas da região Norte do Brasil, especialmente no estado do Amazonas, com forte presença em Manaus e em várias cidades do interior, como Parintins. Sua origem remonta à mistura de várias influências culturais, principalmente indígenas, africanas e portuguesas, que formaram a base da identidade cultural da Amazônia.
                    </p>
                    <p className="mt-4">
                        A lenda que dá origem ao Boi-Bumbá é a história de um boi que morre e depois é ressuscitado, sendo uma representação de elementos míticos e folclóricos da região. A história gira em torno de um homem chamado Pai Francisco, que mata o boi de seu patrão, o fazendeiro, e depois tenta ressuscitá-lo com a ajuda de outras personagens, como a curandeira Dona Maria. Ao longo do enredo, a figura do boi se torna um símbolo de fertilidade, vida e renovação.
                    </p>
                    <p className="mt-4">
                        O Boi-Bumbá tem sua raiz nas festas de origem portuguesa, como o auto de boi, uma encenação popular medieval, e se mistura com tradições indígenas e afro-brasileiras. A festa ganhou um caráter mais visível e grandioso em Parintins, onde se realiza o famoso Festival de Boi-Bumbá, uma das maiores celebrações culturais do Amazonas, que atrai milhares de turistas todos os anos. O festival é marcado por apresentações de grupos que representam as cores e os ritmos do boi, com destaque para o Boi Garantido e o Boi Caprichoso, que disputam o título de melhor grupo durante a festa.
                    </p>
                    <p className="mt-4">
                        O Boi-Bumbá, além de sua forte componente festiva, também é uma expressão cultural que envolve danças, músicas e encenações, sendo uma celebração da cultura amazônica, da resistência e da união das diversas etnias que compõem a população da região. Com o tempo, o Boi-Bumbá se consolidou como um dos maiores símbolos culturais do Brasil, levando a cultura amazônica para o mundo.
                    </p>
                </div>
            </section>

        </main>
    );
}
