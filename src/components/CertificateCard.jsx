import { motion } from "framer-motion";

const CertificateCard = ({ certificate }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full flex flex-col"
      variants={itemVariants}
    >
      <h3 className="text-xl font-bold text-white mb-1">{certificate.title}</h3>
      <p className="text-md font-semibold text-blue-400 mb-3">{certificate.issuer}</p>
      <p className="text-sm text-gray-400 mb-6 flex-grow">Issued: {certificate.date}</p>

      <a
        href={certificate.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto block text-center w-full px-4 py-2 bg-gray-700/50 text-white font-semibold rounded-lg
                   border border-gray-600 hover:bg-blue-500 hover:border-blue-500 transition-colors duration-300"
      >
        Verify Certificate
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </motion.div>
  );
};

export default CertificateCard;