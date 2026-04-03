import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-grid">

          {/* 01 */}
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

              <p>
                Vimukti Sansthan Girls’ School, Jaipur is a climate-responsive
                campus built with local materials and participatory methods
                using perforated brick jali screens.
              </p>
            </div>

            <WorkImage
              image={`${base}images/featured.jpg`}
              alt="Vimukti School"
            />
          </div>

          {/* 02 */}
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

              <p>
                Floating Fine Dine Restaurant designed to enhance harbor views
                with lightweight structural planning.
              </p>
            </div>

            <WorkImage
              image={`${base}images/cam.jpg`}
              alt="Restaurant Interior"
            />
          </div>

          {/* 03 */}
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
                Buffalo Art Museum
              </h3>

              <p>
                Contemporary museum exploring fractured geometries and
                daylight-driven spatial experience.
              </p>
            </div>

            <WorkImage
              image={`${base}images/museum.png`}
              alt="Museum"
            />
          </div>

          {/* 04 */}
          <div className="work-box">
            <WorkImage
              image={`${base}images/tet.jpg`}
              alt="Lily Plate"
            />
          </div>

          {/* 05 */}
          <div className="work-box">
            <WorkImage
              image={`${base}images/porosity.png`}
              alt="Porosity Housing"
            />
          </div>

          {/* 06 */}
          <div className="work-box">
            <WorkImage
              image={`${base}images/resi.png`}
              alt="Residential Project"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;