import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Education = () => {
  return (
    <div>
      <h2 className="text-white text-3xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="space-y-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-tertiary p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-purple-400">
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-gray-300">Presidency University, Bengaluru</p>
          <p className="text-gray-400 text-sm">Sep 2024 – Jun 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-tertiary p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-purple-400">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-gray-300">University of Mysore, Mysuru</p>
          <p className="text-gray-400 text-sm">Oct 2021 – Jun 2024</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
