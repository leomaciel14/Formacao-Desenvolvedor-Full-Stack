import React, { useState } from 'react';
import styled from 'styled-components';
import { KanbanBoard } from './components/KanbanBoard';
import './App.css';

const App = () => {
  return (
    <AppContainer>
      <header className="App-header">
        <h1>React Kanban Board</h1>
      </header>
      <main>
        <KanbanBoard />
      </main>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;
