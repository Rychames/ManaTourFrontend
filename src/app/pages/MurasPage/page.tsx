import React from "react";

const MurasPage = () => {
    return (
        <div className="min-h-screen bg-[#1d1a1a] text-white">
            {/* Início da página */}
            <div className="relative bg-[#910c11] flex flex-col md:flex-row items-center justify-center h-auto md:h-[400px]">
                {/* Imagem */}
                <div className="w-full md:w-1/2 h-full">
                    <img
                        src="/murasPage/murasPage.png"
                        alt="Guerreiros Mura"
                        className="w-full h-auto md:h-full object-contain"
                    />
                </div>

                {/* Texto com fundo branco */}
                <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-6">
                    <h1 className="bg-white text-[#910c11] text-3xl md:text-4xl font-bold py-6 px-6 md:px-10 rounded shadow-lg text-center">
                        Guerreiros Mura
                    </h1>
                </div>
            </div>

            {/* Conteúdo do meio */}
            <div className="container mx-auto py-10 px-4 md:px-6 space-y-10">
                <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
                    História dos Muras
                </h2>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Texto */}
                    <div className="lg:w-2/3 space-y-6">
                        <p className="text-justify leading-relaxed text-base md:text-lg lg:text-xl">
                            A Ciranda Guerreiros Mura foi fundada em 1993 na cidade de Manacapuru, Amazonas, originando-se na Escola Estadual José Mota, localizada no bairro da Liberdade. Seu nome faz uma homenagem ao povo indígena Mura, que habita a região e é conhecido por sua bravura e resistência. Desde sua fundação, a identidade da ciranda Guerreiros Mura se destacou por seu forte cultural, suas coreografias marcantes e uma forte representação da cultura indígena, especialmente a dos Mura. As coreografias de seus membros, os "pitiús", evocam posturas de guerra e sua apresentação é um espetáculo visual repleto de alegorias, vestuário e ritmos que realçam a força guerreira do povo Mura.
                            Com o passar dos anos, a ciranda se consolidou como uma das mais vitoriosas do Festival de Cirandas de Manacapuru, acumulando títulos e tornando-se uma das agremiações mais respeitadas da competição. Ao longo de sua história, Guerreiros Mura conquistou 13 títulos de campeã, sendo reconhecido não apenas pela grandiosidade de suas apresentações, mas também pela dedicação e união de seus participantes. Suas apresentações, que envolvem uma mistura de elementos folclóricos e culturais indígenas, são sempre marcadas por temas ricos em história e representações artísticas.
                            A ciranda Guerreiros Mura também é conhecida por sua grande participação comunitária, sendo um símbolo de união e cultura para Manacapuru. A agregação tem sido fundamental para a preservação e divulgação das tradições culturais da cidade, tanto localmente quanto nacionalmente
                        </p>
                        <p className="text-justify leading-relaxed text-base md:text-lg lg:text-xl">
                        </p>
                    </div>

                    {/* Imagens */}
                    <div className="lg:w-1/3 flex flex-col gap-6">
                        <img
                            src="/murasPage/GUERREIROS (1).png"
                            alt="História dos Muras"
                            className="w-full h-auto rounded shadow-lg object-contain"
                        />
                        <img
                            src="/murasPage/GUERREIROS (2).png"
                            alt="História dos Muras 2"
                            className="w-full h-auto rounded shadow-lg object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Final da página */}
            <div className="relative bg-[#910c11] flex flex-col md:flex-row items-center justify-center h-auto md:h-[400px]">
                {/* Imagem */}
                <div className="w-full md:w-1/2 h-full">
                    <img
                        src="/murasPage/GUERREIROS.png"
                        alt="Legado dos Muras"
                        className="w-full h-auto md:h-full object-contain"
                    />
                </div>

                {/* Texto com fundo branco */}
                <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-6">
                    <h1 className="bg-white text-[#910c11] text-lg md:text-xl lg:text-2xl font-bold py-6 px-6 md:px-10 rounded shadow-lg text-center">
                        " Oh sai da frente que os pitiús chegaram"
                        A Raça Mura é a fiel e animada torcida da Ciranda Guerreiros Mura. O nome "Pitiú" remete ao espírito guerreiro do povo Mura, que é celebrado nas apresentações da ciranda. A torcida é reconhecida por sua energia contagiante durante o Festival de Cirandas, onde participa ativamente com cantos, danças e apoio vibrante aos membros da agremiação. Sua força e paixão ajudam a manter a tradição viva, refletindo o orgulho da comunidade de Manacapuru

                    </h1>
                </div>
            </div>
        </div>
    );
};

export default MurasPage;
