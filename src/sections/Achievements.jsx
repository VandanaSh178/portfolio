import { motion } from "framer-motion";
import { achievementsStats, detailedAchievements } from "../constants";
import AchievementCard from "../components/AchievementCard";

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Achievements & Recognition</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            A collection of my notable accomplishments, demonstrating strong performance in programming, hackathons, and academics.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievementsStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {detailedAchievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;