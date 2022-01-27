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
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/about/logo-me.png"
                      })`,
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
                  <h3>Front End Developer</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I'm Front End Developer with a Graphic Design and Marketing background. I am seeking web development and software engineering positions which will allow me   to grow as a professional and contribute my problem solving, teamwork and critical thinking skills.
                    Experienced also with commercial / marketing field, with  5+ years dealing with daily basis and obligations of these areas.
                    I'm skilled and have knowledge in the Graphic Design field, with software such as Adobe Photoshop, Adobe Illustrator, Adobe XD.

{/*                     
                    I'm passionate about technologies and programming. 🚀
                    I'm a hard worker and I have a strong resilience at work. 💡
                    Whenever I work on a project, I'm totally dedicated. 🎯
                    I focus on every detail and always work on making it better. 🏆 */}
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="https://docs.google.com/document/d/12Hh9Q1j1-XJuwwMAR1nP8X3Iks2luJyrIhjC3ATNXYs/edit?usp=sharing" download>
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
