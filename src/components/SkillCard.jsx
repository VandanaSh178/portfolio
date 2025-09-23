import { motion } from "framer-motion";

const SkillCard = ({ title, skills }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full"
      variants={itemVariants}
    >
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700/50 transition-colors">
            <span className="text-blue-400">{skill.icon}</span>
            <span className="text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;