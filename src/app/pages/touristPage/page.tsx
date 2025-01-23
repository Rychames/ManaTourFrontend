import Link from "next/link";

import {
    FaHotel,
    FaCoffee,
    FaUtensils,
    FaGlassCheers,
    FaIceCream,
    FaSwimmer,
} from "react-icons/fa";

export default function TouristPage() {
    return (
        <main className="w-full bg-gray-100  flex flex-col items-center justify-center py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Escolha um Ponto Turístico
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
                {/* Hotéis e Pousadas */}
                <Link href="../pages/hotelsPage">
                    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                        <FaHotel className="text-blue-500 text-6xl mb-4" />
                        <p className="text-lg font-semibold text-gray-700">Hotéis e Pousadas</p>
                    </div>
                </Link>


                {/* Cafeterias */}
                <Link href="../pages/coffePage">
                    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                        <FaCoffee className="text-brown-500 text-6xl mb-4" />
                        <p className="text-lg font-semibold text-gray-700">Cafeterias</p>
                    </div>
                </Link>


                {/* Restaurantes */}
                <Link href="../pages/restaurantPage">
                    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                        <FaUtensils className="text-green-500 text-6xl mb-4" />
                        <p className="text-lg font-semibold text-gray-700">Restaurantes</p>
                    </div>
                </Link>

                {/* Bares */}
                <Link href="../pages/pointsPage">
                    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                        <FaGlassCheers className="text-purple-500 text-6xl mb-4" />
                        <p className="text-lg font-semibold text-gray-700">Pontos Turísticos</p>
                    </div>
                </Link>

                {/* Sorveterias */}
                <Link href="../pages/iceCreamPage">
                    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                        <FaIceCream className="text-pink-500 text-6xl mb-4" />
                        <p className="text-lg font-semibold text-gray-700">Sorveterias</p>
                    </div>
                </Link>

                {/* Balneários */}
                <Link href="../pages/bathhousesPage">
                    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                        <FaSwimmer className="text-teal-500 text-6xl mb-4" />
                        <p className="text-lg font-semibold text-gray-700">Balneários</p>
                    </div>
                </Link>
            </div>
        </main>
    );
}
