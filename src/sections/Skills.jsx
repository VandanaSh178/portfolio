import { motion } from "framer-motion";
import { skillsData, additionalTech, coursework, skillStats } from "../constants/index.jsx";
import SkillCard from "../components/SkillCard";

// Green dot for coursework list
const GreenDot = () => <div className="w-2 h-2 bg-green-400 rounded-full"></div>;

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Skills</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, index) => (
            <SkillCard key={index} title={category.title} skills={category.skills} />
          ))}
        </motion.div>

        {/* --- NEW: Additional Tech & Coursework Section --- */}
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Additional Technologies Card */}
            <motion.div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700" variants={itemVariants}>
                <h3 className="text-xl font-bold text-white mb-4">Additional Technologies</h3>
                <div className="flex flex-wrap gap-3">
                    {additionalTech.map((tech) => (
                        <span key={tech.name} className="flex items-center gap-2 bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                            {tech.icon} {tech.name}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Relevant Coursework Card */}
            <motion.div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700" variants={itemVariants}>
                <h3 className="text-xl font-bold text-white mb-4">Relevant Coursework</h3>
                <ul className="space-y-3">
                    {coursework.map((course) => (
                        <li key={course} className="flex items-center gap-3 text-gray-300">
                           <GreenDot /> <span>{course}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>

        {/* --- NEW: Stats Bar --- */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillStats.map((stat) => (
            <motion.div key={stat.label} className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700" variants={itemVariants}>
              <p className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;