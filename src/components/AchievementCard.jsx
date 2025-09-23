import { motion } from "framer-motion";

// Simple SVG icon for the card header
const TrophyIcon = () => (
  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
  </svg>
);

const AchievementCard = ({ achievement }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full
                 transition-all duration-300 hover:border-blue-400 hover:scale-105"
      variants={itemVariants}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className="bg-gray-700 p-2 rounded-full"><TrophyIcon /></span>
          <span className="text-sm text-gray-400">{achievement.category}</span>
        </div>
        <span className="text-sm text-gray-500">{achievement.year}</span>
      </div>
      
      {achievement.featured && (
        <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Featured
        </span>
      )}

      <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
      {achievement.subtitle && <p className="text-md font-semibold text-blue-400 mb-3">{achievement.subtitle}</p>}
      <p className="text-gray-300 text-sm leading-relaxed">
        {achievement.description}
      </p>
    </motion.div>
  );
};

export default AchievementCard;