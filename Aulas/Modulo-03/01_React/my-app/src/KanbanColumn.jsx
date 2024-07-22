import React, { useState } from 'react';
import Task from './Task'; // Corrigido o caminho de importação
import { AiOutlinePlus } from 'react-icons/ai';

export const KanbanColumn = ({ columnId, column, addTask, removeTask, moveTask }) => {
    const [newTaskContent, setNewTaskContent] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTaskContent, setEditedTaskContent] = useState('');

    const handleAddTask = () => {
        if (newTaskContent.trim() !== '') {
            addTask(columnId, newTaskContent);
            setNewTaskContent('');
        }
    };

    const handleEditClick = (taskId, taskContent) => {
        setEditingTaskId(taskId);
        setEditedTaskContent(taskContent);
    };

    const handleSaveTask = (taskId, editedContent) => {
        moveTask(columnId, columnId, taskId, editedContent);
        setEditingTaskId(null);
    };

    const handleCancelEdit = () => {
        setEditingTaskId(null);
        setEditedTaskContent('');
    };

    return (
        <div className="text-center w-full xl:w-1/3 m-3 bg-gray-200 rounded-lg p-4 text-left">
            <div className="flex flex-col">
                <h2>{column.name}</h2>
                <div className="flex mt-2">
                    <input
                        type="text"
                        value={newTaskContent}
                        onChange={(e) => setNewTaskContent(e.target.value)}
                        className="flex-1 p-2 rounded-md border border-gray-300"
                        placeholder="Adicionar nova task"
                    />
                    <button
                        onClick={handleAddTask}
                        className="bg-pink-500 text-white rounded-md ml-2 p-2"
                    >
                        <AiOutlinePlus />
                    </button>
                </div>
            </div>
            <div className="mt-4">
                {column.items.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        columnId={columnId}
                        removeTask={removeTask}
                        moveTask={moveTask}
                        onEdit={() => handleEditClick(task.id, task.content)}
                        onSave={(id, content) => handleSaveTask(id, content)}
                        onCancelEdit={handleCancelEdit}
                        editing={editingTaskId === task.id}
                    />
                ))}
            </div>
        </div>
    );
};