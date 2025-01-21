import React from "react";

import magicImage1 from "/public/assets/magic_candle.jpg";
import runeImage2 from "/public/assets/rune candle.jpg";
import tarotImage3 from "/public/assets/tarot3.jpeg";

const Ritual = () => {
  return (
    <section>
      <h1 className="services-title">
        Some time Ritual need to help your fortune
      </h1>
      <div className="card-group">
        <div className="card mx-2">
          <img src={magicImage1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title daily-title">🌞 Daily Tarot Message</h5>
            <ul className="package-list daily-text">
              <li className="package-item">
                <strong>Package Name:</strong> Daily Tarot Insight
              </li>
              <li className="package-item">
                <strong>About Package:</strong> Start your day with clarity and
                purpose. Let today’s Tarot message guide your thoughts and
                actions, offering insight into the energy surrounding you.
              </li>
              <li className="package-item">
                <strong>Price:</strong> $20
              </li>
            </ul>
          </div>
        </div>
        <div className="card me-2">
          <img src={runeImage2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title daily-title">🌞 Daily Tarot Message</h5>
            <ul className="package-list daily-text">
              <li className="package-item">
                <strong>Package Name:</strong> Daily Tarot Insight
              </li>
              <li className="package-item">
                <strong>About Package:</strong> Start your day with clarity and
                purpose. Let today’s Tarot message guide your thoughts and
                actions, offering insight into the energy surrounding you.
              </li>
              <li className="package-item">
                <strong>Price:</strong> $20
              </li>
            </ul>
          </div>
        </div>
        <div className="card me-2">
          <img src={tarotImage3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title daily-title">🌞 Daily Tarot Message</h5>
            <ul className="package-list daily-text">
              <li className="package-item">
                <strong>Package Name:</strong> Daily Tarot Insight
              </li>
              <li className="package-item">
                <strong>About Package:</strong> Start your day with clarity and
                purpose. Let today’s Tarot message guide your thoughts and
                actions, offering insight into the energy surrounding you.
              </li>
              <li className="package-item">
                <strong>Price:</strong> $20
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ritual;
