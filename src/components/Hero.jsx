import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 text-center md:text-left`}
      >

        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* PROFILE PHOTO — FIXED SIZE */}
          <img
            src={profile}
            alt="Thanusha"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_25px_rgba(145,94,255,0.35)] transition-all duration-500 hover:scale-105"




          />

          {/* TEXT */}
          <div>
            <h1 className="text-white font-bold text-[36px] sm:text-[46px] lg:text-[56px] leading-tight">
              Hi, I'm <span className="text-[#915EFF]">Thanusha M</span>
            </h1>

            <p className="mt-3 text-white-100 text-[16px] sm:text-[18px] leading-relaxed max-w-md">
              Aspiring Software Developer <br />
              Interested in building real-world applications
            </p>

            <a
              href="/Thanusha_Resume.pdf"
              download="Thanusha_M_Resume.pdf"
              className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Download Resume
            </a>

            <div className="flex gap-4 mt-4">
<div className="flex gap-4 mt-4">
  <a
    href="https://github.com/Thanushaa22"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-2xl hover:text-purple-400"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/thanusha2233/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-2xl hover:text-purple-400"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=thanushamanjunath2233@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-2xl hover:text-purple-400"
  >
    <FaEnvelope />
  </a>
</div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE SMALL 3D COMPUTER */}
        <div className="w-[450px] h-[400px] hidden md:block">
          <ComputersCanvas />
        </div>

      </div>

    </section>
  );
};

export default Hero;
