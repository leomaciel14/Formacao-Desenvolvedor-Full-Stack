// KanbanBoard.js

import React, { useState } from 'react';
import { KanbanColumn } from './KanbanColumn';


const initialColumns = {
    todo: {
        name: 'A Fazer',
        items: []
    },
    inProgress: {
        name: 'Em progresso',
        items: []
    },
    done: {
        name: 'Feito',
        items: []
    }
};

const KanbanBoard = () => {
    const [columns, setColumns] = useState(initialColumns);

    const addTask = (columnId, taskContent) => {
        const newTask = { id: Date.now(), content: taskContent };
        setColumns({
            ...columns,
            [columnId]: {
                ...columns[columnId],
                items: [...columns[columnId].items, newTask]
            }
        });
    };

    const removeTask = (columnId, taskId) => {
        setColumns({
            ...columns,
            [columnId]: {
                ...columns[columnId],
                items: columns[columnId].items.filter(task => task.id !== taskId)
            }
        });
    };

    const moveTask = (fromColumnId, toColumnId, taskId) => {
        const task = columns[fromColumnId].items.find(task => task.id === taskId);
        setColumns({
            ...columns,
            [fromColumnId]: {
                ...columns[fromColumnId],
                items: columns[fromColumnId].items.filter(task => task.id !== taskId)
            },
            [toColumnId]: {
                ...columns[toColumnId],
                items: [...columns[toColumnId].items, task]
            }
        });
    };

    const editTask = (columnId, taskId, newContent) => {
        const updatedTasks = columns[columnId].items.map(task =>
            task.id === taskId ? { ...task, content: newContent } : task
        );
        setColumns({
            ...columns,
            [columnId]: {
                ...columns[columnId],
                items: updatedTasks
            }
        });
    };

    return (
        <div className="flex flex-col items-start sm:flex-row justify-center p-2 w-full">
            {Object.entries(columns).map(([columnId, column]) => (
                <KanbanColumn
                    key={columnId}
                    columnId={columnId}
                    column={column}
                    addTask={addTask}
                    removeTask={removeTask}
                    moveTask={moveTask}
                    editTask={editTask} // Passando a função editTask para o KanbanColumn
                />
            ))}
        </div>
    );
};
