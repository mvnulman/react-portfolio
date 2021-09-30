import React, { useState } from "react";
import Modal from "react-modal";
// import Map from "../Map";
// import Contact from "../Contact";
// import Social from "../Social";

Modal.setAppElement("#root");

const CallToActionTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="shane_tm_section" id="contact">
      <div
        className="shane_tm_talk bg_image_props"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/svg/contact-illustration.svg"
          })`,
        }}
      >
        {/* <div className="shape">
          <img className="svg" src="/img/svg/paper.svg" alt="partners brand" />
        </div> */}
        {/* End shape */}

        <div className="background" id="talk">
          {/* <a className="player"></a> */}
          <div className="overlay"></div>
        </div>
        {/* End background */}

        <div className="talk_inner">
          <div className="text" data-aos="fade-up" data-aos-duration="1200">
            <h3>Let's work together!</h3>
          </div>

          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <button className="white-fill-bg" onClick={toggleModalOne}>
              Contact me!
            </button>
          </div>
        </div>
        {/* End talk_inner */}
      </div>
      {/* Start Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="shane_tm_mobalbox_contact">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}
          <div className="box_inner">
              <a href="https://github.com/mvnulman">
              <i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/mvnulman/">
              <i class="fab fa-linkedin"></i></a>
              <a href="mailto:mvsouza7@gmail.com">
              <i class="fas fa-envelope"></i></a>


            <div className="description_wrap scrollable">
              {/* Start modal content */}
              <div className="title">
              </div>

{/*           <div className="wrapper">
                <div className="left">
                  <div className="fields">
                    <Contact />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CallToActionTwo;
