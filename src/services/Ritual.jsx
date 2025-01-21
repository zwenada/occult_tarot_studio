import React from "react";

import magicImage1 from "/public/assets/magic_candle.jpg";
import runeImage2 from "/public/assets/rune.jpg";
const backgroundImage = "/assets/packages_bg.jpg";

const Ritual = () => {
  return (
    <section style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="services-title overlay">
        living in the Universe, feel the energy flow and get Ritual
      </h1>
      <div className="card-group card-display">
        <div className="card ">
          <img src={magicImage1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title daily-title">🌞 Daily Tarot Message</h5>
            <p className="daily-text">
              Daily Tarot is the reading for your day. We will take care the
              service at morning and watch your fortune. So, we can tell advice
              you what to wear and what to advoice. If you are interesting, you
              can click on image and read more detail.
            </p>
            <div className="hover-text">
              <ul className="weekly-text ">
                <li className="package-item">
                  <strong>Package Name:</strong> Daily Tarot Insight
                </li>
                <li className="package-item ">
                  <strong>About Package:</strong> Start your day with clarity
                  and purpose. Let today’s Tarot message guide your thoughts and
                  actions, offering insight into the energy surrounding you.
                </li>
                <li className="package-item">
                  <strong>Price:</strong> $20
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card ">
          <img src={runeImage2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title daily-title">🌞 Daily Tarot Message</h5>
            <p className="daily-text">
              Daily Tarot is the reading for your day. We will take care the
              service at morning and watch your fortune. So, we can tell advice
              you what to wear and what to advoice. If you are interesting, you
              can click on image and read more detail.
            </p>
            <div className="hover-text">
              <ul className="weekly-text ">
                <li className="package-item">
                  <strong>Package Name:</strong> Daily Tarot Insight
                </li>
                <li className="package-item ">
                  <strong>About Package:</strong> Start your day with clarity
                  and purpose. Let today’s Tarot message guide your thoughts and
                  actions, offering insight into the energy surrounding you.
                </li>
                <li className="package-item">
                  <strong>Price:</strong> $20
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ritual;
