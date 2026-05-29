import { useState } from "react";

import CloseBTN from "../../assets/icons/x.svg";
import EditBTN from "../../assets/icons/pencil.svg";
import DeleteBTN from "../../assets/icons/trash.svg";

import "./DayTasksModal.css";

export default function DayTasksModal({
    selectedDay,
    tasks,
    onClose,
    onAdd,
    onEdit,
    onDelete,
}) {
    const [inputValue, setInputValue] = useState("");
    const [editingTaskId, setEditingTaskId] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (inputValue.trim() === "") {
            return;
        }

        if (editingTaskId !== null) {
            onEdit(editingTaskId, inputValue);
            setEditingTaskId(null);
        } else {
            onAdd(inputValue);
        }

        setInputValue("");
    }

    function handleStartEdit(task) {
        setInputValue(task.text);
        setEditingTaskId(task.id);
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-date">
                    <h3>{selectedDay} May</h3>

                    <div className="modal-close-button">
                        <button type="button" onClick={onClose}>
                            <img src={CloseBTN} alt="close" />
                        </button>
                    </div>
                </div>

                <form className="modal-input" onSubmit={handleSubmit}>
                    <input
                        placeholder={
                            editingTaskId !== null
                                ? "Edit your task..."
                                : "Enter your task..."
                        }
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </form>

                <ul className="modal-task">
                    {tasks.map((task) => {
                        return (
                            <li key={task.id} className="modal-task-item">
                                <span>{task.text}</span>

                                <div className="modal-task-item-action">
                                    <button
                                        type="button"
                                        onClick={() => handleStartEdit(task)}
                                    >
                                        <img src={EditBTN} alt="Edit" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => onDelete(task.id)}
                                    >
                                        <img src={DeleteBTN} alt="Delete" />
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}