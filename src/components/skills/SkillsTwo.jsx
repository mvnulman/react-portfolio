import React from "react";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="shane_tm_title">
                  <h3>
                  Web development skills with technologies and tools as:
                  </h3>
                  <i class="devicon-html5-plain colored"></i>
                  <i class="devicon-css3-plain colored"></i>
                  <i class="devicon-bootstrap-plain colored"></i>
                  <i class="devicon-javascript-plain colored"></i>
                  <i class="devicon-react-original colored"></i>
                  <i class="devicon-nodejs-plain colored"></i>
                  <i class="devicon-postgresql-plain colored"></i>
                  <i class="devicon-git-plain colored"></i>
                </div>
              </div>
              {/* End .left */}

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="tokyo_progress">
                  <div className="progress_inner">
                    <span>
                      <h2>Soft Skills</h2>
                      <span className="label">Focused</span>
                      <span className="number">100%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 100 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Analytical</span>
                      <span className="number">100%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 100 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Creative</span>
                      <span className="number">100%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 100 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Curious</span>
                      <span className="number">100%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 100 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;
