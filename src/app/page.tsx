import About from "@/components/about";
import Blog from "@/components/blog/blog";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Footer from "@/components/home/footer";
import HomePage from "@/components/home/home";
import Navbar from "@/components/home/navbar";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HomePage />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Blog />

      <Footer />
    </main>
  );
}
