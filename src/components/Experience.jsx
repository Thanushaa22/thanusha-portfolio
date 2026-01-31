import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Experience = () => {
  return (
    <div>
      <h2 className="text-white text-3xl font-bold text-center mb-12">
        Experience
      </h2>

      <div className="space-y-8 max-w-3xl mx-auto">

        {/* Data Analyst Intern */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-tertiary p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-purple-400">
            Data Analyst Intern
          </h3>
          <p className="text-gray-300">iStudio — Bengaluru (Remote)</p>
          <p className="text-gray-400 text-sm">Jun 2025 – Sep 2025</p>
          <ul className="list-disc ml-5 mt-3 text-gray-400 text-sm space-y-2">
            <li>Analyzed large-scale datasets using Python & SQL, improving decision-making by 20%</li>
            <li>Built dashboards & predictive analytics workflows increasing engagement by 15%</li>
            <li>Optimized data pipelines reducing retrieval time by 30%</li>
          </ul>
        </motion.div>

        {/* Web Developer Intern */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-tertiary p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-purple-400">
            Web Developer Intern
          </h3>
          <p className="text-gray-300">Orion Web Service Pvt Ltd — Mysuru (Onsite)</p>
          <p className="text-gray-400 text-sm">Mar 2024 – Apr 2024</p>
          <ul className="list-disc ml-5 mt-3 text-gray-400 text-sm space-y-2">
            <li>Developed ML-powered application features improving accuracy by 18%</li>
            <li>Enhanced backend performance improving responsiveness by 25%</li>
            <li>Collaborated via code reviews and testing improving delivery efficiency by 20%</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
