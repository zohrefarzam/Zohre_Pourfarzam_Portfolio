/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section matching the given `id`,
 * with a small offset from the top for better visual placement.
 */

import { asset } from "../utils/asset";

const Button = ({ text, className, id }) => {
  return (
    <a
      href={id ? `#${id}` : undefined}
      onClick={(e) => {
        e.preventDefault();

        // Only scroll if an ID is passed in
        if (!id) return;

        const target = document.getElementById(id);
        if (!target) return;

        const offset = window.innerHeight * 0.15;

        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: "smooth" });
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={asset("images/arrow-down.svg")} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
