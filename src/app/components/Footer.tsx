export default function Footer() {
  return (
    < footer className = "w-full bg-[#1d1a1a] text-white py-10" >
      <div className="container mx-auto px-4">
        {/* Título do Footer */}
        <h2 className="text-3xl font-bold text-center mb-8">Contate-nos</h2>

        {/* Grid de Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Coluna 1: Endereço */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Endereço</h3>
            <p className="text-sm leading-relaxed">
              500 Terry Francine St.<br />
              São Francisco, CA 94158
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <p className="text-sm leading-relaxed">manatour.site@gmail.com</p>
          </div>

          {/* Coluna 3: Horário de Funcionamento */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
            <p className="text-sm leading-relaxed">
              2a. a 6a: 8:00 da manhã – 8:00 da noite<br />
              Sábado: 9:00 da manhã – 16:00 da tarde<br />
              Domingo: 9:00 da manhã – 13:00 da tarde
            </p>
          </div>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex justify-center mt-10 gap-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 5.006 3.657 9.128 8.438 9.878v-6.987H8.077v-2.89h2.36V9.388c0-2.334 1.393-3.622 3.525-3.622.739 0 1.539.132 1.539.132v1.865h-.867c-.854 0-1.119.532-1.119 1.08v1.296h2.01l-.321 2.89h-1.69v6.987C18.343 21.128 22 17.006 22 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.973.24 2.42.402.598.215 1.033.472 1.487.926.455.455.71.89.926 1.487.163.447.349 1.25.403 2.42.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.973-.402 2.42a4.493 4.493 0 0 1-.926 1.487c-.455.455-.89.71-1.487.926-.447.163-1.25.349-2.42.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.973-.24-2.42-.402a4.493 4.493 0 0 1-1.487-.926A4.493 4.493 0 0 1 2.163 17.27c-.163-.447-.349-1.25-.403-2.42C1.702 13.584 1.69 13.204 1.69 12c0-3.204.012-3.584.07-4.85.054-1.17.24-1.973.402-2.42a4.493 4.493 0 0 1 .926-1.487A4.493 4.493 0 0 1 5.005 2.59c.447-.163 1.25-.349 2.42-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.015 7.052.073c-1.281.059-2.183.27-2.962.575a6.631 6.631 0 0 0-2.4 1.553A6.631 6.631 0 0 0 .928 4.528C.623 5.307.412 6.21.353 7.49.015 8.77 0 9.174 0 12c0 2.826.015 3.23.073 4.51.059 1.281.27 2.183.575 2.962a6.631 6.631 0 0 0 1.553 2.4 6.631 6.631 0 0 0 2.4 1.553c.779.305 1.681.516 2.962.575C8.332 23.985 8.736 24 12 24c3.264 0 3.668-.015 4.948-.073 1.281-.059 2.183-.27 2.962-.575a6.631 6.631 0 0 0 2.4-1.553 6.631 6.631 0 0 0 1.553-2.4c.305-.779.516-1.681.575-2.962C23.985 15.668 24 15.264 24 12c0-2.826-.015-3.23-.073-4.51-.059-1.281-.27-2.183-.575-2.962a6.631 6.631 0 0 0-1.553-2.4A6.631 6.631 0 0 0 17.91.928C17.13.623 16.228.412 14.947.353 13.668.015 13.264 0 12 0z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M23.643 4.937c-.835.37-1.732.617-2.675.73a4.681 4.681 0 0 0 2.048-2.568 9.255 9.255 0 0 1-2.928 1.13 4.669 4.669 0 0 0-7.949 4.255c-3.876-.195-7.3-2.054-9.598-4.878a4.663 4.663 0 0 0-.632 2.347c0 1.617.822 3.048 2.071 3.886a4.651 4.651 0 0 1-2.116-.586v.06a4.67 4.67 0 0 0 3.743 4.576 4.719 4.719 0 0 1-2.11.08 4.675 4.675 0 0 0 4.367 3.243A9.378 9.378 0 0 1 1.11 20.026a13.214 13.214 0 0 0 7.165 2.1c8.6 0 13.31-7.127 13.31-13.31 0-.203-.004-.406-.013-.608a9.505 9.505 0 0 0 2.35-2.416z" />
            </svg>
          </a>
        </div>
      </div>
</footer >

    );
}
