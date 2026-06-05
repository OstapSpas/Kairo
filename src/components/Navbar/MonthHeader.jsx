import "./MonthHeader.css";

import ArrowRight from "../../assets/icons/btn-right.svg";
import ArrowLeft from "../../assets/icons/btn-left.svg";


export default function MonthHeader({ title, onPrevPage, onNextPage }) {
  return (
    <nav className="month-header">
      <div className="month-header__content">
        <button
          type="button"
          className="month-header__button"
          onClick={onPrevPage}
        >
          <img src={ArrowLeft} alt="previous" />
        </button>

        <h2 className="month-header__title">{title}</h2>

        <button
          type="button"
          className="month-header__button"
          onClick={onNextPage}
        >
          <img src={ArrowRight} alt="next" />
        </button>
      </div>
    </nav>
  );
}