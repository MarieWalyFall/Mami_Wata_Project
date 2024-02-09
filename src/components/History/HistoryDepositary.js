import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UserData } from "../Data/Data";
import PharmacieHistory from './PharmacieHistory';
import ConsultationHistory from './ConsultationHistory';

import Navbar from '../Navbar/Navbar';

function VerifiedHistory() {
   
  const { userId } = useParams();
  const user = UserData.find((user) => user.id === userId);

  let whichPage = 'pharmacie';
  let allOpen = false;
  

  switch (user.authority_name) {
    case 'caissier':
      whichPage = 'consultation';
      allOpen = true;
      break;
    default:
      break;
  }

  const [activeTab, setActiveTab] = useState(whichPage);

  useEffect(() => {
    setActiveTab(whichPage);
  }, [whichPage]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };


  return (
    <div className="mb-4">
      <Navbar page="history" userId={userId}/>
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li className=" mx-4" role="presentation">
          <button
            className={`text-center inline-flex items-center p-4 border-b-2 ${
              activeTab === 'pharmacie'
                ? 'border-greenApple'
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
            <svg width="15" height="15" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M101 31.6259H69.3693V0.00469971H31.6307V31.6264H0V69.3645H31.6307V100.995H69.3688V69.3645H101L101 31.6259Z" fill="#31D55F"/>
            </svg>
            <span className='ml-1 lato text-xl'>Pharmacie</span>
           
          </button>
        </li>
        <li className="mr-2" role="presentation">
          <button
           className={`text-center inline-flex items-center p-4 border-b-2 ${
            activeTab === 'consultation'
              ? 'border-greenApple'
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
            <svg width="20" height="20" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M62.5086 9.11055L8.77273 62.8465C4.19542 67.4238 4.19611 74.8715 8.77328 79.4486L16.4612 87.1366L18.9229 89.5983L21.7085 87.5116C23.3189 86.3052 25.6058 86.4677 27.028 87.8898C28.4491 89.311 28.6122 91.5974 27.4064 93.2071L25.3175 95.9928L27.7804 98.4557L35.4694 106.145C40.0457 110.721 47.4933 110.722 52.0707 106.144L105.807 52.4085C110.384 47.8312 110.383 40.3833 105.807 35.8071L98.1692 28.1692L95.4588 25.4588L92.6248 28.0398C91.0142 29.5064 88.5457 29.4497 87.007 27.911C85.4684 26.3724 85.4118 23.904 86.8785 22.2912L89.4572 19.4572L86.7481 16.7481L79.1111 9.1111C74.5338 4.53379 67.0861 4.53311 62.5086 9.11055ZM83.9081 19.5881C81.0171 22.7654 81.0974 27.6815 84.167 30.7511C87.2367 33.8208 92.1528 33.9011 95.329 31.0091L102.967 38.647C105.982 41.6623 105.982 46.5524 102.966 49.5683L49.2305 103.304C46.2146 106.32 41.3246 106.32 38.3093 103.305L30.6203 95.6156C32.996 92.4456 32.7513 87.9331 29.868 85.0498C26.9848 82.1667 22.4724 81.922 19.3013 84.2966L11.6133 76.6086C8.59702 73.5923 8.59702 68.7022 11.6128 65.6865L65.3487 11.9506C68.3644 8.93485 73.2547 8.93471 76.2709 11.951L83.9081 19.5881Z" fill="#31D55F"/>
              <path d="M50.7699 85.0739L48.8911 86.9527L53.7913 91.8528L55.67 89.9741L50.7699 85.0739Z" fill="#31D55F"/>
              <path d="M42.1603 76.4651L40.2815 78.3439L45.1816 83.2441L47.0604 81.3653L42.1603 76.4651Z" fill="#31D55F"/>
              <path d="M33.5507 67.8553L31.6719 69.7341L36.573 74.6352L38.4518 72.7564L33.5507 67.8553Z" fill="#31D55F"/>
              <path d="M24.9428 59.2477L23.064 61.1265L27.9641 66.0266L29.8429 64.1478L24.9428 59.2477Z" fill="#31D55F"/>
            </svg>
            <span className='ml-1 lato text-xl'>Consultation</span>
            
          </button>
        </li>
      </ul>

      <div id="myTabContent">
        {activeTab === 'pharmacie' && <PharmacieHistory userId={userId}/>}
        {activeTab === 'consultation' && <ConsultationHistory userId={userId}/>}
      </div>
    </div>
  );
}

export default VerifiedHistory;
