"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Bathhouse {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
}

export default function BathhousesPage() {
  const [bathhouses, setBathhouses] = useState<Bathhouse[]>([]);

  useEffect(() => {
    const fetchBathhouses = async () => {
      try {
        const response = await axios.get("/data/balnearios.json");
        setBathhouses(response.data);
      } catch (error) {
        console.error("Erro ao carregar os dados dos balneários:", error);
      }
    };

    fetchBathhouses();
  }, []);

  return (
    <main className="w-full bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Balneários
      </h1>

      <div className="container mx-auto px-4 space-y-8">
        {bathhouses.map((bathhouse) => (
          <div
            key={bathhouse.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Imagem do balneário */}
            <img
              src={bathhouse.image}
              alt={bathhouse.name}
              className="w-full md:w-1/3 object-cover"
            />

            {/* Informações do balneário */}
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {bathhouse.name}
              </h2>
              <p className="text-gray-600 mb-4">{bathhouse.description}</p>

              {/* Botão de localização */}
              <a
                href={bathhouse.location}
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
