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
      "Vimukti Sansthan Girls’ School, Jaipur is a climate-responsive campus built with local materials and participatory methods using perforated brick jali screens.",
    image: `${base}images/featured.jpg`,
  },

  {
    number: "02",
    title: "Queensline",
    type: "Interior Project",
    heading: "Floating Restaurant, Mumbai",
    description:
      "Floating fine dine restaurant designed to enhance harbor views with lightweight structural planning.",
    image: `${base}images/heyizine.png`,
  },

  {
    number: "03",
    title: "NEXUS",
    type: "Academic Project",
    heading: "Buffalo Art Museum",
    description:
      "Contemporary museum exploring fractured geometries and daylight-driven spatial experience.",
    image: `${base}images/museum.png`,
  },

  {
    number: "04",
    title: "Lily Plate",
    type: "Parametric Project",
    heading: "Concrete Parametric Structure",
    description:
      "Parametric exploration of geometry and structure developed using Grasshopper workflows.",
    image: `${base}images/archinect.png`,
  },

  {
    number: "05",
    title: "Porosity",
    type: "Urban Housing",
    heading: "Mixed-Use Housing Development",
    description:
      "Transit-oriented development reconnecting urban pathways and activating public courtyards.",
    image: `${base}images/porosity.png`,
  },

  {
    number: "06",
    title: "Residential Project",
    type: "Professional Work",
    heading: "Modern and Classical Residences",
    description:
      "Residential projects integrating modern planning with classical architectural detailing.",
    image: `${base}images/resi.png`,
  },
];

const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="work-container">

        {works.map((work, index) => (
          <div className="work-item" key={index}>

            <div className="work-text">

              <h1 className="work-number">
                {work.number}
              </h1>

              <h2 className="work-title">
                {work.title}
              </h2>

              <p className="work-type">
                {work.type}
              </p>

              <h3 className="work-heading">
                {work.heading}
              </h3>

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