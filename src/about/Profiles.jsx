import React from "react";
import profileImage1 from "/public/assets/admin_1.jpg";
import profileImage2 from "/public/assets/admin_2.jpg";
const backgroundImage = "/assets/aboutus_bg.jpg";

const Profiles = () => {
  return (
    <section style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="tarot-section overlay">
        <h1 className="tarot-title">Where Do I contact?</h1>
        <p className="tarot-text">
          You can contact with us by clicking on our profiles.
        </p>
      </div>
      <div className="profiles-container">
        <div className="profile">
          <div className="position-relative">
            <div className="user-bg"></div>
            <a
              href="https://www.facebook.com/jane.smith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={profileImage1}
                alt="Jane Smith"
                className="profile-image"
              />
              <div className="profile-animation"></div>{" "}
              {/* Animation element */}
            </a>
            <h2 className="profile-name">Sayr Zwel</h2>
            <ul className="profile-details">
              <li className="detail">Tarot Reader</li>
              <li className="detail">Magus</li>
            </ul>
          </div>
        </div>
        <div className="profile">
          <div className="user-bg"></div>
          <a
            href="https://www.facebook.com/john.doe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={profileImage2} alt="John Doe" className="profile-image" />
            <div className="profile-animation"></div> {/* Animation element */}
          </a>
          <h2 className="profile-name">Sao Nan Waddy</h2>
          <ul className="profile-details">
            <li className="detail">Tarot Reader</li>
            <li className="detail">Spellcraft and Candle magic</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
