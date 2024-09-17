export interface Blog {
  id: number;
  category: string;
  title: string;
  cover_image: string;
  date: string;
  blogUrl: string;
}

export const blogs: Blog[] = [
  {
    id: 3,
    category: "React Performance Optimization",
    date: "Sep 18, 2024",
    title: "Optimizing Performance in a React Application: A Case Study",
    cover_image: "/blogs/03.png",
    blogUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXaW6BKh9GjEUT_QJ8Q5S8KES90ZoiQhPOA&s",
  },
  {
    id: 2,
    category: "Performance Optimization",
    date: "Sep 10, 2024",
    title:
      "Case Study: Building react-form-interactions - A High-Performance React Library for Form State and Validation",
    cover_image: "",
    blogUrl:
      "https://eaysin-arafat.hashnode.dev/case-study-building-react-form-interactions-a-high-performance-react-library-for-form-state-and-validation",
  },
  {
    id: 1,
    category: "HTML",
    date: "Nov 22, 2023",
    title: "Markup Language and HTML",
    cover_image: "/blogs/html.png",
    blogUrl: "https://eaysin-arafat.hashnode.dev/markup-language-and-html",
  },
];
