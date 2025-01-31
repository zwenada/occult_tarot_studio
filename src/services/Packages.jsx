import React from "react";

import serviceImage1 from "/public/assets/service_1.jpg";
import serviceImage2 from "/public/assets/service_3.jpg";
import tarotImage1 from "/public/assets/tarot_1.jpg";
import tarotImage2 from "/public/assets/tarot_2.jpg";
const backgroundImage = "/assets/packages_bg.jpg";

const Service = () => {
  return (
    <section style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="services-title overlay">
        Discover Insight and Guidance with Our Tarot Reading Services
      </h1>
      <div className="card-group card-display">
      <div className="card ">
          <img src={serviceImage1} className="card-img-top" alt="..." />
          {/* <div className="card-body"> */}
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
            {/* </div> */}
          </div>
        </div>
        <div className="card ">
          <img src={tarotImage1} className="card-img-top" alt="..." />
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
      <div className="card-group card-display mt-5">
      <div className="card ">
          <img src={serviceImage2} className="card-img-top" alt="..." />
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
          <img src={tarotImage2} className="card-img-top" alt="..." />
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

export default Service;
