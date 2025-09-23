import { motion } from "framer-motion";

// Checkmark icon for key features
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full flex flex-col"
      variants={itemVariants}
    >
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        {project.featured && (
          <span className="bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

      {/* Key Features */}
      <div className="mb-6">
        <h4 className="text-md font-semibold text-white mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {project.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-400">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-md font-semibold text-white mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-auto">
        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300">
          Live Demo
        </a>
        <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-300">
          Source Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;