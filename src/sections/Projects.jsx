import { motion } from "framer-motion";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="projects" className="py-24">
      {/* 👇 CHANGE THIS LINE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in full-stack development, modern frameworks, and innovative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://github.com/VandanaSh178"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 
                       hover:bg-gray-700 transition-colors duration-300"
          >
            View All Projects on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;