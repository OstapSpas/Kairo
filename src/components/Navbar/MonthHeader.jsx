import "./MonthHeader.css";

import ArrowRight from "../../assets/icons/btn-right.svg";
import ArrowLeft from "../../assets/icons/btn-left.svg";



export default function MonthHeader() {

    const today = new Date();
    const month = today.getMonth() + 1;


  return (
    <nav className="month-header">
      <div className="month-header__content">
        <button className="month-header__button">
          <img src={ArrowLeft} alt="Previous month" />
        </button>

        <h2 className="month-header__title">Planner in {month}</h2>

        <button className="month-header__button">
          <img src={ArrowRight} alt="Next month" />
        </button>
      </div>
    </nav>
  );
}