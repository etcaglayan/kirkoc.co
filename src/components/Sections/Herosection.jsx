import React from "react";
import { Link as ScrollLink } from "react-scroll";

const herosectionData = {
  name: "Ümit Çağlayan Kırkoç",
  aboutMe:
    "Kurumsal şirketlerin içerik yönetimi, içeriksel olarak güncellenmesi, UI / UX geliştirme. Sitenin tasarım aşamasından yayın aşamasına kadar takibi, mobil site ve uygulama tasarımı ve geliştirmesi gibi konularla ilgileniyorum.",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/hero.jpg)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          Ben {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>Portföy
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Benimle İletişime Geç!
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
