import React from "react";

const MurasPage = () => {
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
                        Guerreiros Mura
                    </h1>
                </div>
            </div>

            {/* Conteúdo do meio */}
            <div className="container mx-auto py-10 px-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">História dos Muras</h2>
                <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Texto */}
                    <div className="md:w-2/3">
                        <p className="text-justify leading-relaxed">
                            Os Muras são um dos grupos indígenas mais antigos e conhecidos da região amazônica. Eles habitavam originalmente as margens dos rios e igarapés do estado do Amazonas, onde viviam da pesca, caça e coleta. Sua história é marcada pela resistência à colonização e pela defesa de seu território contra invasores, seja durante o período colonial ou na exploração moderna.
                        </p>
                        <p className="mt-4 text-justify leading-relaxed">
                            Apesar dos desafios, os Muras preservam sua rica cultura, que inclui danças tradicionais, mitos, e uma relação simbiótica com a natureza. Atualmente, muitos Muras estão engajados em projetos que visam proteger a Amazônia e manter vivas suas tradições.
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
                        Legado dos Muras
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default MurasPage;
