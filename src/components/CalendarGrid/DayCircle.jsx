export default function DayCircle({day, onDayClick}) {

    function handleClick() {
    onDayClick(day)
    }

    return (
        <div className="day-circle-item">
            <button onClick={handleClick} className="day-circle-btn">
                {day}
            </button>
        </div>
    );
}