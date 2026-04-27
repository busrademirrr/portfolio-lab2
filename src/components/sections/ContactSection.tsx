import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">İletişime Geçin</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Projeler, iş teklifleri veya sadece merhaba demek için bana ulaşabilirsiniz.
          </p>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <strong>E-posta:</strong> busrademir718@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <strong>Telefon:</strong> +90 551 946 97 91
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <strong>Konum:</strong> İstanbul, Türkiye
            </li>
          </ul>
        </div>
        
        <div className="flex-1 w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
