
import { Mail, MapPin, Linkedin, Github, Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Personal Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                  👋 ¡Hola! Soy
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Agustín
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Calcagni
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-200 font-medium">
                Analista de Datos | Data Analyst
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Especializado en transformar datos complejos en insights accionables 
                que impulsan decisiones estratégicas y generan valor empresarial.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-slate-700/50 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span>Concarán, San Luis, Argentina</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-slate-700/50 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <a 
                  href="mailto:agustincalcagni@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  agustincalcagni@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-slate-300">
                <div className="bg-slate-700/50 p-2 rounded-lg">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/agustincalcagni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  linkedin.com/in/agustincalcagni
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Descargar CV
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contactar
              </button>
            </div>

            {/* Tech Stack Preview */}
            
          </div>
          

          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Agustín Calcagni - Analista de Datos"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg animate-pulse">
              <div className="text-2xl font-bold">3+</div>
              <div className="text-xs">Años de experiencia</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg animate-pulse delay-1000">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs">Proyectos completados</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;