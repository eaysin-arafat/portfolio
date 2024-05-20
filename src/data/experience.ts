type Experience = {
  id: number;
  date: string;
  role: string;
  company: string;
  location: string;
  description: string;
  icon?: string;
}[];

export const experience: Experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance Corner",
    location: "Natun Bazar, Sadar, Mymensingh",
    date: "October 2022 - April 2023",
    description:
      "I utilized my expertise in front-end development to contribute significantly to multiple websites. These websites were constructed using React JS, a framework renowned for its versatility and efficiency. My role involved implementing various features and ensuring a seamless user experience across these platforms.",
  },
  {
    id: 2,
    date: "May 2023 - March 2024",
    role: "React Developer",
    company: "Excel Technologies Ltd.",
    location: "House #13, Road #07 Block #F, Banani Dhaka-1213",
    description:
      "I've engaged in frontend development across multiple projects, employing React.js as the primary framework. Within these endeavors, I've played a pivotal role in contributing to various website projects, leveraging my expertise in React.js to enhance functionality and user experience. My focus remains steadfast on delivering high-quality UI/UX designs while optimizing performance for optimal user satisfaction.",
  },
];
