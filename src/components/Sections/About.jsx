import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/empty.pdf",
  image: "images/about.png",
  name: "Ümit Çağlayan Kırkoç",
  location: "İstanbul, Türkiye",
  birthday: "06 Temmuz 1997",
  email: "umitcaglayankirkoc@gmail.com",
  aboutMe:
    "Ben Ümit Çağlayan Kırkoç, İstanbul'da Frontend Developer olarak çalışıyorum. 6 yıllık sektör geçmişimde çok başarılı projeler yayınladım. Web sitelerinin oluşturulması, düzenlenmesi ve yayınlanmasında deneyimliyim.",
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Merhaba,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              İsim Soyisim: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Doğum Günü: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Lokasyon: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>CV İndir
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Benimle İletişime Geç
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
