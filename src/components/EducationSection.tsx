import React from 'react';
import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      title: "Analista de Datos",
      institution: "Jupi Digital",
      year: "2025",
      status: "En curso",
      description: "Programa integral de análisis de datos con enfoque en herramientas modernas y metodologías ágiles.",
      skills: ["Advanced SQL", "Python para Data Science", "Machine Learning", "Visualización Avanzada"],
      color: "bg-blue-500"
    },
    {
      title: "Certificado Profesional de Analista de Datos Junior",
      institution: "Coursera",
      year: "2024",
      status: "Completado",
      description: "Certificación profesional que cubre el ciclo completo del análisis de datos, desde la recolección hasta la presentación de insights.",
      skills: ["Data Cleaning", "Statistical Analysis", "Data Visualization", "Business Intelligence"],
      color: "bg-green-500"
    }
  ];

  const certifications = [
    { name: "Google Data Analytics Certificate", issuer: "Google/Coursera", year: "2024" },
    { name: "SQL for Data Science", issuer: "University of California, Davis", year: "2024" },
    { name: "Python for Data Analysis", issuer: "IBM", year: "2023" },
  ];

  return (
    <section id="education" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Formación y Certificaciones</h2>
        
        {/* Main Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 p-6 bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${edu.color} p-3 rounded-lg text-white`}>
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Completado' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.year}</span>
                  </div>
                  
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{edu.title}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Competencias Adquiridas</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-8 text-center">Certificaciones Adicionales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">{cert.name}</h4>
                    <p className="text-slate-600 text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{cert.year}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-slate-800 text-center mb-6">Aprendizaje Continuo</h3>
          <div className="text-center">
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Comprometido con el aprendizaje continuo y la actualización constante en las últimas tendencias 
              y herramientas del análisis de datos y la ciencia de datos.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                🎯 Big Data & Analytics
              </span>
              <span className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                🤖 Machine Learning
              </span>
              <span className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                ☁️ Cloud Platforms
              </span>
              <span className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                📊 Advanced Visualization
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;