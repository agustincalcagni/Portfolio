import React from "react";
import { BarChart3, Database, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Sobre mí</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Analista de Datos con experiencia en el ciclo completo del
              análisis, desde la investigación y limpieza de datos hasta la
              visualización y generación de reportes. Manejo de entornos SQL,
              PostgreSQL, Python, BigQuery, Snowflake, Supabase, Qlik Sense,
              Power BI y Tableau, entre otros.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Ingeniería de Datos
                  </h3>
                  <p className="text-slate-600">
                    Extracción, transformación y carga de datos desde múltiples
                    fuentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Análisis de Datos
                  </h3>
                  <p className="text-slate-600">
                    Análisis estadístico y generación de insights accionables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Visualización
                  </h3>
                  <p className="text-slate-600">
                    Creación de dashboards interactivos y reportes ejecutivos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Especialidades Clave
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Análisis Exploratorio de Datos (EDA)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>ETL & Data Pipeline Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Business Intelligence & Reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Full Stack Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
