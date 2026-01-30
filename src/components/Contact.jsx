import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex flex-col bg-black-100 p-8 rounded-2xl"
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact</h3>

      <p className="text-secondary mt-4 max-w-xl">
        Feel free to connect with me through any of the platforms below.
        I’m open to collaborations, internships and project discussions.
      </p>

      <div className="flex gap-8 mt-8 text-white">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/thanusha2233/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-400 transition"
        >
          <FaLinkedin size={28} />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Thanushaa22"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-400 transition"
        >
          <FaGithub size={28} />
          <span>GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:thanushamanjunath2233@gmail.com"
          className="flex items-center gap-2 hover:text-purple-400 transition"
        >
          <MdEmail size={28} />
          <span>Email</span>
        </a>

      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
