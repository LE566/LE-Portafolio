import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section
      id="Formulario"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 lg:mb-20 mt-20 lg:mt-30 p-8 sm:p-10 rounded-xl border border-cyan-500 bg-black backdrop-blur-md shadow-xl"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">
        Contáctame
      </h2>

      <form className="space-y-6 text-white">
        <fieldset>
          <legend className="sr-only">Formulario de contacto</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-semibold"
              >
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Tu teléfono"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold"
              >
                Correo
              </label>
              <input
                id="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                rows={6}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-8">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-bold text-white text-lg transition-transform duration-200 hover:scale-105"
            >
              Enviar
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default ContactForm;
