export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; 2026 Büşra Demir. Tüm hakları saklıdır.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/busrademirrr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub Profilim"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/busrademir473a83303/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profilim"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
