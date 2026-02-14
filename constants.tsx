import {
  ShieldCheck,
  FileCheck,
  Users,
  GraduationCap,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { Service, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "Normas ISO", href: "#isoStandards" },
  { label: "ISO 27001", href: "#iso27001" },
  { label: "Ley de Conocimiento", href: "#lec" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "iso",
    title: "Certificación Normas ISO",
    description:
      "Acompañamiento integral en la implementación y certificación de Normas ISO 9001, 14001, 45001, 17025, 27001 y otras.",
    icon: "ShieldCheck",
  },
  {
    id: "knowledge",
    title: "Economía del Conocimiento",
    description:
      "Asesoramiento experto para acceder a los beneficios del régimen de promoción de la Ley 27.506.",
    icon: "TrendingUp",
  },
  {
    id: "software-law",
    title: "Ley de Promoción de Software",
    description:
      "Gestión de inscripciones y cumplimiento bajo el marco de la Ley 25.922 y sus modificatorias.",
    icon: "FileCheck",
  },
  {
    id: "training",
    title: "Formación del Personal",
    description:
      "Cursos orientados a mandos medios y responsables de organización: ventas, personal, costos e interpretación.",
    icon: "GraduationCap",
  },
  {
    id: "iso-training",
    title: "Cursos Normas ISO",
    description:
      "Capacitación específica en Auditoría Interna, AMFE, Requisitos ISO/IEC 17025 y gestión de no conformidades.",
    icon: "Briefcase",
  },
  {
    id: "agile",
    title: "Mejora de Procesos",
    description:
      "Implementación ágil de mejoras que agregan valor y acompañan la velocidad de su negocio.",
    icon: "Users",
  },
];

export const TEAM = [
  {
    name: "Alejandro de Simone",
    role: "Director",
    desc: "Ingeniero Industrial. Especialista en procesos productivos y de servicios.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Marina Aguilar",
    role: "Directora",
    desc: "Ingeniera Química. Especialista en implementación de Normas ISO.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Rodolfo Molter",
    role: "Director",
    desc: "Ingeniero Industrial. Especialista en infraestuctura de comunicaciones y datos.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500",
  },
];

export const CLIENT_SECTORS = {
  tecnologico: [
    "Cognisys SRL",
    "Foca Software Factory SA",
    "Gadik SRL",
    "Grupo MAS SRL",
    "Magnético SA",
    "Pagospyme",
    "Perfit",
    "Seincomp Informática SRL",
    "Sigma IT Solutions SRL",
    "Smartway SRL",
  ],
  industrial: [
    "Research AG",
    "Ambiental Pehuen",
    "Reopen SA",
    "Fragon, Cabinas de Pintura",
    "Prosabores SRL",
    "Foil CELTA",
    "CARJOR Obras Civiles y Viales",
    "POLIGSA División Envases Arg.",
    "Romalus RERAR",
    "ERBUS S.A.",
  ],
  servicios: [
    "Toribio Achával",
    "Naturgy",
    "South Post",
    "FIBROMARKET Optical Technology",
    "ANEKO SA",
    "Biocells SA",
    "ASV Fire",
    "Vortex Design Solutions",
    "Siproi",
    "Nimitek",
  ],
};

export const TECH_STACK = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 27001",
  "ISO 17025",
  "Ley 27.506",
  "Ley 25.922",
  "Mejora de Procesos",
  "Auditoría Interna",
];
