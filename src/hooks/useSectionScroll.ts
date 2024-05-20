import { useEffect, useState } from "react";

const useScrollSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections =
        document.querySelectorAll<HTMLElement>(".section-content");
      const navLi = document.querySelectorAll<HTMLLIElement>("div nav ul li");

      let current: string = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id") || "";
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (currentSection === "home") {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  }, [currentSection]);

  return { scrolled, currentSection };
};

export default useScrollSection;
