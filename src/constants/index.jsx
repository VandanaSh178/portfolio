// src/constants/index.jsx
import { FaReact, FaNodeJs, FaDocker, FaPython, FaCloud, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiPrisma, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiRabbitmq, SiApachekafka, SiVercel } from "react-icons/si";

// Navigation Links
export const navLinks = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Achievements", link: "#achievements"},
  { name: "Contact", link: "#contact" },
];

// Hero Section Word Slider
export const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
];

// Skills Section
export const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython size={32} /> },
      { name: "Java", icon: <FaJava size={32} /> },
      { name: "JavaScript", icon: <SiJavascript size={32} /> },
      { name: "TypeScript", icon: <SiTypescript size={32} /> },
      { name: "HTML5", icon: <SiHtml5 size={32} /> },
      { name: "CSS3", icon: <SiCss3 size={32} /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact size={32} /> },
      { name: "Next.js", icon: <SiNextdotjs size={32} /> },
      { name: "Node.js", icon: <FaNodeJs size={32} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
      { name: "Prisma", icon: <SiPrisma size={32} /> },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={32} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
      { name: "Docker", icon: <FaDocker size={32} /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
        { name: "Google Cloud", icon: <FaCloud size={32} /> },
        { name: "Vercel", icon: <SiVercel size={32} /> },
    ],
  }
];

export const additionalTech = [
  { name: "OpenAI API Integration" },
  { name: "RabbitMQ", icon: <SiRabbitmq size={20} /> },
  { name: "Kafka", icon: <SiApachekafka size={20} /> },
  { name: "Cloudinary" },
  { name: "Clerk" },
  { name: "Webpack" },
];

export const coursework = [
  "Data Structures & Algorithms",
  "Computer Networks",
  "Database Management Systems",
  "Software Engineering",
  "Object-Oriented Programming",
];

export const skillStats = [
    { value: "15+", label: "Programming Languages & Frameworks" },
    { value: "10+", label: "Database Technologies" },
    { value: "5+", label: "Cloud Technologies" },
    { value: "8", label: "months of Experience" },
];

// Experience Section
export const expCards = [
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    logoPath: "/path/to/gssoc-logo.svg", // 👉 Update with the correct logo path
    date: "July 2025 - Present",
    location: "Remote",
    status: "In Progress",
    responsibilities: [
      "Collaborated with a global community of developers on various open-source projects.",
      "Resolved existing issues, fixed bugs, and improved code documentation and test coverage.",
      "Successfully implemented new features under the guidance of experienced project mentors.",
      "Engaged in code reviews and utilized Git/GitHub for version control and team collaboration.",
    ],
    techStack: [ "Git", "GitHub", "JavaScript", "React", "Node.js", "Python" ], // 👉 Adjust tech stack as needed
  },
];

// Projects Section
export const projects = [
  {
    title: "QuickShow – Movie Ticket Booking Platform",
    featured: true,
    description: "Full stack MERN application allowing users to signup, browse movies, select seats, and book tickets. Features multi-session authentication with Clerk, admin dashboard for movie management, automated emails via Inngest, and seat reservation handling for failed payments.",
    keyFeatures: [
      "QuickShow is a full stack movie ticket booking platform where users can signup/login with multi-session support via email, social, or phone. Users can browse movies, select showtimes, and book their preferred seats, with secure payment handling that temporarily reserves seats on failed transactions. The platform also sends automated emails for booking confirmations, reminders, and new movie alerts using Inngest. The admin dashboard allows for managing movies and bookings, and the entire application is built with the MERN Stack with a responsive and user-friendly interface.",
    ],
    technologies:  [
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Clerk (Authentication & Multi-session)",
  "Inngest (Background Jobs & Emails)",
  "Payment Gateway Integration",
  "RESTful APIs",
  "Responsive UI"
],
    liveDemoLink: "https://quick-show-client10.vercel.app/",
    sourceCodeLink: "https://github.com/VandanaSh178/QuickShow-Deploy1",
  },
];

// Coding Profiles Section
export const codingProfiles = [
  {
    name: "LeetCode",
    username: "vandana17sh",
    link: "https://leetcode.com/u/vandana17sh//",
    logo: "images/leetcode.png",
    stats: { "Problems Solved": "1000+", "Rank": "Knight", "Rating": "1938" },
  },
  {
    name: "CodeChef",
    username: "gaze_grace_42",
    link: "https://www.codechef.com/users/gaze_grace_42",
    logo: "images/codechef-logo-startuptalky.jpg",
    stats: { "Global Rank": "15753", "Stars": "1-Star", "Rating": "1780" },
  },
  {
    name: "GeeksforGeeks",
    username: "striver__178",
    link: "https://www.geeksforgeeks.org/user/striver__178/",
    logo: "images/gfg_logo.png", // 👉 Add the GFG logo to /public/logos/
    stats: { "Problems Solved": "250+", "Coding Score": "750+", "Rank": "33" },
  },
  {
    name: "Codeforces",
    username: "vandana_sharma",
    link: "https://codeforces.com/profile/vandana_sharma",
    logo: "images/codeforces-Logo-Vector.svg-.png",
    stats: { "Problems Solved": "50+", "Rank": "Newbie", "Rating": "939" },
  },
  {
    name: "HackerRank",
    username: "23105021_ece",
    link: "https://www.hackerrank.com/profile/23105021_ece",
    logo: "images/HackerRank-logo.png", // 👉 Add the HackerRank logo to /public/logos/
    stats: { "Badges Earned": "25+", "Stars": "5-Star (Problem Solving)", "Points": "2000+" },
  },
];

// Achievements Section
export const achievementsStats = [
  { value: "5+", label: "Hackathon Participated" },
  { value: "1415", label: "LeetCode Rating" },
  { value: "250+", label: "DSA Problems" },
  { value: "8.33+", label: "CGPA" },
];

export const detailedAchievements = [
  {
    category: "Competition",
    title: "Smart India Hackathon",
    subtitle: "Internal Round - Rank 2",
    description: "Secured 2nd position in the internal round, working on the KrishiSeva project.",
    year: "2024",
    featured: true,
  },
  {
    category: "Programming",
    title: "LeetCode Knight Badge",
    description: "Achieved Knight Badge (Top 3.65%) with a rating of 1938 and solved 1000+ questions.",
    year: "2023-Present",
    featured: true,
  },
];

// Contact Section / Social Links
export const socialImgs = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/vandana-sharma-2baba6205/", imgPath: "/images/linkedin.png" },
  { name: "GitHub", link: "https://github.com/VandanaSh178", imgPath: "/images/github.png" },
  { name: "Email", link: "mailto:23105021.ece@nitmanipur.ac.in", imgPath: "/images/email.webp" },
  { name: "WhatsApp", link: "https://wa.me/918102970894", imgPath: "/images/OIP (2).jpeg" },
];



// Other constants that might be used by other components
export const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
];

export const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solver",
    desc: "Strong foundation in DSA and analytical problem-solving for scalable solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Team Collaboration",
    desc: "Actively contributed to hackathons and team projects with clear communication.",
  },
];

export const certificates = [
  {
    title: "Round 1 - Online MCQ Assessment + Coding",
    issuer: "Adobe India Hackathon",
    date: "August 2025",
    link: "https://link-to-your-certificate.com", // 👈 Update with verification link
  },
  {
    title: "React.js Unfiltered - AIALCHEMIST",
    issuer: "Unstop",
    date: "July 2025",
    link: "https://unstop.com/certificate-preview/9c60ca95-b782-4cfa-97bb-db51f4fe3d0b", // 👈 Update with verification link
  },
  {
    title: "Call2Code",
    issuer: "Unstop",
    date: "July 2025",
    link: "https://unstop.com/certificate-preview/f795f561-d5c8-4ee2-b2ca-e0aa91a1158c", // 👈 Update with verification link
  },
  {
    title: "CodingQuest - DSA Problem Solving Round",
    issuer: "Unstop",
    date: "July 2025",
    link: "https://unstop.com/certificate-preview/52751990-af2d-47b3-972d-296f3d88f220", // 👈 Update with verification link
  },
  {
    title: "First-Ever Devantra Weekly Coding Contest",
    issuer: "CodeRush Weekly",
    date: "June 2025",
    link: "https://unstop.com/certificate-preview/e186ec54-b38f-4708-a862-70e71f7e27df", // 👈 Update with verification link
  },
  {
    title: "Treasure Hunt",
    issuer: "Samsung Galaxy AI All Treasure Hunt",
    date: "June 2025",
    link: "https://unstop.com/certificate-preview/06ea271d-67a6-4186-87bd-8b83e07e99f4", // 👈 Update with verification link
  },
  {
    title: "Coders Arena 2025 - The Battle of Algorithms",
    issuer: "Developers Club Events @2025",
    date: "June 2025",
    link: "https://unstop.com/certificate-preview/6966fca6-6f5b-4386-99ad-2528e6d7eba7", // 👈 Update with verification link
  },
  {
    title: "AlgoQuiz - DSA MCQ Faceoff",
    issuer: "Coders Arena 2025",
    date: "June 2025",
    link: "https://unstop.com/certificate-preview/68e7f3f6-8954-4b64-9e6a-06e7f6853726", // 👈 Update with verification link
  },
];