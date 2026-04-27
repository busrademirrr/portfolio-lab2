export default function Skills() {
  const skillCategories = [
    {
      title: "Programlama Dilleri",
      skills: ["Python", "C#", "Java", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Web Teknolojileri",
      skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"],
    },
    {
      title: "Yapay Zeka & Veri Bilimi",
      skills: ["Machine Learning", "Model Fine-Tuning", "PyTorch", "Data Analysis", "Scikit-Learn"],
    },
    {
      title: "Araçlar & Veritabanları",
      skills: ["Git / GitHub", "Docker / AWS", "PostgreSQL / MongoDB", "Supabase"],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Yetenekler</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">Kullandığım teknolojiler ve araçlar</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 mr-2">✦</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
