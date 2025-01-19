import React from "react";

const MatizadaPage = () => {
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
                        Flor Matizada
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
                            A Ciranda Flor Matizada é uma das mais tradicionais agremiações de Manacapuru, fundada há mais de 40 anos, e tem grande relevância na cultura da cidade. Sua história começou na Escola Estadual Nossa Senhora de Nazaré e seu nome é uma homenagem ao significado de Manacapuru em nheengatu, que se traduz como "flor matizada", refletindo as cores lilás e branco, representando a flora local​. A ciranda tem como símbolo uma flor lilás, e sua torcida oficial, a "Família Matizada" (FAMA), é um dos maiores pilares de apoio da agremiação. A Flor Matizada já conquistou 10 títulos no Festival de Cirandas de Manacapuru, sendo o mais recente em 2018. O festival é um evento anual de grande importância, e a ciranda se destaca pela qualidade técnica e artística de suas apresentações. Entre as músicas mais conhecidas do grupo estão "Palco Cirandeiro" e "Cordão da Alegria"​.
                            Seus temas costumam explorar o folclore amazônico e a preservação cultural, como foi o caso do tema apresentado no festival de 2023, "Muricariuas", uma figura lendária da etnia Sateré Mawé, representando a luta pelo resgate de elementos da natureza
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
                        "Matizada eu sou!"
                        Além disso, a ciranda também recebeu o título de "Melhor Torcida" em várias edições do festival sendo a torcida que mais obtém títulos das três agremiações, o que demonstra a força de seu apoio popular. A Flor Matizada continua a ser uma das mais queridas e esperadas no evento, sempre encantando o público com seu desfile vibrante e cheio de símbolos culturais.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default MatizadaPage;
