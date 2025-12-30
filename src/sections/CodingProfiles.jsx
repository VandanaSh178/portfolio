import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";

// Platforms and logos
const platforms = [
  {
    name: "Codeforces",
    username: "vandana_sharma",
    logo: "images/codeforces-Logo-Vector.svg-.png",
    link: "https://codeforces.com/profile/vandana_sharma",
  },
  {
    name: "LeetCode",
    username: "vandana17sh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    link: "https://leetcode.com/u/vandana17sh/",
  },
  {
    name: "CodeChef",
    username: "gaze_grace_42",
    logo: "/images/codechef-logo-startuptalky.jpg",
    link: "https://www.codechef.com/users/gaze_grace_42",
  },
  {
    name: "GeeksforGeeks",
    username: "striver__178",
    logo: "/images/gfg_logo.png",
    link: "https://www.geeksforgeeks.org/profile/striver__178",
  },
];

// Fetch Codeforces live stats
const fetchCodeforces = async (handle) => {
  try {
    const infoRes = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    const infoData = await infoRes.json();
    const subRes = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`);
    const subData = await subRes.json();

    if (infoData.status === "OK" && subData.status === "OK") {
      const user = infoData.result[0];
      const solvedProblems = new Set();
      subData.result.forEach(sub => {
        if (sub.verdict === "OK") solvedProblems.add(sub.problem.name);
      });

      let badge = "Newbie";
      if (user.rating >= 2400) badge = "Grandmaster";
      else if (user.rating >= 2000) badge = "Master";
      else if (user.rating >= 1600) badge = "Candidate Master";
      else if (user.rating >= 1400) badge = "Expert";
      else if (user.rating >= 1200) badge = "Specialist";

      return {
        Rating: user.rating,
        Rank: user.rank,
        "Problems Solved": solvedProblems.size,
        Badge: badge,
      };
    }
  } catch (err) {
    console.error("Codeforces API error:", err);
  }
  return {};
};

// Static fallback for other platforms
const fetchFallback = (platform) => {
  const fallbackStats = {
    LeetCode: { "Problems Solved": 366, Badge: "5", "Acceptance Rate": "73.32%","Top": "32.9%" },
    CodeChef: { Rating: 1475, "Problems Solved": 207, Star: "2", "Global Rank": 43307 },
    GeeksforGeeks: { "Problems Solved": 311, "Coding Score": 1068, "Institute Rank": 21 },
  };
  return fallbackStats[platform] || {};
};

const CodingProfiles = () => {
  const [profilesData, setProfilesData] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const data = await Promise.all(
        platforms.map(async (platform) => {
          let stats = {};
          if (platform.name === "Codeforces") stats = await fetchCodeforces(platform.username);
          else stats = fetchFallback(platform.name);

          return { ...platform, stats };
        })
      );
      setProfilesData(data);
    };

    fetchAll();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="profiles" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Coding Profiles</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my journey across competitive programming platforms.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profilesData.map((profile) => (
            <ProfileCard key={profile.username + profile.name} profile={profile} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
