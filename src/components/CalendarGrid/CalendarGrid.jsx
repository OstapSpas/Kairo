import DayCircle from "./DayCircle";
import DayTasksModal from "../Modal/DayTasksModal";

export default function CalendarGrid({days, onDayClick}) {
    

    return (
        <div className="Calendar-grid">
            {days.map((day) => {
                return <DayCircle key={day} day={day}  className="calendar-item" onDayClick={onDayClick} />
        
            })}

        </div>
    );
}