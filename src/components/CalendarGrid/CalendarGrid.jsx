import DayCircle from "./DayCircle";

export default function CalendarGrid({ days, onDayClick }) {
  return (
    <div className="calendar-grid">
      {days.map((dayData) => (
        <DayCircle
          key={dayData.dateKey}
          dayData={dayData}
          onDayClick={onDayClick}
        />
      ))}
    </div>
  );
}