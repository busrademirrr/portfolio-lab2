export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <div className="text-center max-w-2xl">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-widest">
          Merhaba, ben
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Büşra Demir
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
          Software Engineering Student & AI Developer
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
          >
            Projelerimi Gör
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors shadow-md hover:-translate-y-1 transform duration-300"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
