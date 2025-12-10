import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ChartRecognition from './components/ChartRecognition';
import ChartGrid from './components/ChartGrid';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
      <div className="min-h-screen p-4 flex flex-col space-y-6">
        <Header />
        <Navigation />
        <main className="flex-grow flex flex-col space-y-6">
          <ChartRecognition />
          <ChartGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
