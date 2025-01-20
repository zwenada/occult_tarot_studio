import React from "react";
import profileImage1 from "../assets/admin_1.jpg";
import profileImage2 from "../assets/admin_2.jpg";

const Profiles = () => {
  return (
    <section>
      <div className="profiles-container">
        <div className="profile">
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
          </a>

          <h2 className="profile-name">JANE SMITH</h2>
          <ul className="profile-details">
            <li className="detail">Tarot Reader</li>
            <li className="detail">Expert in Spiritual Growth</li>
          </ul>
        </div>
        <div className="profile">
          <a
            href="https://www.facebook.com/john.doe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={profileImage2} alt="John Doe" className="profile-image" />
          </a>
          <h2 className="profile-name">JANE SMITH</h2>
          <ul className="profile-details">
            <li className="detail">Tarot Reader</li>
            <li className="detail">Expert in Spiritual Growth</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
