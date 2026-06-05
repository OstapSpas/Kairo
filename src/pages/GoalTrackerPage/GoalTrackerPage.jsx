import { useState, useEffect } from "react";

import BottomNav from "../../components/Navbar/BottomNav";
import MonthHeader from "../../components/Navbar/MonthHeader";
import CalendarGrid from "../../components/CalendarGrid/CalendarGrid";
import DayTasksModal from "../../components/Modal/DayTasksModal";

const DAYS_PER_PAGE = 18;

function createDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getVisibleDays(startDate) {
  return Array.from({ length: DAYS_PER_PAGE }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);

    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      monthName: date.toLocaleString("en-US", { month: "long" }),
      dateKey: createDateKey(date),
    };
  });
}

function getMonthTitle(visibleDays) {
  const firstDay = visibleDays[0];
  const lastDay = visibleDays[visibleDays.length - 1];

  if (firstDay.month === lastDay.month && firstDay.year === lastDay.year) {
    return `${firstDay.monthName} ${firstDay.year}`;
  }

  return `${firstDay.monthName} / ${lastDay.monthName} ${lastDay.year}`;
}

export default function GoalTrackerPage() {
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tasksByDate, setTasksByDate] = useState({
    "2026-06-15": [
      { id: 1, text: "Go to Gym" },
      { id: 2, text: "LeetCode" },
    ],
  });

  const visibleDays = getVisibleDays(startDate);
  const monthTitle = getMonthTitle(visibleDays);

  const tasksForSelectedDay = selectedDate
    ? tasksByDate[selectedDate.dateKey] || []
    : [];

  function handleNextPage() {
    setStartDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setDate(prevDate.getDate() + DAYS_PER_PAGE);
      return nextDate;
    });
  }

  function handlePrevPage() {
    setStartDate((prevDate) => {
      const prevPageDate = new Date(prevDate);
      prevPageDate.setDate(prevDate.getDate() - DAYS_PER_PAGE);
      return prevPageDate;
    });
  }

  function handleDayClick(dayData) {
    setSelectedDate(dayData);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleAddTask(newTaskText) {
    if (!selectedDate) return;

    const trimmedText = newTaskText.trim();

    if (trimmedText === "") return;

    const newTask = {
      id: Date.now(),
      text: trimmedText,
    };

    setTasksByDate((prevTasks) => {
      return {
        ...prevTasks,
        [selectedDate.dateKey]: [
          ...(prevTasks[selectedDate.dateKey] || []),
          newTask,
        ],
      };
    });
  }

  function handleEditTask(taskId, newText) {
    if (!selectedDate) return;

    const trimmedText = newText.trim();

    if (trimmedText === "") return;

    setTasksByDate((prevTasks) => {
      return {
        ...prevTasks,
        [selectedDate.dateKey]: (prevTasks[selectedDate.dateKey] || []).map(
          (task) => {
            if (task.id === taskId) {
              return {
                ...task,
                text: trimmedText,
              };
            }

            return task;
          }
        ),
      };
    });
  }

  function handleDeleteTask(taskId) {
    if (!selectedDate) return;

    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!isConfirmed) return;

    setTasksByDate((prevTasks) => {
      return {
        ...prevTasks,
        [selectedDate.dateKey]: (prevTasks[selectedDate.dateKey] || []).filter(
          (task) => task.id !== taskId
        ),
      };
    });
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <main className="page goal-tracker-page">
      <MonthHeader
        title={monthTitle}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />

      <CalendarGrid days={visibleDays} onDayClick={handleDayClick} />

      {isModalOpen && (
        <DayTasksModal
          selectedDay={selectedDate.day}
          selectedMonth={selectedDate.monthName}
          tasks={tasksForSelectedDay}
          onClose={handleCloseModal}
          onAdd={handleAddTask}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      )}

      <BottomNav />
    </main>
  );
}