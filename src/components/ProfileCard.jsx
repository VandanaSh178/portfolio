import { motion } from "framer-motion";

const ProfileCard = ({ profile }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex flex-col h-full
                 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
      variants={itemVariants}
    >
      {/* Card Header */}
      <div className="flex items-center gap-4 mb-4">
        <img src={profile.logo} alt={`${profile.name} Logo`} className="w-10 h-10" />
        <div>
          <h3 className="text-xl font-bold text-white">{profile.name}</h3>
          <p className="text-sm text-gray-400">{profile.username}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex-grow space-y-2 mb-6">
        {Object.entries(profile.stats).map(([key, value]) => (
          <div key={key} className="flex justify-between text-gray-300">
            <span>{key}:</span>
            <span className="font-semibold text-white">{value}</span>
          </div>
        ))}
      </div>

      {/* View Profile Button */}
      <a
        href={profile.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto block text-center w-full px-4 py-2 bg-gray-700/50 text-white font-semibold rounded-lg
                   border border-gray-600 hover:bg-blue-500 hover:border-blue-500 transition-colors duration-300"
      >
        View Profile
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </motion.div>
  );
};

export default ProfileCard;