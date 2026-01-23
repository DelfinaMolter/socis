
import React from 'react';
import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-2xl font-black tracking-tighter">
                SOCIS <span className="text-blue-600">CONSULTORES</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed">
              Expertos en Sistemas de Gestión de Calidad y regímenes de promoción industrial en Argentina.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>socis@socis.com.ar</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>(54 911) 4447-8802</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-slate-400">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">LinkedIn</h4>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <p className="mt-6 text-sm text-slate-500">
              Síganos para estar al tanto de novedades en normativas y procesos.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SOCIS Consultores. Especialistas en Normas ISO.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors md:mr-20"
          >
            Volver arriba <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
