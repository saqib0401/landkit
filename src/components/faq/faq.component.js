import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import "./faq.styles.css";
const Faq = () => {
  return (
    <div className="faq">
      <div>
        <h3 className="faq-heading">
          <span className="question-mark">
            <BsFillQuestionCircleFill />
          </span>
          <span className="question">Can I use Landkit for my clients?</span>
        </h3>
        <p className="faq-para">
          Absolutely. The Bootstrap Themes license allows you to build a website
          for personal use or for a client.
        </p>
        <h3 className="faq-heading">
          <span className="question-mark">
            <BsFillQuestionCircleFill />
          </span>
          <span className="question">Do I get free updates?</span>
        </h3>
        <p className="faq-para">
          Yes. We update all of our themes with each Bootstrap update, plus are
          constantly adding new components, pages, and features to our themes.
        </p>
      </div>
      <div>
        <h3 className="faq-heading">
          <span className="question-mark">
            <BsFillQuestionCircleFill />
          </span>
          <span className="question">Is there a money back guarantee?</span>
        </h3>
        <p className="faq-para">
          Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a
          return and get your money back.
        </p>
        <h3 className="faq-heading">
          <span className="question-mark">
            <BsFillQuestionCircleFill />
          </span>
          <span className="question">
            Does it work with Rails? React? Laravel?
          </span>
        </h3>
        <p className="faq-para">
          Yes. Landkit has basic CSS/JS files you can include. If you want to
          enable deeper customization, you can integrate it into your assets
          pipeline or build processes.
        </p>
      </div>
    </div>
  );
};

export default Faq;
