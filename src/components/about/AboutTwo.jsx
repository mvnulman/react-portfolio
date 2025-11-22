import React from "react";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />

                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${"/img/about/logo-me.png"})`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Hello! Marcos Vinícius here :)</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I'm a Frontend developer with over 3+ years of experience
                    focused on building intuitive, responsive and scalable web
                    applications. I focus on clean code practices and
                    continuously strive to deliver an excellent user experience.
                    My work involves implementing new features, optimizing
                    performance, and defining reusable component patterns that
                    make the codebase cleaner and more scalable. I’m recognized
                    for being collaborative, proactive, and solution-oriented. I
                    work effectively with cross-functional teams, strengthening
                    collaboration and continuous development practices where
                    ideas are shared, feedback is valued, and challenges are
                    solved collectively.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a
                    href="https://docs.google.com/document/d/12Hh9Q1j1-XJuwwMAR1nP8X3Iks2luJyrIhjC3ATNXYs/edit?usp=sharing"
                    download
                  >
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
