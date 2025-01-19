"use client";

import React from "react";

export default function CityAbout() {
    return (
        <main className="w-full bg-[#1d1a1a] min-h-screen py-10 px-4">
            {/* Título da cidade */}
            <h1 className="text-4xl font-bold text-center text-white mb-10">
                MANACAPURU
            </h1>

            {/* Primeira seção: Imagens empilhadas e texto */}
            <div className="container mx-auto flex flex-col md:flex-row items-center mb-10">
                {/* Imagens empilhadas */}
                <div className="flex flex-col space-y-6 w-full md:w-1/2 items-center md:items-start">
                    <img
                        src="/cityAbout/MANCAPURU.png"
                        alt="Imagem 1"
                        className="w-100 h-100 object-cover rounded shadow-lg"
                    />
                    <img
                        src="/cityAbout/MANACAPURU.png"
                        alt="Imagem 2"
                        className="w-100 h-100 object-cover rounded shadow-lg"
                    />
                    <img
                        src="/cityAbout/MANACAPURU (2).png"
                        alt="Imagem 3"
                        className="w-100 h-100 object-cover rounded shadow-lg"
                    />
                </div>

                {/* Texto ao lado das imagens */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10 text-gray-300 text-justify">
                    <p>
                        Manacapuru, conhecida como a "Princesinha do Solimões", é um município amazonense com uma história rica e profunda. Sua fundação remonta a 15 de julho de 1786, quando foi criada como uma aldeia missionária pelos jesuítas, liderados por Frei Manuel do Espírito Santo. O objetivo era catequizar os indígenas da região, especialmente os povos Mura, que habitavam as margens do rio Solimões.
                        A aldeia foi estrategicamente localizada perto do encontro dos rios Solimões e Negro, tornando-se um importante ponto de conexão na região amazônica. Seu nome deriva do tupi-guarani, significando "rio dos manacás", uma referência às flores características da área. Com o tempo, a aldeia se desenvolveu, transformando-se em vila e, posteriormente, adquirindo o status de município em 1932.
                        Hoje, Manacapuru é reconhecida não apenas por sua história, mas também por sua relevância cultural e econômica. Com uma população de cerca de 101.883 habitantes (Censo 2022) e uma área territorial de 7.336,58 km², o município se destaca na produção agrícola, especialmente de banana, e na pesca. Além disso, é um polo turístico conhecido por eventos como o Festival de Cirandas, que celebra as tradições locais e atrai visitantes de todo o Brasil.
                        Manacapuru é um exemplo de como a combinação entre história, cultura e natureza molda a identidade de uma região, tornando-se um destino único no coração da Amazônia. Para mais informações, visite o perfil do IBGE sobre a história e o panorama do município
                        A história de Manacapuru está fortemente ligada à aldeia dos Índios Mura, que se estabeleceram na margem esquerda do rio Solimões por volta do século XVIII, fazendo com que surgisse a localidade. Manacapuru é uma palavra de origem indígena, que deriva das
                        expressões Manacá e Puru. Manacá é uma planta brasileira das dicotiledôneas, da família solanaceae. Em tupi-guarani, a palavra significa “Flor”. Já a palavra “Puru” possui a mesma origem, sendo distinto apenas o significado, que quer dizer enfeitado ou matizado. Assim sendo, Manacapuru em tupi-guarani significa „‟Flor Matizada‟‟. Além dessas características, Manacapuru é conhecida nacionalmente como a Princesinha do Solimões, apelido que ostenta desde meados do século XIX. Muitos de seus atrativos naturais são conhecidos nacionalmente, assim como suas festas populares que estão entre as mais visitadas por turistas na Amazônia. A vegetação, típica da região Amazônica é formada por florestas de várzea e terra firme, tendo ao seu redor um relevo composto por lagos, ilhotes e uma pequena serra. Todos os anos ocorre a tradicional Festa das Cirandas, com o desfile de vários grupos de ciranda da cidade. Sua padroeira é Nossa Senhora de Nazaré. A exemplo de Parintins, Manacapuru também é conhecida por seu festival folclórico, porém, ao invés do característico boi bumbá de Parintins, a cidade é conhecida por
                        suas cirandas, agremiações que tocam um estilo de música típico local, e apresentam desfiles competitivos. Realiza-se todos os anos, o Festival de Ciranda se realiza no Cirandódromo da cidade, localizado no Parque do Ingá. A cultura manacapuruense é rica em tradições e festas folclóricas bastante apreciadas. Por conta do Festival de Cirandas, que nos últimos anos tem atraído grande número de turistas para a cidade, Manacapuru ficou conhecido como a “Terra das Cirandas”.
                    </p>
                </div>
            </div>

            {/* Segunda seção: Texto, imagem e texto */}
            <div className="container mx-auto mt-[12rem] flex flex-col md:flex-row items-center">
                {/* Texto esquerdo */}
                <div className="w-full md:w-1/3 text-gray-300 text-justify mb-6 md:mb-0">
                    <p>
                        A cidade de Manacapuru possui uma rica história e pontos importantes que destacam seu desenvolvimento social, cultural e histórico. A Escola Estadual Nossa Senhora de Nazaré, fundada em 1951, surgiu através dos esforços dos padres redentoristas, com forte apoio da comunidade local. Inicialmente construída com recursos da população e governamentais, a escola tem sido um pilar da educação na região, atendendo atualmente mais de 2.600 alunos. É um símbolo da integração entre espiritualidade e aprendizado para a população manacapuruense​. Outro ponto de destaque é a Igreja Matriz de Nossa Senhora de Nazaré, que foi construída entre 1904 e 1907 com apoio da comunidade e materiais vindos de Manaus e Coari. Ela se tornou um patrimônio cultural imaterial do Amazonas, sendo um marco religioso e arquitetônico para a cidade. Seu altar, em formato de canoa e remos, é um tributo às tradições amazônicas e foi usado durante a visita do Papa João Paulo II à região​. Além disso, a cidade conta com a Casa da Cultura, um importante centro cultural inaugurado em 1971 e projetado para atividades como conferências e apresentações teatrais. É uma das construções arquitetônicas mais significativas de Manacapuru, tendo passado por reformas para modernizar suas instalações, mas mantendo sua estética histórica
                    </p>
                </div>

                {/* Imagem central */}
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 ms-3 me-3">
                    <img
                        src="/cityAbout/MANACAPURU (1).png"
                        alt="Centro de Manacapuru"
                        className="w-100 h-100 object-cover rounded shadow-lg"
                    />
                </div>

                {/* Texto direito */}
                <div className="w-25 md:w-1/3 text-gray-300 text-justify">
                    <p>
                        Manacapuru também abriga o Hospital Lázaro Reis, que substituiu a antiga Maternidade Eliza Couto em 1977, destacando-se no atendimento de saúde regional. Há ainda a Câmara Municipal, que funciona em um edifício histórico reformado na década de 1980, originalmente usado para fins residenciais e governamentais​.

                        Esses pontos refletem a importância de Manacapuru como um município que preserva sua história e cultura enquanto avança em infraestrutura e serviços. Se você busca explorar mais sobre esses locais e sua história, cada um deles revela diferentes aspectos do passado e da identidade do povo manacapuruense.
                    </p>
                </div>
            </div>
        </main>
    );
}
