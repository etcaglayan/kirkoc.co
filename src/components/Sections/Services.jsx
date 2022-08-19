import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Geliştirme",
    content: "Yazılım ürünlerinin tasarımının yapılmasını, devamlılığını ve gerektiğinde güncellemesini ",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Tasarım",
    content: "Markalar için uçtan uca tasarımların yapılması",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Danışmanlık",
    content: "Yazılımların etkin ve verimli kullanılması",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "SEO",
    content: "Web sitelerini arama motorlarının daha rahat bir şekilde anlayabilmesi",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "İçerik Yazarlığı",
    content: "Web sitelerinin içeriklerinin yazılması.",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Destek",
    content: "Proje tamamlandıktan sonra yapılabilecek tüm geliştirmeler.",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
