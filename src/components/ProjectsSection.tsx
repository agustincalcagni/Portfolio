import React, { useState } from "react";
import {
  Filter,
  Plus,
  Eye,
  ExternalLink,
  Code,
  Database,
  BarChart3,
} from "lucide-react";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Análisis de Ventas ~ Contoso Retail",
      description:
        "Análisis completo del comportamiento de compra y tendencias de ventas para optimizar la estrategia comercial.",
      dataset: "Datos de transacciones 2021-2024",
      objective:
        "Identificar patrones de compra y oportunidades de crecimiento" /*Indicador de ventas  */,
      results:
        "Incremento del 23% en conversión tras implementar recomendaciones",
      technologies: ["SQL", "Snowflake", "Qlik View Cloud", "Power BI"],
      category: "Business Intelligence",
      status: "Completado",
    },
    {
      id: 2,
      title: "Análisis de usuarios ~ Cyclistic",
      description:
        "Cyclistic es un programa de bicicletas compartidas que busca entender cómo usan el servicio dos tipos de clientes.",
      dataset:
        "Datos de usuarios y comportamiento reales de una compañía de bicis rentadas de USA (fuente: Google Cloud Platform)",
      objective: "Realizar análisis de diagnóstico sobre el comportamiento",
      results:
        "La estacionalidad impacta más a los casuales, con picos de uso en verano y primavera.",
      technologies: ["SQL", "BigQuery", "Looker", "Tableau"],
      category: "Machine Learning",
      status: "Completado",
    },
    {
      id: 3,
      title: "Emisiones Globales de CO2",
      description:
        "Este análisis estudia las emisiones de dióxido de carbono (CO2) en las diferentes regiones del planeta. ",
      dataset: "Datos financieros consolidados",
      objective:
        "El objetivo fue entender cómo se distribuyen las emisiones en todo el planeta",
      results: "Reducción del 40% en tiempo de generación de reportes",
      technologies: ["Tableau Public", "SQL", "Excel"],
      category: "EDA",
      status: "Completado",
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    dataset: "",
    objective: "",
    results: "",
    technologies: [],
    category: "Business Intelligence",
    status: "En progreso",
  });

  const technologies = [
    "SQL",
    "Python",
    "R",
    "Power BI",
    "Tableau",
    "Qlik Sense",
    "BigQuery",
    "Snowflake",
    "PostgreSQL",
  ];
  const categories = [
    "Todos",
    "Business Intelligence",
    "Machine Learning",
    "Data Engineering",
  ];

  const filteredProjects =
    selectedFilter === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProject.title && newProject.description) {
      const project = {
        ...newProject,
        id: Date.now(),
      };
      setProjects([...projects, project]);
      setNewProject({
        title: "",
        description: "",
        dataset: "",
        objective: "",
        results: "",
        technologies: [],
        category: "Business Intelligence",
        status: "En progreso",
      });
      setShowAddForm(false);
    }
  };

  const toggleTechnology = (tech) => {
    const updatedTechs = newProject.technologies.includes(tech)
      ? newProject.technologies.filter((t) => t !== tech)
      : [...newProject.technologies, tech];
    setNewProject({ ...newProject, technologies: updatedTechs });
  };

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 md:mb-0">
            Proyectos
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Plus className="w-4 h-4" />
              Nuevo Proyecto
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-slate-800 text-lg">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completado"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      Dataset
                    </span>
                    <p className="text-sm text-slate-700">{project.dataset}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      Objetivo
                    </span>
                    <p className="text-sm text-slate-700">
                      {project.objective}
                    </p>
                  </div>
                  {project.results && (
                    <div>
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        Resultados
                      </span>
                      <p className="text-sm text-green-700 font-medium">
                        {project.results}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-200 transition-colors text-sm">
                    <Eye className="w-4 h-4" />
                    Ver detalles
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Project Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Nuevo Proyecto
              </h3>

              <form onSubmit={handleAddProject} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Título *
                  </label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) =>
                      setNewProject({ ...newProject, title: e.target.value })
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Descripción *
                  </label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        description: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Dataset
                    </label>
                    <input
                      type="text"
                      value={newProject.dataset}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          dataset: e.target.value,
                        })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Categoría
                    </label>
                    <select
                      value={newProject.category}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          category: e.target.value,
                        })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.slice(1).map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Objetivo
                  </label>
                  <textarea
                    value={newProject.objective}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        objective: e.target.value,
                      })
                    }
                    rows={2}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Resultados
                  </label>
                  <textarea
                    value={newProject.results}
                    onChange={(e) =>
                      setNewProject({ ...newProject, results: e.target.value })
                    }
                    rows={2}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Tecnologías
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {technologies.map((tech) => (
                      <label
                        key={tech}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={newProject.technologies.includes(tech)}
                          onChange={() => toggleTechnology(tech)}
                          className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-slate-700">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Agregar Proyecto
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
