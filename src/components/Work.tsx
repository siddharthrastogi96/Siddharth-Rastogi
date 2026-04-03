import React from "react";
import WorkImage from "./WorkImage";

const base = import.meta.env.BASE_URL;

const works = [
  {
    number: "01",
    title: "Vimukti Sansthan",
    type: "Institutional Project",
    heading: "Empowering Education for Underprivileged Girls, Jaipur",
    description:
      "Vimukti Sansthan Girls’ School is a climate-responsive campus built using locally sourced materials and participatory construction techniques with perforated brick jali screens.",
    image: `${base}images/featured.jpg`,
  },

  {
    number: "02",
    title: "Queensline",
    type: "Interior Project",
    heading: "Floating Restaurant, Mumbai",
    description:
      "Floating fine-dine restaurant designed to enhance harbor views with lightweight structural planning and immersive dining experience.",
    image: `${base}images/heyizine.png`,
  },

  {
    number: "03",
    title: "NEXUS",
    type: "Academic Project",
    heading: "Buffalo Art Museum",
    description:
      "Contemporary museum exploring fractured geometries, daylight-driven galleries, and strong urban presence in Buffalo.",
    image: `${base}images/museum.png`,
  },

  {
    number: "04",
    title: "Porosity",
    type: "Urban Housing",
    heading: "Mixed-Use Housing Development",
    description:
      "Transit-oriented housing reconnecting urban pathways and activating public landscapes through porous planning strategies.",
    image: `${base}images/porosity.png`,
  },

  {
    number: "05",
    title: "Residential Project",
    type: "Professional Work",
    heading: "Modern and Classical Residences",
    description:
      "Residential developments integrating contemporary detailing with classical spatial principles and refined material palettes.",
    image: `${base}images/resi.png`,
  },

  {
    number: "06",
    title: "Technical Exploration",
    type: "Research Project",
    heading: "Material and Structural Study",
    description:
      "Experimental research focused on fabrication techniques, structural systems, and digital modeling workflows.",
    image: `${base}images/tet.jpg`,
  },
];

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-container">
        {works.map((work, index) => (
          <div className="work-item" key={index}>
            <div className="work-text">
              <h1 className="work-number">{work.number}</h1>

              <h2 className="work-title">{work.title}</h2>

              <p className="work-type">{work.type}</p>

              <h3 className="work-heading">{work.heading}</h3>

              <p className="work-description">
                {work.description}
              </p>
            </div>

            <WorkImage image={work.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;