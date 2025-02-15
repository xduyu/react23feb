import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import './App.css'; // Подключаем CSS (если есть)

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Info />
    </div>
  );
}

export default App;