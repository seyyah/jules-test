import React from 'react';

const Header = () => (
  <header className="flex items-center justify-between">
    <button className="p-2 -ml-2">
      <span className="material-icons">arrow_back</span>
    </button>
    <h1 className="text-lg font-bold">Module 01: DEPENDENT</h1>
    <button className="p-2 -mr-2">
      <span className="material-icons text-blue-500">settings</span>
    </button>
  </header>
);

export default Header;
