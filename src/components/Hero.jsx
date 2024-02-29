import React from "react";
const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Your Best Choice</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          laborum praesentium placeat totam corrupti in voluptatibus ducimus
          iusto ullam nostrum lorem.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="category-btn">Category</button>
        </div>

        <div className="shopping">
          <p>And Also Avialable On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-log" />
            <img src="/images/flipkart.png" alt="flipkart-log" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="shoes-photo" />
      </div>
    </main>
  );
};
export default HeroSection;
