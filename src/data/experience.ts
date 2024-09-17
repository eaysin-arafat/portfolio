type Experience = {
  id: number;
  date: string;
  role: string;
  company: string;
  location: string;
  description: string;
  website?: string;
  icon?: string;
}[];

export const experience: Experience = [
  {
    id: 2,
    date: "January 2023 - February 2024",
    role: "React Developer",
    website: "https://www.excelbd.com/",
    company: "Excel Technologies Ltd.",
    location: "House #13, Road #07 Block #F, Banani Dhaka-1213",
    description:
      "I've engaged in frontend development across multiple projects, employing React.js as the primary framework. Within these endeavors, I've played a pivotal role in contributing to various website projects, leveraging my expertise in React.js to enhance functionality and user experience. My focus remains steadfast on delivering high-quality UI/UX designs while optimizing performance for optimal user satisfaction.",
  },
  {
    id: 3,
    date: "March 2024 - August 2024",
    role: "React Developer",
    company: "Blackrock IT Solutions (Contract)",
    website: "https://www.blackrockitsolutions.com/",
    location: "Mesa, Arizona",
    description:
      "Contributing to the frontend development team, specializing in React.js development. Involved in building robust and user-centric web applications, focusing on creating exceptional user experiences through clean code and optimized performance.",
  },
];
