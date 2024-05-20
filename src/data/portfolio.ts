export type Portfolio = {
  id: number;
  title: string;
  subtitle: string;
  client: string;
  category: "REACTJS" | "NEXTJS" | "LIBRARY";
  date: string;
  description: string[];
  image: { url: string; title: string }[];
  technologies: string[];
  githubLink: string;
  liveLink: string;
  externalProjectDetailLink?: string;
}[];

export const portfolio: Portfolio = [
  {
    id: 0,
    title: "SmartCare Pro",
    subtitle:
      "Features to manage medical treatments, patient records, and doctor interactions",
    description: [
      "Contributed to the development of a government-sponsored healthcare ecosystem project within a collaborative team environment.",
      "Played a key role in designing and implementing features to manage medical treatments, patient records, and doctor interactions.",
      "Facilitated the integration of diverse medical facilities under different departments.",
      "Collaborated effectively with team members and stakeholders to meet project objectives and comply with government regulations.",
    ],
    client: "Excel Technologies Ltd.",
    date: "15/12/2023",
    category: "REACTJS",
    image: [
      // { url: "/portfolio/healthcare/01.png", title: "beach" },
      // { url: "/portfolio/healthcare/02.png", title: "boat" },
      // { url: "/portfolio/healthcare/03.png", title: "forest" },
      // { url: "/portfolio/healthcare/04.png", title: "city" },
      // { url: "/portfolio/healthcare/05.png", title: "italy" },
      // {
      //   url: "/portfolio/healthcare/06.png",
      //   title: "screenshot 6",
      // },
      // {
      //   url: "/portfolio/healthcare/07.png",
      //   title: "screenshot 7",
      // },
      // {
      //   url: "/portfolio/healthcare/08.png",
      //   title: "screenshot 8",
      // },
      // {
      //   url: "/portfolio/healthcare/09.png",
      //   title: "screenshot 9",
      // },
      // {
      //   url: "/portfolio/healthcare/10.png",
      //   title: "screenshot 10",
      // },
      // {
      //   url: "/portfolio/healthcare/11.png",
      //   title: "screenshot 11",
      // },
      // {
      //   url: "/portfolio/healthcare/12.png",
      //   title: "screenshot 12",
      // },
      // {
      //   url: "/portfolio/healthcare/13.png",
      //   title: "screenshot 13",
      // },
      // {
      //   url: "/portfolio/healthcare/14.png",
      //   title: "screenshot 14",
      // },
      // {
      //   url: "/portfolio/healthcare/15.png",
      //   title: "screenshot 15",
      // },
      // {
      //   url: "/portfolio/healthcare/16.png",
      //   title: "screenshot 16",
      // },
      // {
      //   url: "/portfolio/healthcare/17.png",
      //   title: "screenshot 17",
      // },
      // {
      //   url: "/portfolio/healthcare/18.png",
      //   title: "screenshot 18",
      // },
      // {
      //   url: "/portfolio/healthcare/19.png",
      //   title: "screenshot 19",
      // },
    ],
    technologies: [
      "TypeScript",
      "React Js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind Css",
    ],
    githubLink: "",
    liveLink: "",
    externalProjectDetailLink:
      "https://youtube.com/playlist?list=PLKI8pcPmyPbeK6LZBqhcXy4xHgIgxrfxF&si=GC3HC8EG1F-W145u",
  },
  {
    id: 1,
    title: "Help Desk",
    subtitle:
      "The process of reporting, managing, and resolving system issues efficiently",
    client: "Excel Technologies Ltd.",
    date: "March 15, 2024",
    category: "REACTJS",
    description: [
      "Helpdesk is a robust system issue tracking platform designed to streamline the process of reporting, managing, and resolving system issues efficiently. With Helpdesk, users can easily report system issues they encounter, while support staff can effectively track, prioritize, and resolve these issues in a timely manner. The platform provides a user-friendly interface for both users and support staff, ensuring seamless communication and collaboration throughout the issue resolution process.",
      "Developed a problem management system adaptable for various projects or institutions Implemented role-based relationships to facilitate efficient problem resolution, ensuring the right individuals have appropriate access levels. Helpdesk features a secure user authentication system, allowing users to register, log in, and manage their accounts securely. This ensures that only authorized users can access the platform and report system issues. Users can create tickets to report system issues effortlessly. The ticket creation process is user-friendly, allowing users to provide detailed descriptions, screenshots, and other relevant information to help support staff understand and address the reported issues effectively.",
      "Support staff can manage tickets efficiently through the intuitive support dashboard. They can view, assign, prioritize, and track tickets based on their status and severity, ensuring that critical issues are addressed promptly.",
      "Support staff can communicate with users, provide updates, and resolve reported issues directly within the platform. This streamlines the issue resolution process and ensures clear communication between users and support staff throughout the entire process.",
      "Admins have access to administrative features, allowing them to manage users, configure system settings, and monitor system performance. This ensures that the platform operates smoothly and efficiently.",
    ],
    image: [
      // {
      //   url: "/portfolio/help-desk/01.png",
      //   title: "screenshot 1",
      // },
      // {
      //   url: "/portfolio/help-desk/02.png",
      //   title: "screenshot 2",
      // },
      // {
      //   url: "/portfolio/help-desk/03.png",
      //   title: "screenshot 3",
      // },
      // {
      //   url: "/portfolio/help-desk/04.png",
      //   title: "screenshot 4",
      // },
      // {
      //   url: "/portfolio/help-desk/05.png",
      //   title: "screenshot 5",
      // },
      // {
      //   url: "/portfolio/help-desk/06.png",
      //   title: "screenshot 6",
      // },
      // {
      //   url: "/portfolio/help-desk/07.png",
      //   title: "screenshot 7",
      // },
      // {
      //   url: "/portfolio/help-desk/08.png",
      //   title: "screenshot 8",
      // },
      // {
      //   url: "/portfolio/help-desk/09.png",
      //   title: "screenshot 20",
      // },
    ],
    technologies: [
      "Typescript",
      "React Js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind Css",
    ],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 2,
    title: "Ecommarce Platform",
    subtitle:
      "an online destination where buyers shop for goods and sellers offer products and services.",
    client: "Personal Project",
    category: "REACTJS",
    date: "May 14, 2023",
    description: [
      "I have led the development of the eCommerce platform that utilizes JavaScript, React.js, Redux Toolkit and Tailwind CSS.",
      "Adapted functionalities of easy product browsing, cart management and secure checkout systems.",
      "Utilized the Redux Toolkit for state management to ensure proper data flow and the system stability.",
      "Using Tailwind CSS to design an interface with a modern, reactive and responsive look and feel.",
      "Employed JavaScript for user interactions to ensure that the entire platform is dynamic and user-friendly.",
    ],
    image: [
      {
        url: "/portfolio/comfy_store/01.png",
        title: "screenshot 1",
      },
      {
        url: "/portfolio/comfy_store/02.png",
        title: "screenshot 2",
      },
      {
        url: "/portfolio/comfy_store/03.png",
        title: "screenshot 3",
      },
      {
        url: "/portfolio/comfy_store/04.png",
        title: "screenshot 4",
      },
      {
        url: "/portfolio/comfy_store/05.png",
        title: "screenshot 5",
      },
      {
        url: "/portfolio/comfy_store/06.png",
        title: "screenshot 6",
      },
      {
        url: "/portfolio/comfy_store/07.png",
        title: "screenshot 7",
      },
      {
        url: "/portfolio/comfy_store/08.png",
        title: "screenshot 8",
      },
      {
        url: "/portfolio/comfy_store/09.png",
        title: "screenshot 9",
      },
    ],
    technologies: ["JavaScript", "React JS", "Redux Toolkit", "Tailwind Css"],
    githubLink: "https://github.com/eaysin-arafat/ecommarce_client.git",
    liveLink: "https://ecommarce-client.vercel.app/",
  },
  {
    id: 3,
    title: "js-utility",
    subtitle:
      "A modern JavaScript utility library delivering modularity, performance & extras",
    client: "Personal Project",
    date: "Updating",
    category: "LIBRARY",
    description: [
      "A modern JavaScript utility library delivering modularity, performance & extras",
      "JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.",
      "It can be broken down into several main areas: Utilities, Function, String, Array, Collection, Object, Sequence.",
      "The library is composed of distinct, reusable modules that can be imported individually, reducing the overall bundle size and improving load times.",
      "Optimized for speed, the library ensures that your applications run efficiently, even with complex operations.",
      "Leveraging the principles of functional programming, the library promotes pure functions, immutability, and higher-order functions, leading to cleaner and more predictable code.",
      "Some of the key utility functions provided by the library include: Array manipulation, Object handling, String operations",
    ],
    image: [],
    technologies: ["JavaScript"],
    githubLink: "https://github.com/eaysin-arafat/js-utility",
    liveLink: "https://addons.mozilla.org/addon/wordy-birdy-scramble-game/",
  },
  {
    id: 4,
    title: "File Drive",
    subtitle: "a comprehensive file management platform",
    client: "Personal Project",
    date: "08 April 2024",
    category: "NEXTJS",
    description: [
      "FileDrive is a comprehensive file management platform designed to streamline the process of storing, sharing, and managing files among individuals and organizations.",
      "With FileDrive, users can securely upload files of various types, including PDFs, images, PNGs, SVGs, and more.",
      "Users can create organizations to manage files within specific groups or teams and grant role-based access to files.",
      "The platform offers advanced features such as category-based file organization and authentication powered by Clerk. FileDrive also integrates with Convex, a third-party service, for backend operations.",
    ],
    image: [
      {
        url: "/portfolio/file_drive/01.png",
        title: "screenshot 1",
      },
      {
        url: "/portfolio/file_drive/02.png",
        title: "screenshot 2",
      },
      {
        url: "/portfolio/file_drive/03.png",
        title: "screenshot 3",
      },
      {
        url: "/portfolio/file_drive/04.png",
        title: "screenshot 4",
      },
      {
        url: "/portfolio/file_drive/05.png",
        title: "screenshot 5",
      },
      {
        url: "/portfolio/file_drive/06.png",
        title: "screenshot 6",
      },
      {
        url: "/portfolio/file_drive/07.png",
        title: "screenshot 8",
      },
      {
        url: "/portfolio/file_drive/08.png",
        title: "screenshot 9",
      },
      {
        url: "/portfolio/file_drive/09.png",
        title: "screenshot 9",
      },
    ],
    technologies: [
      "JavaScript",
      "React Js",
      "Next Js",
      "Clerk(Authentication)",
      "Convex(Backend)",
      "Tailwind Css",
    ],
    githubLink: "https://github.com/eaysin-arafat/file-drive.git",
    liveLink: "",
  },
];
