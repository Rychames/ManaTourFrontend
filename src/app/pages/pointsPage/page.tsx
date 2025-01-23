"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Hotel {
  id: number;
  name: string;
  description: string;
  image: string;
  gallery: string[];
  location: string;
}

export default function BarsPage() {
  const [bars, setBars] = useState<Hotel[]>([]);

  // Carregar dados do arquivo JSON
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("/data/pontos.json");
        setBars(response.data);
      } catch (error) {
        console.error("Erro ao carregar os dados dos hotéis:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <main className="w-full bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Pontos Turísticos
      </h1>

      <div className="container mx-auto px-4 space-y-8">
        {bars.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Imagem principal do hotel */}
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full md:w-1/3 object-cover"
            />

            {/* Informações do hotel */}
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {hotel.name}
              </h2>
              <p className="text-gray-600 mb-4">{hotel.description}</p>

              {/* Galeria de imagens */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {hotel.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                ))}
              </div>

              {/* Botão de localização */}
              <a
                href={hotel.location}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded shadow hover:bg-blue-600 transition"
              >
                <FaMapMarkerAlt className="mr-2" />
                Chegue até lá
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
