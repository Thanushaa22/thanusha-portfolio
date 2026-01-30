import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/thanusha2233/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Thanushaa22"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:thanushamanjunath2233@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail size={24} />
      </a>

    </footer>
  );
};

export default Footer;
