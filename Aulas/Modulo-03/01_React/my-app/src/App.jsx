import React, { useState, useEffect } from 'react';
import { KanbanBoard } from './KanbanBoard';
import TextAreaMirror from './TextAreaMirror';
import CookieClicker from './CookieClicker'
import { AiFillCaretDown } from 'react-icons/ai';
import { AiOutlineLoading } from 'react-icons/ai';
import './App.css';
import './index.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('kanban');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a abertura do menu

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const renderContent = () => {
    if (loading) return <div className='flex align-items-center items-center'>
      <div className='max-w-[20rem] m-auto'>
        <button type="button" className='p-2 flex flex-row align-items-center align-center text-black' disabled>
          <AiOutlineLoading
            className='text-center animate-spin h-8 w-8 mr-0'></AiOutlineLoading>
          <p className='ml-2'>
            Carregando...
          </p>
        </button>
      </div>
    </div>;
    if (error) return <p>Error loading content: {error}</p>;

    switch (activeTab) {
      case 'app0':
        return <KanbanBoard />;
      case 'app1':
        return <TextAreaMirror />;
      case 'app2':
        return <CookieClicker />;
      default:
        return null;
    }
  };

  return (
    <div className="text-center">
      <header className="mb-4 bg-purple-900 pt-6 rounded-b-3xl w-full ">
        {/* Menu hamburguer */}
        <div className="flex-row justify-between justify-items-center items-center px-4 sm:px-6">
          <h1 className="text-5xl font-bold text-center mb-8 text-white">Aplicativos <br></br>React</h1>

          <div className='flex items-center justify-center'>
            <AiFillCaretDown
              className={`animate-bounce p-1 mb-4 text-white items-center text-center cursor-pointer block sm:hidden ${isMenuOpen ? 'rotate-180' : ''}`}
              size={30}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

        </div>

        {/* Menu de navegação */}
        <nav className={`pb-6 ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
          <button
            className={`mx-2 px-6 py-3 rounded-full ${activeTab === 'app0' ? 'bg-rose-500 text-white' : 'bg-white'
              }`}
            onClick={() => {
              setActiveTab('app0');
              setIsMenuOpen(false); // Fechar o menu ao clicar em um item
            }}
          >
            To Do List
          </button>
          <button
            className={`mx-2 px-6 py-3 rounded-full ${activeTab === 'app1' ? 'bg-rose-500 text-white' : 'bg-white'
              }`}
            onClick={() => {
              setActiveTab('app1');
              setIsMenuOpen(false); // Fechar o menu ao clicar em um item
            }}
          >
            Text Write Speed
          </button>
          <button
            className={`mx-2 px-6 py-3 rounded-full ${activeTab === 'app2' ? 'bg-rose-500 text-white' : 'bg-white'
              }`}
            onClick={() => {
              setActiveTab('app2');
              setIsMenuOpen(false); // Fechar o menu ao clicar em um item
            }}
          >
            Cookie Cliker
          </button>
        </nav>
      </header>
      <main>{renderContent()}</main>
    </div>
  );
};

export default App;
