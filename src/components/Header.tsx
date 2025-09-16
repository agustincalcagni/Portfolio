import React from 'react';
import { Mail, MapPin, Linkedin, Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-slate-800">Agustín Calcagni</h1>
            <p className="text-blue-600 font-medium">Analista de Datos | Data Analyst</p>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">Sobre mí</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Proyectos</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Habilidades</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Formación</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:agustincalcagni@gmail.com"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/agustincalcagni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;