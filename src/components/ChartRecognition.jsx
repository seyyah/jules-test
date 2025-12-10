import React from 'react';

const ChartRecognition = () => (
  <section className="bg-card-light dark:bg-card-dark p-5 rounded-lg shadow-sm text-center flex flex-col items-center">
    <span className="material-icons text-primary text-4xl mb-3">document_scanner</span>
    <h2 className="text-base font-semibold text-text-light dark:text-text-dark mb-1">Akademik makaleden grafik tanıma</h2>
    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">Grafik ekran görüntüsünü yükleyerek analizi yeniden oluşturun</p>
    <button className="w-full flex items-center justify-center space-x-2 bg-primary text-white font-semibold py-3 px-4 rounded-lg">
      <span className="material-icons text-xl">upload_file</span>
      <span>Ekran Görüntüsü Yükle</span>
    </button>
  </section>
);

export default ChartRecognition;
