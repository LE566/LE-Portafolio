import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Tipa correctamente el formulario
    const form = e.currentTarget as HTMLFormElement;

    try {
      // Obtener token de reCAPTCHA v3
      const token = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY!,
        { action: "submit" }
      );

      const formData = new FormData(form);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          "g-recaptcha-response": token,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      setSuccessMessage("¡Correo enviado con éxito!");
      setErrorMessage(null);
      form.reset();

      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (error) {
      console.error("EmailJS/reCAPTCHA Error:", error);
      setErrorMessage("Hubo un error al enviar el correo. Intenta de nuevo.");
      setSuccessMessage(null);
      setTimeout(() => setErrorMessage(null), 4000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-20 mt-20 p-8 sm:p-10 rounded-xl border border-cyan-500 bg-black backdrop-blur-md shadow-xl">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">
        Contáctame
      </h2>

      {/* Mensajes de éxito/error */}
      {successMessage && (
        <div className="mb-4 p-3 bg-cyan-500/20 border border-cyan-400 text-cyan-200 rounded transition-all">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-400 text-red-200 rounded transition-all">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-semibold">
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Tu teléfono"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold">
              Correo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-semibold">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              rows={6}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-4">
          <button
            type="submit"
            disabled={isSending}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-bold text-white text-lg transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
