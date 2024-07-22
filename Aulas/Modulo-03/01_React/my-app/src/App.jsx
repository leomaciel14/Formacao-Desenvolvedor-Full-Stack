import React from 'react';
import styled from 'styled-components';
import { KanbanBoard } from './KanbanBoard';
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

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export default App;