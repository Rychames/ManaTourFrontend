import React from "react";

const TradicionalPage = () => {
    return (
        <div className="min-h-screen bg-[#1d1a1a] text-white">
            {/* Início da página */}
            <div className="relative bg-[#910c11] flex items-center justify-center h-[300px] md:h-[400px]">
                {/* Imagem */}
                <div className="w-2/3 md:w-1/2 h-full">
                    <img
                        src="/murasPage/murasPage.png"
                        alt="Guerreiros Mura"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Texto com fundo branco */}
                <div className="w-1/2 flex items-center justify-center relative">
                    <h1 className="absolute bg-white text-[#910c11] text-3xl md:text-4xl font-bold py-6 px-10 rounded shadow-lg -translate-x-6 translate-y-4">
                        TRADICIONAL
                    </h1>
                </div>
            </div>

            {/* Conteúdo do meio */}
            <div className="container mx-auto py-10 px-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Nossa História</h2>
                <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Texto */}
                    <div className="md:w-2/3">
                        <p className="text-justify leading-relaxed">
                            A Ciranda Tradicional, fundada em 1985 na Escola Estadual José Seffair, no bairro Terra Preta de Manacapuru, é uma das agremiações mais tradicionais do Festival de Cirandas da cidade. Conhecida por sua forte torcida, a "etnia", suas cores vermelho, dourado e branco e seu símbolo, a coroa dourada, a ciranda carrega consigo a história de Manacapuru e de seu povo. Seu nome faz referência ao compromisso com as origens e com a manutenção das tradições locais, sendo sempre uma das mais aclamadas pelo público durante as apresentações.
                            Apesar de ser uma das agremiações fundadoras, a Tradicional conquistou 5 títulos no festival ao longo dos anos, com o último título sendo conquistado em 2019, com o tema "Eldorado Encantado". Suas apresentações são sempre marcadas pela valorização da cultura local e pela grandiosidade de suas coreografias, que envolvem o público em uma verdadeira celebração das raízes amazônicas. Ao longo do tempo, a Ciranda Tradicional se consolidou como um ícone cultural de Manacapuru, sendo uma das atrações mais esperadas no festival, além de ser um símbolo de união e orgulho para o bairro Terra Preta e toda a cidade

                        </p>
                    </div>

                    {/* Imagens */}
                    <div className="md:w-1/3 flex flex-col gap-4">
                        <img
                            src="/murasPage/murasPage.png"
                            alt="História dos Muras"
                            className="w-full h-auto rounded shadow-lg object-cover"
                        />
                        <img
                            src="/murasPage/murasPage.png"
                            alt="História dos Muras 2"
                            className="w-full h-auto rounded shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Final da página */}
            <div className="relative bg-[#910c11] flex items-center justify-center h-[300px] md:h-[400px]">
                {/* Imagem */}
                <div className="w-2/3 md:w-1/2 h-full">
                    <img
                        src="/murasPage/murasPage.png"
                        alt="Legado dos Muras"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Texto com fundo branco */}
                <div className="w-1/2 flex items-center justify-center relative">
                    <h1 className="absolute bg-white text-[#910c11] text-3xl md:text-4xl font-bold py-6 px-10 rounded shadow-lg -translate-x-6 translate-y-4">
                        "Alô galera vermelha, dourada e branca"
                        A torcida da Ciranda Tradicional, chamada "Etnia", é um grupo fervoroso e dedicado, que apoia a agregação com muita energia durante o Festival de Cirandas de Manacapuru. Eles são conhecidos pela presença de sua vibração nas arquibancadas, onde cantam e dançam para animar as apresentações, além de fortalecer a identidade cultural da ciranda e do bairro Terra Preta
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default TradicionalPage;
