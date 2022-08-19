import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "Ağu 2021 - Devam",
    degree: "Senior Web UI Developer/Specialist - Etiya",
    content:
      "",
  },
  {
    id: 2,
    year: "Eyl 2019 - Ağu 2021",
    degree: "Frontend Developer - Nexum Creative",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  },
  {
    id: 3,
    year: "Eyl 2018 - Tem 2019",
    degree: "Frontend Developer - Sentez Yazılım",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  },
  {
    id: 4,
    year: "Eyl 2015 - Ara 2017",
    degree: "Junior Frontend Developer - Vidizayn",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
