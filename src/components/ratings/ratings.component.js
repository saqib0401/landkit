import React from "react";
import "./ratings.styles.css";

const Ratings = () => {
  return (
    <div className="ratings">
      <div>
        <h3 className="ratings-heading">Stay focused on your business.</h3>
        <h3 className="ratings-heading">
          <span>Let us handle the design</span>.
        </h3>
        <p className="ratings-para">
          You have a business to run. Stop worring about cross-browser bugs,
          designing new pages, keeping your components up to date. Let us do
          that for you.
        </p>
        <div className="ratings-section">
          <div>
            <h3 className="ratings-score">100%</h3>
            <p className="ratings-review"> Satisfaction</p>
          </div>
          <div>
            <h3 className="ratings-score"> 24/ 7 </h3>
            <p className="ratings-review">Support</p>
          </div>
          <div>
            <h3 className="ratings-score">100k+</h3>
            <p className="ratings-review"> Sales</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="customer-img"
          alt="relaxing customer"
          src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-8.png"
        />
      </div>
    </div>
  );
};

export default Ratings;
