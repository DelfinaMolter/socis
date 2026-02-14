import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  TrendingUp,
  Lock,
  ListChecks,
  ChevronDown,
  CheckCircle2,
  Info,
} from "lucide-react";

const ISO_STANDARDS = [
  {
    category: "CALIDAD",
    name: "ISO 9001",
    desc: "Es un modelo de gestión que apunta a la calidad de los procesos de la organización.",
  },
  {
    category: "MEDIO AMBIENTE",
    name: "ISO 14001",
    desc: "Modelo de gestión focalizado en controlar y actuar sobre los impactos ambientales.",
  },
  {
    category: "SEGURIDAD Y SALUD",
    name: "ISO 45001",
    desc: "(OHSAS 18001) Ayuda a la mejora de los factores que pueden afectar al bienestar de los trabajadores de la empresa.",
  },
  {
    category: "TRADUCCIONES",
    name: "ISO 17100",
    desc: "Esta norma detalla los requisitos para todos los aspectos del proceso de traducción que repercuten directamente en la calidad y prestación de los servicios de traducción.",
  },
  {
    category: "LABORATORIOS",
    name: "ISO/IEC 17025 – IRAM 301",
    desc: "Estándar internacional que establece los requisitos generales que debe cumplir cualquier laboratorio que desea garantizar su competencia técnica y fiabilidad de sus resultados.",
  },
];

const ISO_27001_INFO = [
  {
    category: "DEFINICIÓN",
    name: "¿Qué es ISO 27001?",
    desc: "Norma internacional que describe cómo gestionar la seguridad de la información en una empresa, protegiendo la confidencialidad, integridad y disponibilidad de los datos.",
  },
  {
    category: "FUNCIONAMIENTO",
    name: "¿Cómo funciona?",
    desc: "Investiga los potenciales problemas que podrían afectar la información, implementando controles para proteger la confidencialidad, integridad y disponibilidad de los activos de información.",
  },
  {
    category: "BENEFICIOS",
    name: "Importancia para su empresa",
    desc: "Cumple con requerimientos legales, elimina incidentes de seguridad en la información y genera confianza en los clientes que valoran la protección de sus datos.",
  },
  {
    category: "IDENTIFICACIÓN",
    name: "Activos y Vulnerabilidades",
    desc: "Identificamos los activos de información, sus responsables y vulnerabilidades, evaluando todo aquello que tiene valor para la organización.",
  },
  {
    category: "ANÁLISIS",
    name: "Amenazas y Riesgos",
    desc: "Identificamos amenazas potenciales (virus, espionaje, desastres naturales) y calculamos los riesgos según su probabilidad e impacto en la organización.",
  },
  {
    category: "IMPLEMENTACIÓN",
    name: "Plan de Tratamiento",
    desc: "Definimos la política de tratamiento de riesgos y seleccionamos los controles adecuados para asumir, reducir, eliminar o transferir cada riesgo identificado.",
  },
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSection, setExpandedSection] = useState<
    "none" | "iso" | "knowledge"
  >("none");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Manejar navegación por hash para expandir acordeones
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#isoStandards") {
        setExpandedSection("iso");
      } else if (hash === "#lec") {
        setExpandedSection("knowledge");
      } else if (hash === "#iso27001") {
        setExpandedSection("isoSegurity");
      }
    };

    // Verificar el hash inicial al cargar
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleSection = (section: "iso" | "knowledge" | "isoSegurity") => {
    setExpandedSection((prev) => (prev === section ? "none" : section));
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Modern office"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/40 to-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1] mb-6 tracking-tight">
            SOCIS <span className="text-blue-600 italic">Consultores</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-slate-600 mb-10">
            Implementamos normas ISO y gestionamos la Ley de Economía del
            Conocimiento para empresas de tecnología.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-lg"
            >
              Solicitar diagnóstico inicial
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* ISO Card & Accordion */}
          <div
            className={`glass rounded-3xl border border-white shadow-xl transition-all duration-500 overflow-hidden ${expandedSection === "iso" ? "ring-2 ring-blue-600/20" : ""}`}
            id="isoStandards"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      Certificación Normas ISO
                    </h3>
                    <p className="text-slate-600 max-w-xl">
                      Lo acompañamos paso a paso hasta lograr la certificación
                      de la Norma ISO 9001, 14001, 45001, 17025, 27001, y otras.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection("iso")}
                  className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shrink-0 ${expandedSection === "iso" ? "bg-blue-600 text-white" : "bg-slate-100 text-blue-600 hover:bg-blue-50"}`}
                >
                  {expandedSection === "iso"
                    ? "Cerrar Detalles"
                    : "Nuestros Servicios"}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${expandedSection === "iso" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* ISO Accordion Content */}
              <div
                className={`transition-all duration-700 ease-in-out ${expandedSection === "iso" ? "max-h-[2000px] opacity-100 mt-12" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                  {ISO_STANDARDS.map((iso) => (
                    <div key={iso.name} className="space-y-3 group">
                      <span className="text-[10px] font-black tracking-widest text-blue-500 uppercase">
                        {iso.category}
                      </span>
                      <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {iso.name}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {iso.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ISO 27001 Card & Accordion */}
          <div
            className={`glass rounded-3xl border border-white shadow-xl transition-all duration-500 overflow-hidden ${expandedSection === "isoSegurity" ? "ring-2 ring-indigo-600/20" : ""}`}
            id="iso27001"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Lock className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      ISO 27001
                    </h3>
                    <p className="text-slate-600 max-w-xl">
                      Seguridad de la Información: Proteja la confidencialidad,
                      integridad y disponibilidad de sus activos digitales.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection("isoSegurity")}
                  className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shrink-0 ${expandedSection === "isoSegurity" ? "bg-indigo-600 text-white" : "bg-slate-100 text-indigo-600 hover:bg-indigo-50"}`}
                >
                  {expandedSection === "knowledge"
                    ? "Cerrar Detalles"
                    : "Ver Norma"}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${expandedSection === "isoSegurity" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* ISO 27001 Accordion Content */}
              <div
                className={`transition-all duration-700 ease-in-out ${expandedSection === "isoSegurity" ? "max-h-[3000px] opacity-100 mt-12" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                <div className="pt-8 border-t border-slate-100 space-y-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-indigo-600 mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5" /> ¿Qué es?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Es una norma internacional emitida por la ISO que
                        describe cómo gestionar la seguridad de la información
                        en una empresa.
                      </p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-indigo-600 mb-3 flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5" /> ¿Cómo funciona?
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Protege la confidencialidad, integridad y disponibilidad
                        investigando potenciales problemas que podrían afectar
                        la información.
                      </p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-indigo-600 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> Importancia
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Cumple requisitos legales, elimina incidentes de
                        seguridad y genera confianza total en sus clientes y
                        socios.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                        <ListChecks className="w-6 h-6" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                        IMPLANTACIÓN DE LA NORMA ISO 27001
                      </h4>
                    </div>
                    <p className="text-indigo-200 mb-10 text-lg">
                      Al implantar un Sistema de Gestión de la Seguridad de la
                      Información (SGSI), el eje central es la{" "}
                      <strong>Evaluación de Riesgos</strong>.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                      {[
                        {
                          step: "1",
                          title: "Identificar Activos",
                          desc: "Reconocer todo aquello con valor: soportes físicos, intelectuales, informativos, marca y reputación.",
                        },
                        {
                          step: "2",
                          title: "Identificar Vulnerabilidades",
                          desc: "Debilidades propias del activo que lo hacen susceptible de sufrir ataques o daños.",
                        },
                        {
                          step: "3",
                          title: "Identificar Amenazas",
                          desc: "Sucesos dañinos: desastres naturales, incendios, virus, espionaje, etc.",
                        },
                        {
                          step: "4",
                          title: "Requisitos Legales",
                          desc: "Identificar obligaciones contractuales con clientes, socios y proveedores.",
                        },
                        {
                          step: "5",
                          title: "Identificar Riesgos",
                          desc: "Probabilidad de daño a la disponibilidad, confidencialidad e integridad.",
                        },
                        {
                          step: "6",
                          title: "Cálculo del Riesgo",
                          desc: "Determinar prioridades basándose en Impacto x Probabilidad de la amenaza.",
                        },
                        {
                          step: "7",
                          title: "Plan de Tratamiento",
                          desc: "Selección de controles para asumir, reducir, eliminar o transferir el riesgo.",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 group">
                          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold shrink-0 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                            {item.step}
                          </div>
                          <div>
                            <h5 className="font-bold text-white mb-1">
                              {item.title}
                            </h5>
                            <p className="text-slate-400 text-sm">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Knowledge Economy Card & Accordion */}
          <div
            className={`glass rounded-3xl border border-white shadow-xl transition-all duration-500 overflow-hidden ${expandedSection === "knowledge" ? "ring-2 ring-emerald-600/20" : ""}`}
            id="lec"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                    <TrendingUp className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      Economía del Conocimiento
                    </h3>
                    <p className="text-slate-600 max-w-xl">
                      Le ayudamos a armar la solicitud para acceder a los
                      beneficios del régimen de promoción nacional de forma
                      eficiente.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection("knowledge")}
                  className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shrink-0 ${expandedSection === "knowledge" ? "bg-emerald-600 text-white" : "bg-slate-100 text-emerald-600 hover:bg-emerald-50"}`}
                >
                  {expandedSection === "knowledge"
                    ? "Cerrar Detalles"
                    : "Saber más"}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${expandedSection === "knowledge" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* Knowledge Economy Accordion Content */}
              <div
                className={`transition-all duration-700 ease-in-out ${expandedSection === "knowledge" ? "max-h-[2000px] opacity-100 mt-12" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                <div className="pt-8 border-t border-slate-100">
                  <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center">
                      <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                        Acerca del RÉGIMEN DE PROMOCIÓN DE LA{" "}
                        <br className="hidden md:block" /> ECONOMÍA DEL
                        CONOCIMIENTO
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-12 gap-10 items-start">
                      <div className="md:col-span-4 flex justify-center">
                        <div className="relative p-4 bg-white rounded-full shadow-lg border border-slate-50">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coat_of_arms_of_Argentina.svg/1200px-Coat_of_arms_of_Argentina.svg.png"
                            alt="Escudo Nacional Argentino"
                            className="w-48 h-auto object-contain"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-8 space-y-8">
                        <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                          <p className="text-slate-800 font-medium leading-relaxed">
                            Cientos de empresas ya gozan del beneficio. Lo
                            asesoramos con los requisitos, realizamos la
                            presentación para la incorporación de su empresa a
                            este régimen y le ayudamos a certificar la norma de
                            calidad solicitada de ser necesario.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h5 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-emerald-600" />{" "}
                            Beneficios Principales
                          </h5>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {[
                              "Reducción en el Impuesto a las ganancias (60% micro/pymes, 40% medianas, 20% grandes).",
                              "Bono de crédito fiscal de hasta el 70% de las contribuciones patronales.",
                            ].map((benefit, i) => (
                              <div
                                key={i}
                                className="flex gap-3 text-sm text-slate-600"
                              >
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
