import "./HomePage.css";

import BottomNav from "../../components/Navbar/BottomNav";

import LogoNav from "../../assets/icons/logo-elipse.svg";
import ArrowRight from "../../assets/icons/arrow-icon-right.svg";
const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const todayTasks = [
  { id: 1, title: "Go to GYM", time: "09:00" },
  { id: 2, title: "Go to university", time: "13:00" },
  { id: 3, title: "Coding", time: "17:00" },
];

export default function HomePage() {
  return (
    <main className="page home-page">
      <header className="home-header">
        <h2>Hello, Ostap</h2>

        <a href="#" className="profile-link">
          <img src={LogoNav} alt="Profile" className="profile-img" />
        </a>
      </header>

      <section className="week-tracker">
        <ul className="week-list">
          {weekDays.map((day, index) => (
            <li className="week-item" key={index}>
              <span className="week-dot"></span>
              <span className="week-day">{day}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="today-plan">
        <h3>Your today plan</h3>
        <ul className="today-list">
          {todayTasks.map((task) => (
            <li key={task.id}>
              {task.title}
              <span>{task.time}</span>
            </li>
          ))}
        </ul>
        <a href="#" className="look-more">
          Look more
          <img src={ArrowRight} alt="arrow-icon" className="arrow-icon" />
        </a>
      </section>

      <section className="progress-tracker">
        <h3>Your progress</h3>

        <div className="progress-card">
          <div className="progress-info">
            <span>Today</span>
            <strong>3 / 5 tasks</strong>
          </div>

          <div className="progress-bar">
            <span></span>
          </div>
        </div>
      </section>

      <BottomNav />
    </main>
  );
}
