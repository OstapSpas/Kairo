export default function DayCircle({ dayData, onDayClick }) {
  return (
    <button
      type="button"
      className="day-circle-item"
      onClick={() => onDayClick(dayData)}
    >
      {dayData.day}
    </button>
  );
}