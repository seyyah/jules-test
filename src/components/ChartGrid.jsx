import React from 'react';

const ChartGrid = () => (
  <section>
    <h2 className="text-lg font-bold mb-4">Veri setine uygun grafikler</h2>
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-card-light dark:bg-card-dark rounded-lg shadow-sm h-32">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <span className="material-icons text-primary">bar_chart</span>
        </div>
        <p className="text-sm font-medium text-center">Tanımlayıcı İstatistikler</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-card-light dark:bg-card-dark rounded-lg shadow-sm h-32">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <span className="material-icons text-primary">pie_chart</span>
        </div>
        <p className="text-sm font-medium text-center">Tek Grup Analizi</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-card-light dark:bg-card-dark rounded-lg shadow-sm h-32">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <span className="material-icons text-primary">bubble_chart</span>
        </div>
        <p className="text-sm font-medium text-center">Çoklu Grup Analizi</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-card-light dark:bg-card-dark rounded-lg shadow-sm h-32">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <span className="material-icons text-primary">multiline_chart</span>
        </div>
        <p className="text-sm font-medium text-center">Bağımlı Veri Analizi</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-card-light dark:bg-card-dark rounded-lg shadow-sm h-32">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <span className="material-icons text-primary">show_chart</span>
        </div>
        <p className="text-sm font-medium text-center">Korelasyon Analizi</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-card-light dark:bg-card-dark rounded-lg shadow-sm h-32">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <span className="material-icons text-primary">scatter_plot</span>
        </div>
        <p className="text-sm font-medium text-center">Lojistik Regresyon</p>
      </div>
    </div>
  </section>
);

export default ChartGrid;
