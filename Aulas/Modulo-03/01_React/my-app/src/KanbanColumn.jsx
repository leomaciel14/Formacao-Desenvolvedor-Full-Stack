import React, { useState } from 'react';
import styled from 'styled-components';
import { Task } from './Task';
import { AiOutlinePlus } from 'react-icons/ai';

export const KanbanColumn = ({ columnId, column, addTask, removeTask, moveTask }) => {
    const [newTaskContent, setNewTaskContent] = useState('');

    const handleAddTask = () => {
        if (newTaskContent.trim() !== '') {
            addTask(columnId, newTaskContent);
            setNewTaskContent('');
        }
    };

    return (
        <ColumnContainer>
            <ColumnHeader>
                <h2>{column.name}</h2>
                <AddTaskContainer>
                    <AddTaskInput
                        type="text"
                        value={newTaskContent}
                        onChange={(e) => setNewTaskContent(e.target.value)}
                        placeholder="Add new task"
                    />
                    <AddTaskButton onClick={handleAddTask}>
                        <AiOutlinePlus />
                    </AddTaskButton>
                </AddTaskContainer>
            </ColumnHeader>
            <TasksContainer>
                {column.items.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        columnId={columnId}
                        removeTask={removeTask}
                        moveTask={moveTask}
                    />
                ))}
            </TasksContainer>
        </ColumnContainer>
    );
};

const ColumnContainer = styled.div`
  width: 30%;
  background-color: #f4f5f7;
  border-radius: 5px;
  padding: 20px;
  text-align: left;
`;

const ColumnHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddTaskContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const AddTaskInput = styled.input`
  flex: 1;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const AddTaskButton = styled.button`
  background-color: #5aac44;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
`;

const TasksContainer = styled.div`
  margin-top: 20px;
`;
