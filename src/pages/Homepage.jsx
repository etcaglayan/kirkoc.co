import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Layout from "../components/Layout/Layout";
import About from "../components/Sections/About";
import Testimonials from "../components/Sections/Testimonials";
import Clients from "../components/Sections/Clients";
import Herosection from "../components/Sections/Herosection";
import SectionHeading from "../components/Items/SectionHeading";
import Skills from "../components/Sections/Skills";
import Funfacts from "../components/Sections/Funfacts";
import Services from "../components/Sections/Services";
import Experiences from "../components/Sections/Experiences";
import Portfolios from "../components/Sections/Portfolios";
import Contact from "../components/Sections/Contact";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Element name="section-home">
        <Herosection />
      </Element>

      <Element name="section-about">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Hakkımda" />
          <About />
        </section>
      </Element>

      <Element name="section-skills">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Yeteneklerim" />
          <Skills />
        </section>
      </Element>

      <Element name="section-funfacts">
        <Funfacts />
      </Element>

      <Element name="section-services">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Hizmetlerim" />
          <Services />
        </section>
      </Element>

      <Element name="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Deneyimlerim" />
          <Experiences />
        </section>
      </Element>

      <Element name="section-portfolios">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Portföy" />
          <Portfolios />
        </section>
      </Element>


      <Element name="section-testimonials">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Testimonials" />
          <Testimonials />
        </section>
      </Element>

      <Element name="section-clients">
        <Clients />
      </Element>


      <Element name="section-contact">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Get in touch" />
          <Contact />
        </section>
      </Element>
    </Layout>
  );
}

export default Homepage;
