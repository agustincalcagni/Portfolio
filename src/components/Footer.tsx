import React from 'react';
import { Mail, Linkedin, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Agustín Calcagni</h3>
            <p className="text-slate-300 mb-4">
              Analista de Datos especializado en transformar datos en insights accionables 
              para la toma de decisiones estratégicas.
            </p>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4" />
              <span>Concarán, San Luis, Argentina</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Especialidades</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Análisis Exploratorio de Datos</li>
              <li>• Business Intelligence</li>
              <li>• Visualización de Datos</li>
              <li>• Machine Learning</li>
              <li>• Data Engineering</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="mailto:agustincalcagni@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>agustincalcagni@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/agustincalcagni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
            
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Descargar CV
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Desarrollado con <Heart className="w-4 h-4 text-red-500" /> por Agustín Calcagni • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;