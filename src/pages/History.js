import React, { useState, useEffect } from 'react';

import PharmacieHsitory from '../components/PharmacieHistory';
import ConsultationHistory from '../components/ConsultationHistory';

function History({ whichPage, allOpen }) {
  const [activeTab, setActiveTab] = useState(whichPage);

  useEffect(() => {
    setActiveTab(whichPage);
  }, [whichPage]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li className="mr-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === 'pharmacie'
                ? 'border-indigo-500'
                : allOpen
                ? 'border-transparent'
                : 'hidden'
            }`}
            id="pharmacie-tab"
            data-tabs-target="#pharmacie"
            type="button"
            role="tab"
            aria-controls="pharmacie"
            aria-selected={activeTab === 'pharmacie'}
            onClick={() => handleTabClick('pharmacie')}
          >
            Pharmacie
          </button>
        </li>
        <li className="mr-2" role="presentation">
          <button
           className={`inline-block p-4 border-b-2 rounded-t-lg ${
            activeTab === 'consultation'
              ? 'border-indigo-500'
              : allOpen
              ? 'border-transparent'
              : 'hidden'
          } hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
            id="consultation-tab"
            data-tabs-target="#consultation"
            type="button"
            role="tab"
            aria-controls="consultation"
            aria-selected={activeTab === 'consultation'}
            onClick={() => handleTabClick('consultation')}
          >
            Consultation
          </button>
        </li>
      </ul>

      <div id="myTabContent">
        {activeTab === 'pharmacie' && <PharmacieHsitory />}
        {activeTab === 'consultation' && <ConsultationHistory />}
      </div>
    </div>
  );
}

export default History;
