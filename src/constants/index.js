import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  cplus,
} from "../assets";

// ✅ IMPORT YOUR PROJECT IMAGES HERE (TOP)
import deepfake from "../assets/deepfake.png";
import webmining from "../assets/webmining.jpeg";
import livedetect from "../assets/Live Detection.jpg";
import College_Chatbot from "../assets/College_Chatbot.png";
import pdftranslator from "../assets/pdf_translator.png";
import portfolio from "../assets/portfolio.png";



// ===== NAVIGATION =====
export const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "work", title: "Projects" },
  { id: "contact", title: "Contact" },


];

// ===== SERVICES =====
const services = [
  { title: "Aspiring Software Developer", icon: web },
  { title: "AI & ML Enthusiast", icon: mobile },
  { title: "Game Development", icon: backend },
  { title: "Tech Explorer", icon: creator },
];

// ===== TECHNOLOGIES =====
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "AWS", icon: aws },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "C++", icon: cplus }

];

// ===== PROJECTS =====
const projects = [
  {
    name: "AI Deepfake Detection System",
    description:
      "End-to-end deep learning solution using EfficientNet-B0 to detect AI generated images and videos with real-time confidence-based predictions.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "deep-learning", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: deepfake,
    source_code_link:
      "https://github.com/Thanushaa22/AI-Based-Deepfake-Detection",
  },
  {
    name: "Web Mining & Terrorism Analysis",
    description:
      "Automated pipeline to extract, clean and structure large-scale web data and convert raw content into analytics-ready datasets.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "data-mining", color: "white-text-gradient" },
      { name: "analytics", color: "green-text-gradient" },
    ],
    image: webmining,
    source_code_link:
      "https://github.com/Thanushaa22/web-data-mining-terrorism",
  },
  {
    name: "Live-Detection App",
    description:
      "Real-time safety detection system using Deep Learning and NLP to monitor live video and audio for identifying potential threats.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: livedetect,
    source_code_link:
      "https://github.com/Thanushaa22/Live-Detection",
  },
  {
  name: "AI-college-chatbot",
  description:
    "An intelligent college assistant chatbot built with Flask. Ask questions about admissions, courses, fees, hostels, and more!",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "powershell", color: "green-text-gradient" },
    { name: "mysql", color: "pink-text-gradient" },
  ],
  image: College_Chatbot,
  source_code_link: "https://github.com/Thanushaa22/AI-college-chatbot",
},
{
  name: "PDF Translator with Text-to-Speech",
  description:
    "A Python desktop application that extracts text from PDF files, translates it into multiple languages, and reads it aloud using a Text-to-Speech engine. Built with a simple GUI for easy accessibility.",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "nlp", color: "green-text-gradient" },
    { name: "tts", color: "pink-text-gradient" },
    { name: "tkinter", color: "white-text-gradient" },
  ],
  image: pdftranslator,
  source_code_link: "https://github.com/Thanushaa22/PDF-Translator-with-text-to-speech",
},
{
  name: "Personal Developer Portfolio",
  description:
    "A modern, responsive portfolio website built to showcase my projects, skills, and experience. Features smooth animations, 3D visuals, and a recruiter-friendly design focused on performance and usability.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "tailwind", color: "white-text-gradient" },
    { name: "framer-motion", color: "pink-text-gradient" },
    { name: "threejs", color: "green-text-gradient" },
  ],
  image: portfolio,
  source_code_link: "https://github.com/Thanushaa22/thanusha-portfolio",
},



];

export { services, technologies, projects };
