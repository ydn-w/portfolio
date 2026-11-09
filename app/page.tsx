import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <About />
        <Works />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
