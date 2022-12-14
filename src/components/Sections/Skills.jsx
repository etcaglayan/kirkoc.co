import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Web projelerinin geliştirilmesinde kullandığım ve deneyim sahibi olduğum ana başlıklardan sizlere bahsetmek isterim. Deneyimlerim genellikle Frontend, Backend ve Tasarım alanlarında.",
  progressData: [
    {
      id: 1,
      name: "HTML & CSS",
      percentage: 95,
    },
    {
      id: 2,
      name: "Javascript",
      percentage: 90,
    },
    {
      id: 3,
      name: "jQuery",
      percentage: 90,
    },
    {
      id: 4,
      name: "Bootstrap",
      percentage: 90,
    },
    {
      id: 5,
      name: "Twig",
      percentage: 90,
    },
    {
      id: 6,
      name: "Tailwind",
      percentage: 90,
    },

    {
      id: 7,
      name: "Vue.js",
      percentage: 80,
    },
    {
      id: 8,
      name: "React",
      percentage: 75,
    },
    {
      id: 9,
      name: "AMP",
      percentage: 90,
    },
    {
      id: 10,
      name: "PWA (Progressive Web App)",
      percentage: 90,
    },
    {
      id: 11,
      name: "Wordpress",
      percentage: 90,
    },
    {
      id: 12,
      name: "Drupal",
      percentage: 90,
    },
    {
      id: 13,
      name: "Git",
      percentage: 90,
    },

    {
      id: 14,
      name: "Jira",
      percentage: 100,
    },

    {
      id: 15,
      name: "Photoshop / Illustrator",
      percentage: 70,
    },
    {
      id: 16,
      name: "ASP.NET MVC",
      percentage: 70,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
