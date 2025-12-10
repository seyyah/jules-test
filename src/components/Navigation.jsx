import React from 'react';

const Navigation = () => (
  <nav className="overflow-x-auto whitespace-nowrap pb-2 -mx-4 px-4">
    <div className="flex items-center space-x-4 border-b border-border-light dark:border-border-dark text-sm text-text-secondary-light dark:text-text-secondary-dark">
      <a className="flex items-center space-x-2 py-3 px-2" href="#">
        <span className="material-icons text-base">grid_view</span>
        <span>Genel Bakış</span>
      </a>
      <a className="flex items-center space-x-2 py-3 px-2" href="#">
        <span className="material-icons text-base">dataset</span>
        <span>Veri Seti</span>
      </a>
      <a className="flex items-center space-x-2 py-3 px-2" href="#">
        <span className="material-icons text-base">analytics</span>
        <span>Analiz</span>
      </a>
      <a className="flex items-center space-x-2 py-3 px-2 text-primary border-b-2 border-primary font-semibold" href="#">
        <span className="material-icons text-base">bubble_chart</span>
        <span>Grafik</span>
      </a>
      <a className="flex items-center space-x-2 py-3 px-2" href="#">
        <span className="material-icons text-base">group</span>
        <span>Üyeler</span>
      </a>
      <a className="flex items-center space-x-2 py-3 px-2" href="#">
        <span className="material-icons text-base">tune</span>
        <span>Ayarlar</span>
      </a>
    </div>
  </nav>
);

export default Navigation;
