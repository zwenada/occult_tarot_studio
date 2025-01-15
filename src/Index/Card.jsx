import React from "react";
import tarotImage1 from "../assets/tarot1.jpg";
import tarotImage2 from "../assets/tarot2.jpg";
import tarotImage3 from "../assets/tarot3.jpeg";

const Card = () => {
  return (
    <>
      <section>
        <h1 className="services-title">
          Discover Insight and Guidance with Our Tarot Reading Services
        </h1>
        <div className="card-group">
          <div className="card mx-2">
            <img src={tarotImage1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title daily-title">🌞 Daily Tarot Message</h5>
              <p className="card-text daily-text">
                Start your day with clarity and purpose. Let today’s Tarot
                message guide your thoughts and actions, offering insight into
                the energy surrounding you. Embrace the wisdom of the cards and
                unlock the hidden truths that can shape your journey.
              </p>
            </div>
          </div>
          <div className="card me-2">
            <img src={tarotImage2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title weekly-title">📅 Weekly Focus Tarot</h5>
              <p className="card-text weekly-text">
                Gain deeper perspective for the week ahead. This focused Tarot
                reading reveals the energies, opportunities, and challenges that
                may arise. Align your intentions and stay grounded with guidance
                designed to help you navigate your path with confidence.
              </p>
            </div>
          </div>
          <div className="card me-2">
            <img src={tarotImage3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title ritual-title">
                🕯️ Magic Candle & Ritual
              </h5>
              <p className="card-text ritual-text">
                Invite powerful energies into your life with enchanting candle
                magic and meaningful rituals. Each flame carries your intentions
                into the universe, empowering transformation, protection, and
                manifestation. Light the way to your desires and let your spirit
                shine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
