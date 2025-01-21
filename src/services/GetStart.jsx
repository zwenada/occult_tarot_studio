import React from "react";
const backgroundImage = "/assets/services_bg.jpg";

const GetStart = () => {
  return (
    <section style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="get-start-container overlay">
        <h2 className="get-title">Get Started with Tarot</h2>
        <p className="get-text">
          Ready to unlock the wisdom of the Tarot cards? Start your journey with
          a personalized reading. Whether you're seeking guidance, clarity, or a
          new perspective, the Tarot is here to help you on your path.
        </p>
        <button className="get-start-button">Get Started</button>
      </div>
    </section>
  );
};

export default GetStart;
