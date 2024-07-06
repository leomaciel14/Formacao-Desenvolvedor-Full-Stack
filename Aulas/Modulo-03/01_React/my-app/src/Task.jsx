import React from 'react';
import styled from 'styled-components';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

export const Task = ({ task, columnId, removeTask, moveTask }) => {
    const handleRemove = () => {
        removeTask(columnId, task.id);
    };

    const handleMoveRight = () => {
        if (columnId === 'todo') moveTask(columnId, 'inProgress', task.id);
        if (columnId === 'inProgress') moveTask(columnId, 'done', task.id);
    };

    const handleMoveLeft = () => {
        if (columnId === 'done') moveTask(columnId, 'inProgress', task.id);
        if (columnId === 'inProgress') moveTask(columnId, 'todo', task.id);
    };

    return (
        <TaskContainer>
            <TaskContent>{task.content}</TaskContent>
            <TaskActions>
                <ActionButton onClick={handleMoveLeft} disabled={columnId === 'todo'}>
                    <AiOutlineArrowLeft />
                </ActionButton>
                <ActionButton onClick={handleMoveRight} disabled={columnId === 'done'}>
                    <AiOutlineArrowRight />
                </ActionButton>
                <ActionButton onClick={handleRemove}>
                    <AiOutlineDelete />
                </ActionButton>
            </TaskActions>
        </TaskContainer>
    );
};

const TaskContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskContent = styled.div`
  flex: 1;
`;

const TaskActions = styled.div`
  display: flex;
  gap: 5px;
`;

const ActionButton = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #eee;
  }
`;
