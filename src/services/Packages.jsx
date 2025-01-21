import React from "react";

import serviceImage1 from "../assets/service_1.jpg";
import serviceImage2 from "../assets/service_2.jpg";
import serviceImage3 from "../assets/service_3.jpg";

const Service = () => {
  return (
    <section>
      <h1 className="services-title">
        Discover Insight and Guidance with Our Tarot Reading Services
      </h1>
      <div className="card-group">
        <div className="card mx-2">
          <img src={serviceImage1} className="card-img-top" alt="..." />
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
          <img src={serviceImage2} className="card-img-top" alt="..." />
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
          <img src={serviceImage3} className="card-img-top" alt="..." />
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

export default Service;
