import { motion } from "framer-motion";

// A small component for the statistic cards to keep the code clean
const StatCard = ({ value, label }) => (
  <motion.div
    className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700"
    whileHover={{ scale: 1.05, backgroundColor: "#1e3a8a" }} // blue-800 on hover
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <p className="text-4xl font-bold text-blue-400 mb-2">{value}</p>
    <p className="text-sm text-gray-400">{label}</p>
  </motion.div>
);

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animates children one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Professional Summary */}
        <motion.p
          className="text-lg text-center max-w-3xl mx-auto text-gray-300 leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Passionate software engineer with a strong foundation in computer science and hands-on experience in full-stack development and AI technologies.
        </motion.p>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <StatCard value="8.33+" label="CGPA" />
          <StatCard value="250+" label="DSA Problems Solved" />
          <StatCard value="1415+" label="LeetCode Rating" />
          <StatCard value="1⭐" label="CodeChef" />
        </motion.div>

        {/* --- NEW My Journey & Details Section --- */}
        <motion.div
          className="flex flex-col lg:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* My Journey Text */}
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm currently pursuing my Bachelor's degree in Electronics and Communication Engineering at NIT MANIPUR. With a CGPA of 8.33, I've maintained academic excellence while gaining practical experience through internships and personal projects.
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              My passion lies in building scalable web applications and exploring the intersection of AI and software development. I enjoy solving complex problems and have solved over 250+ DSA questions across various platforms.
            </p>
          </motion.div>
          
          {/* Education & Key Achievements Side-by-side */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="font-semibold text-lg text-blue-400">National Institute of Technology, Manipur</p>
                <p className="text-gray-400">Bachelor of Technology in ECE</p>
                <p className="text-gray-500">2023 - 2027</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3>
              <ul className="list-none space-y-3 text-gray-300">
                <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">Achieved 1⭐ rating on CodeChef and solved 250+ DSA problems on GeeksforGeeks and LeetCode.</li>
                <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">Actively participate in competitive programming contests, consistently improving problem-solving skills.</li>
                <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">Developed multiple full-stack and AI-based projects, including QuickShow, LMS, and E-commerce platforms</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://drive.google.com/file/d/1GsRNy4-aUbVsWhMICzNle7Vkffob9ZV-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-md 
                       transition-transform duration-300 hover:scale-105 hover:bg-blue-400 hover:text-white"
          >
            View My Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;