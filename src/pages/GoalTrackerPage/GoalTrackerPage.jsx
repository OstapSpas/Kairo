import { useState, useEffect } from "react";

import MonthHeader from "../../components/Navbar/MonthHeader";
import CalendarGrid from "../../components/CalendarGrid/CalendarGrid";
import DayTasksModal from "../../components/Modal/DayTasksModal";

function GetDateArray() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const daysCount = new Date(year, month + 1, 0).getDate();

    const days = Array.from({ length: daysCount }, (_, index) => index + 1);

    return days;
}

export default function GoalTrackerPage() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [tasksByDay, setTasksByDay] = useState({
        15: [
            { id: 1, text: "Go to Gym" },
            { id: 2, text: "LeetCode" },
        ],
        16: [
            { id: 3, text: "Read book" },
        ],
    });

    const days = GetDateArray();

    const tasksForSelectedDay = selectedDay
        ? tasksByDay[selectedDay] || []
        : [];

    function handleDayClick(day) {
        console.log("GoalTrackerPage отримав day:", day);
        setSelectedDay(day);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    function handleAddTask(newTaskText) {
        if (!selectedDay) return;

        const trimmedText = newTaskText.trim();

        if (trimmedText === "") {
            return;
        }

        const newTask = {
            id: Date.now(),
            text: trimmedText,
        };

        setTasksByDay((prevTasks) => {
            return {
                ...prevTasks,
                [selectedDay]: [
                    ...(prevTasks[selectedDay] || []),
                    newTask,
                ],
            };
        });
    }

    function handleEditTask(taskId, newText) {
        if (!selectedDay) return;

        const trimmedText = newText.trim();

        if (trimmedText === "") {
            return;
        }

        setTasksByDay((prevTasks) => {
            return {
                ...prevTasks,
                [selectedDay]: (prevTasks[selectedDay] || []).map((task) => {
                    if (task.id === taskId) {
                        return {
                            ...task,
                            text: trimmedText,
                        };
                    }

                    return task;
                }),
            };
        });
    }

    function handleDeleteTask(taskId) {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!isConfirmed) {
            return;
        }

        setTasksByDay((prevTasks) => {
            return {
                ...prevTasks,
                [selectedDay]: (prevTasks[selectedDay] || []).filter((task) => {
                    return task.id !== taskId;
                }),
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
        <main className="page home-page">
            <MonthHeader />

            <CalendarGrid
                days={days}
                onDayClick={handleDayClick}
            />

            {isModalOpen && (
                <DayTasksModal
                    selectedDay={selectedDay}
                    tasks={tasksForSelectedDay}
                    onClose={handleCloseModal}
                    onAdd={handleAddTask}
                    onEdit={handleEditTask}
                    onDelete={handleDeleteTask}
                />
            )}
        </main>
    );
}