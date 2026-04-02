import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-grid">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Vimukti Sansthan</h4>
                  <p>Institutional Project</p>
                </div>
              </div>

              <h3 className="project-tagline">
  Empowering Education for Underprivileged Girls, Jaipur
</h3>
              <p>Vimukti Sansthan Girls’ School, Jaipur is a climate-responsive campus built with local materials and participatory methods for underserved students, using perforated brick jali screens to enhance daylight, ventilation, and thermal comfort.</p>
            </div>

            <WorkImage
              image="/images/featured.jpg"
              alt="Vimukti Sansthan Girls School"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Queensline</h4>
                  <p>Interior Project</p>
                </div>
              </div>

              <h3 className="project-tagline">
  Floating Restaurant, Mumbai
</h3>
              <p>Floating Fine Dine Restaurant, Mumbai is a waterfront dining project designed to enhance panoramic harbor views through a lightweight structural system and open spatial planning, creating an immersive dining experience that connects visitors to the surrounding seascape.</p>
            </div>

            <WorkImage
              image="/images/cam.jpg"
              alt="CAM Restaurant Interior"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>NEXUS</h4>
                  <p>Academic Project</p>
                </div>
              </div>

              <h3 className="project-tagline">
  Buffalo Art Museum, NY
</h3>
              <p>Nexus Buffalo Art Museum is a contemporary cultural building that explores the intersection of light, materiality, and movement through fractured geometries, creating dynamic gallery spaces that connect visitors to art, landscape, and urban context.</p>
            </div>

            <WorkImage
              image="/images/museum.png"
              alt="Nexus Buffalo Museum"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Lily Plate</h4>
                  <p>Academic Project</p>
                </div>
              </div>

              <h3 className="project-tagline">
  Mechanical Object | Spatial Generator
</h3>
              <p>Lily Plate is a parametric concrete structure inspired by natural geometries, developed through computational design and digital fabrication to explore structural efficiency, modularity, and material expression.</p>
            </div>

            <WorkImage
              image="/images/tet.jpg"
              alt="TET Structural Pavilion"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Porosity</h4>
                  <p>Inclusive Design</p>
                </div>
              </div>

              <h3 className="project-tagline">
  Design for Everbody
</h3>
              <p>Porosity Housing, Buffalo is a mixed-use residential project that reconnects fragmented urban routes through permeable courtyards and public pathways, creating inclusive living spaces that balance community interaction with privacy.</p>
            </div>

            <WorkImage
              image="/images/porosity.png"
              alt="Porosity Housing Project"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>Villa</h4>
                  <p>Residential Project</p>
                </div>
              </div>

              <h3 className="project-tagline">
  Tranquil Escape to Nature
</h3>
              <p>Modern and Classical Residences include a series of housing projects that blend contemporary planning with classical design elements, creating refined elevations, functional layouts, and context-responsive living environments.</p>
            </div>

            <WorkImage
              image="/images/resi.png"
              alt="Residential Architecture Project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
