import { shortId } from "@/utils/generate-shortid";

export type LinkType = {
  id: string;
  title: string;
  url: string;
}[];

export const links: LinkType = [
  { id: shortId(), title: "Home", url: "home" },
  { id: shortId(), title: "About", url: "about" },
  { id: shortId(), title: "Experience", url: "experience" },
  { id: shortId(), title: "Projects", url: "projects" },
  { id: shortId(), title: "Contact Me", url: "contact" },
  { id: shortId(), title: "Blogs", url: "blogs" },
];
