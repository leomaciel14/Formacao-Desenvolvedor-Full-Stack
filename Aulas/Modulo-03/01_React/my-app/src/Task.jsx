import React, { useState } from "react";
import styled from "styled-components";
import {
    AiOutlineArrowDown,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineArrowUp,
    AiOutlineDelete,
    AiOutlineEdit,
} from "react-icons/ai";

const Task = (
    {
        task,
        columnId,
        removeTask,
        moveTask,
        onEdit,
        onSave,
        onCancelEdit,
        editing,
    },
) => {
    const [newContent, setNewContent] = useState(task.content);

    const handleRemove = () => {
        removeTask(columnId, task.id);
    };

    const handleMoveRight = () => {
        if (columnId === "todo") moveTask(columnId, "inProgress", task.id);
        if (columnId === "inProgress") moveTask(columnId, "done", task.id);
    };

    const handleMoveLeft = () => {
        if (columnId === "done") moveTask(columnId, "inProgress", task.id);
        if (columnId === "inProgress") moveTask(columnId, "todo", task.id);
    };

    return (
        <TaskContainer>
            {editing
                ? (
                    <EditingContainer>
                        <EditInput
                            type="text"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                        />
                        <SaveButton onClick={() => onSave(task.id, newContent)}>
                            Save
                        </SaveButton>
                        <CancelButton onClick={onCancelEdit}>
                            Cancel
                        </CancelButton>
                    </EditingContainer>
                )
                : (
                    <>
                        <TaskContent>{task.content}</TaskContent>
                        <TaskActions>
                            <ActionButton
                                onClick={handleMoveLeft}
                                disabled={columnId === "todo"}
                                className="hidden sm:flex"
                            >
                                <AiOutlineArrowLeft />
                            </ActionButton>
                            <ActionButton
                                onClick={handleMoveRight}
                                disabled={columnId === "done"}
                                className="hidden sm:flex"
                            >
                                <AiOutlineArrowRight />
                            </ActionButton>
                            <ActionButton onClick={onEdit}>
                                <AiOutlineEdit />
                            </ActionButton>
                            <ActionButton onClick={handleRemove}>
                                <AiOutlineDelete />
                            </ActionButton>
                            {/* Setas para cima/baixo em telas pequenas */}
                            <ActionButton
                                onClick={handleMoveLeft}
                                disabled={columnId === "todo"}
                                className="sm:hidden"
                            >
                                <AiOutlineArrowUp />
                            </ActionButton>
                            <ActionButton
                                onClick={handleMoveRight}
                                disabled={columnId === "done"}
                                className="sm:hidden"
                            >
                                <AiOutlineArrowDown />
                            </ActionButton>
                        </TaskActions>
                    </>
                )}
        </TaskContainer>
    );
};

export default Task;

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

const EditingContainer = styled.div`
    display: flex;
    gap: 5px;
    flex: 1;
`;

const EditInput = styled.input`
    flex: 1;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const SaveButton = styled.button`
    background-color: #5aac44;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
`;

const CancelButton = styled.button`
    background-color: #ccc;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
`;