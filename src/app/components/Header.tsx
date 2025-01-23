"use client"; // Marca o componente como sendo do lado do cliente

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Remove os destaques existentes
    document.querySelectorAll(".highlight").forEach((el) => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.innerText), el);
    });

    // Realiza a busca na página e destaca os resultados
    if (term.trim()) {
      const elements = document.querySelectorAll("body *:not(script):not(style)");
      elements.forEach((el) => {
        if (el.children.length === 0 && el.textContent) {
          const regex = new RegExp(`(${term})`, "gi");
          el.innerHTML = el.textContent.replace(
            regex,
            `<span class="highlight" style="background-color: yellow; color: black;">$1</span>`
          );
        }
      });
    }
  };

  return (
    <header className="bg-[#0e434d] text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-32" />
        </div>

        {/* Navegação para telas grandes */}
        <nav className="hidden md:flex items-center justify-center space-x-8 w-full">
          <Link
            href="../pages/homePage"
            className="hover:underline text-lg transition duration-300"
          >
            INÍCIO
          </Link>

          <Link
            href="../pages/touristPage"
            className="hover:underline text-lg transition duration-300"
          >
            PONTO T.
          </Link>
        </nav>

        {/* Barra de pesquisa visível apenas em telas grandes */}
        <div className="hidden md:flex items-center space-x-2 relative w-full max-w-md">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="pl-4 pr-10 py-2 rounded-full border-2 border-transparent focus:ring-2 focus:ring-teal-400 focus:border-teal-400 w-full text-black"
            value={searchTerm}
            onChange={handleSearch}
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
        </div>

        {/* Menu hambúrguer para telas pequenas */}
        <button
          className={`md:hidden text-white transform transition-all duration-300 ${
            isMenuOpen ? "rotate-90" : ""
          }`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navegação e barra de pesquisa para telas pequenas */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center space-y-4 p-4`}
      >
        {/* Links de navegação */}
        <Link
          href="../pages/homePage"
          className="hover:underline text-lg transition duration-300"
        >
          INÍCIO
        </Link>
        <Link
          href="../pages/touristPage"
          className="hover:underline text-lg transition duration-300"
        >
          PONTO T.
        </Link>

        {/* Barra de pesquisa */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="pl-4 pr-10 py-2 w-full rounded-full border-2 border-transparent focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-black"
            value={searchTerm}
            onChange={handleSearch}
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
        </div>
      </div>
    </header>
  );
}
