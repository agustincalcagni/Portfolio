import React from 'react';
import { Code, Database, BarChart3, FileSpreadsheet } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Lenguajes y Análisis",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-500",
      skills: [
        { name: "SQL", level: 95 },
        { name: "Python", level: 90 },
        { name: "R", level: 80 }
      ]
    },
    {
      title: "Bases de Datos y Entornos",
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-500",
      skills: [
        { name: "BigQuery", level: 90 },
        { name: "Snowflake", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "Supabase", level: 90 }
      ]
    },
    {
      title: "Visualización",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-purple-500",
      skills: [
        { name: "Qlik Sense", level: 92 },
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 }
      ]
    },
    {
      title: "Ofimática",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: "bg-orange-500",
      skills: [
        { name: "Excel", level: 95 },
        { name: "Google Sheets", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Tecnologías y Habilidades</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color} p-3 rounded-lg text-white`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-slate-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-slate-800 text-center mb-8">Herramientas Complementarias</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Jupyter Notebooks', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 
              'Scikit-learn', 'TensorFlow', 'Docker', 'Git', 'Linux', 'AWS', 'Google Cloud',
              'Apache Spark', 'Airflow', 'dbt', 'Looker Studio'
            ].map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-indigo-100 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;