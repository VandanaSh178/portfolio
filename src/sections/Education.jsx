import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "National Institute of Technology, Manipur",
    duration: "2023 – Present",
    details: [
      "CGPA: 8.33/10",
      "Relevant Courses: Data Structures & Algorithms, Computer Architecture, Digital Electronics, Web Development, Data Science",
      "Active in coding competitions and hackathons",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-black-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {edu.degree}
              </h3>
              <p className="text-blue-50 font-medium mb-2">{edu.institution}</p>
              <p className="text-white-50 italic mb-4">{edu.duration}</p>
              <ul className="list-disc list-inside text-white-50 space-y-2">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
