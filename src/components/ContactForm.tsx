import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const ContactForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useGSAP(() => {
    if (window.innerWidth < 768) return;

    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: containerRef });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget as HTMLFormElement;

    try {
      const formData = new FormData(form);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      setSuccessMessage(t('contact.success'));
      setErrorMessage(null);
      form.reset();

      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage(t('contact.error'));
      setSuccessMessage(null);
      setTimeout(() => setErrorMessage(null), 4000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section ref={containerRef} id="Formulario" className="relative z-10 scroll-mt-28 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-10 p-8 sm:p-12 rounded-xl border border-gray-200 dark:border-cyan-500 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-xl transition-colors duration-300">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        {t('contact.title')}
      </h2>

      {/* Mensajes de éxito/error */}
      {successMessage && (
        <div className="mb-4 p-3 bg-cyan-500/20 border border-cyan-400 text-cyan-700 dark:text-cyan-200 rounded transition-all">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-400 text-red-700 dark:text-red-200 rounded transition-all">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-gray-900 dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold">
              {t('contact.name')}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t('contact.name_ph')}
              required
              className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-semibold">
              {t('contact.phone')}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t('contact.phone_ph')}
              className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold">
              {t('contact.email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t('contact.email_ph')}
              required
              className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-semibold">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t('contact.message_ph')}
              rows={6}
              required
              className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none transition-colors"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-4">
          <button
            type="submit"
            disabled={isSending}
            className="bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 px-8 py-3 rounded-lg font-bold text-white text-lg transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? t('contact.sending') : t('contact.send')}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
