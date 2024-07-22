// KanbanBoard.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { KanbanColumn } from './KanbanColumn';


const initialColumns = {
    todo: {
        name: 'To Do',
        items: [
            { content: "Tarefa 1", id: 1 },
            { content: "Tarefa 2", id: 2 },
            { content: "Tarefa 3", id: 3 }
        ]
    },
    inProgress: {
        name: 'In Progress',
        items: []
    },
    done: {
        name: 'Done',
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
        <BoardContainer>
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
        </BoardContainer>
    );
};

const BoardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export { KanbanBoard };
