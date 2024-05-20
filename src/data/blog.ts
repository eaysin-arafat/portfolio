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
    id: 1,
    category: "HTML",
    date: "Nov 22, 2023",
    title: "Markup Language and HTML",
    cover_image: "https://via.placeholder.com/600x400",
    blogUrl: "https://eaysin-arafat.hashnode.dev/markup-language-and-html",
  },
];
