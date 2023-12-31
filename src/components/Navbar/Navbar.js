import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { UserData } from "../Data/Data";

import ellipse from './../../assets/images/Ellipse 24.png';

const Navbar = ({page, userId}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const user = UserData.find((user) => user.id === userId);
  
  if (!user) {
      console.log(userId);
      return <div>Utilisateur non trouvé</div>;
  }

  let ticket = false

  if(user.authority_name === 'caissier') {
    ticket = true
  }


  return (
    <div className='flex items-center text-center'>        
      <div className="w-1/4 max-w-screen-xl flex flex-wrap items-center justify-between mr-auto p-4">
        <button
          type="button"
          className="absolute inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              className="w-5 h-5 text-greenApple"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-greenApple"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div className={`w-full ${menuOpen ? '' : 'hidden'}`} id="navbar-hamburger">
        <ul className="flex absolute mt-6 flex-col font-medium rounded-lg  dark:bg-gray-800 dark:border-gray-700">
              <li className='bg-white hover:bg-gray-100'>
                <Link to={`/ticketSale/${userId}`} className={`block py-2 pl-3 pr-4 border text-${page == "ticketSale"? 'greenApple' : 'gray-600'} ${user.authority_name == "caissier"? '' : 'hidden'}`} aria-current="page">
                  Vente de tickets
                </Link>
              </li>
              <li className='bg-white hover:bg-gray-100'>
                <Link to={`/medicationSale/${userId}`} className={`block py-2 pl-3 pr-4 border text-${page == "medicationSale"? 'greenApple' : 'gray-600'} ${user.authority_name == "dépositaire"? '' : 'hidden'}`} aria-current="page">
                  Vente de medicaments
                </Link>
              </li>
              <li className='bg-white hover:bg-gray-100'>
                <Link to={`/history/${userId}`} className={`block py-2 pl-3 pr-4 border text-${page == "history"? 'greenApple' : 'gray-600'}`} aria-current="page">
                  Historique
                </Link>
              </li>
              <li className='bg-white hover:bg-gray-100'>
                <Link to={`/dashboard/${userId}`}className={`block py-2 pl-3 pr-4 border text-${page == "dashboard"? 'greenApple' : 'gray-600'}`} aria-current="page">
                  Tableau de bord
                </Link>
              </li>
          </ul>        
        </div>
      </div>
      <div className='flex flex-col items-center text-center justify-center mt-6'>
        { ticket ? 
          (
            <svg width="40" height="40" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M62.5086 9.11055L8.77273 62.8465C4.19542 67.4238 4.19611 74.8715 8.77328 79.4486L16.4612 87.1366L18.9229 89.5983L21.7085 87.5116C23.3189 86.3052 25.6058 86.4677 27.028 87.8898C28.4491 89.311 28.6122 91.5974 27.4064 93.2071L25.3175 95.9928L27.7804 98.4557L35.4694 106.145C40.0457 110.721 47.4933 110.722 52.0707 106.144L105.807 52.4085C110.384 47.8312 110.383 40.3833 105.807 35.8071L98.1692 28.1692L95.4588 25.4588L92.6248 28.0398C91.0142 29.5064 88.5457 29.4497 87.007 27.911C85.4684 26.3724 85.4118 23.904 86.8785 22.2912L89.4572 19.4572L86.7481 16.7481L79.1111 9.1111C74.5338 4.53379 67.0861 4.53311 62.5086 9.11055ZM83.9081 19.5881C81.0171 22.7654 81.0974 27.6815 84.167 30.7511C87.2367 33.8208 92.1528 33.9011 95.329 31.0091L102.967 38.647C105.982 41.6623 105.982 46.5524 102.966 49.5683L49.2305 103.304C46.2146 106.32 41.3246 106.32 38.3093 103.305L30.6203 95.6156C32.996 92.4456 32.7513 87.9331 29.868 85.0498C26.9848 82.1667 22.4724 81.922 19.3013 84.2966L11.6133 76.6086C8.59702 73.5923 8.59702 68.7022 11.6128 65.6865L65.3487 11.9506C68.3644 8.93485 73.2547 8.93471 76.2709 11.951L83.9081 19.5881Z" fill="#31D55F"/>
              <path d="M50.7699 85.0739L48.8911 86.9527L53.7913 91.8528L55.67 89.9741L50.7699 85.0739Z" fill="#31D55F"/>
              <path d="M42.1603 76.4651L40.2815 78.3439L45.1816 83.2441L47.0604 81.3653L42.1603 76.4651Z" fill="#31D55F"/>
              <path d="M33.5507 67.8553L31.6719 69.7341L36.573 74.6352L38.4518 72.7564L33.5507 67.8553Z" fill="#31D55F"/>
              <path d="M24.9428 59.2477L23.064 61.1265L27.9641 66.0266L29.8429 64.1478L24.9428 59.2477Z" fill="#31D55F"/>
            </svg>
          ) : (
            <svg width="40" height="40" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M101 31.6259H69.3693V0.00469971H31.6307V31.6264H0V69.3645H31.6307V100.995H69.3688V69.3645H101L101 31.6259Z" fill="#31D55F"/>
            </svg>
          )
        }
        <div className={`${page == 'ticketSale' || page == 'medicationSale' ? '' : 'hidden'} flex flex-col items-center text-center justify-center`}>
          <span className='font-bold w-full text-xl raleway'>Nouvel Achat de {ticket ? 'Ticket' : 'Medicament'} </span>
          <span className='text-gray-400 text-sm'>Remplissez les informations suivantes </span>
        </div>
        <div className={`${page == 'history' ? '' : 'hidden'} flex flex-col items-center text-center justify-center`}>
          <span className={`font-bold w-full text-xl raleway`}>Historique</span>
          <span className='text-gray-400 text-sm'>Visualisez les ventes </span>
        </div>
        <div className={`${page == 'dashboard' ? '' : 'hidden'} flex flex-col items-center text-center justify-center`}>
          <span className={`font-bold w-full text-xl raleway`}>Tableau de bord</span>
          <span className='text-gray-400 text-sm'>Visualisez le tableau de bord</span>
        </div>
        <div className={`${page == 'account' ? '' : 'hidden'} flex flex-col items-center text-center justify-center`}>
          <span className={`font-bold w-full text-xl raleway`}>Mon compte</span>
          <span className='text-gray-400 text-sm'>Visualisez vos informations</span>
        </div>
      </div>
      <div className="w-1/4 flex items-center ml-auto">
        <button
          type="button"
          className="relative p-3 mx-3 text-sm font-medium text-white border border-gray-200 shadow rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300"
        >
            <svg width="16" height="16" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 0H3C2.20435 0 1.44129 0.31607 0.87868 0.878679C0.31607 1.44129 0 2.20435 0 3V30L4.5 25.5L7.5 30L12 25.5L16.5 30L19.5 25.5L24 30V3C24 2.20435 23.6839 1.44129 23.1213 0.878679C22.5587 0.31607 21.7956 0 21 0ZM12 21H6C5.60218 21 5.22064 20.842 4.93934 20.5607C4.65804 20.2794 4.5 19.8978 4.5 19.5C4.5 19.1022 4.65804 18.7206 4.93934 18.4393C5.22064 18.158 5.60218 18 6 18H12C12.3978 18 12.7794 18.158 13.0607 18.4393C13.342 18.7206 13.5 19.1022 13.5 19.5C13.5 19.8978 13.342 20.2794 13.0607 20.5607C12.7794 20.842 12.3978 21 12 21ZM12 15H6C5.60218 15 5.22064 14.842 4.93934 14.5607C4.65804 14.2794 4.5 13.8978 4.5 13.5C4.5 13.1022 4.65804 12.7206 4.93934 12.4393C5.22064 12.158 5.60218 12 6 12H12C12.3978 12 12.7794 12.158 13.0607 12.4393C13.342 12.7206 13.5 13.1022 13.5 13.5C13.5 13.8978 13.342 14.2794 13.0607 14.5607C12.7794 14.842 12.3978 15 12 15ZM18 21H16.5C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18H18C18.3978 18 18.7794 18.158 19.0607 18.4393C19.342 18.7206 19.5 19.1022 19.5 19.5C19.5 19.8978 19.342 20.2794 19.0607 20.5607C18.7794 20.842 18.3978 21 18 21ZM18 15H16.5C16.1022 15 15.7206 14.842 15.4393 14.5607C15.158 14.2794 15 13.8978 15 13.5C15 13.1022 15.158 12.7206 15.4393 12.4393C15.7206 12.158 16.1022 12 16.5 12H18C18.3978 12 18.7794 12.158 19.0607 12.4393C19.342 12.7206 19.5 13.1022 19.5 13.5C19.5 13.8978 19.342 14.2794 19.0607 14.5607C18.7794 14.842 18.3978 15 18 15ZM18 7.5H6C5.60218 7.5 5.22064 7.34196 4.93934 7.06066C4.65804 6.77935 4.5 6.39782 4.5 6C4.5 5.60217 4.65804 5.22064 4.93934 4.93934C5.22064 4.65804 5.60218 4.5 6 4.5H18C18.3978 4.5 18.7794 4.65804 19.0607 4.93934C19.342 5.22064 19.5 5.60217 19.5 6C19.5 6.39782 19.342 6.77935 19.0607 7.06066C18.7794 7.34196 18.3978 7.5 18 7.5Z" fill="#323232"/>
            </svg> 
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            2
        </div>
        </button>
        
        <button
          type="button"
          className="relative p-3 mx-3 text-sm font-medium text-white border border-gray-200 shadow rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300"
        >
        <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8753 6.99532C12.1799 5.05093 14.4346 3 17.9999 3C21.5653 3 23.8201 5.05093 25.1246 6.99532C26.411 8.91261 26.8877 10.8711 26.9566 11.1714C26.9662 11.2137 26.9731 11.2489 26.9779 11.2731L29.2799 23.1432C29.8186 25.9204 27.6913 28.5 24.8623 28.5H11.1377C8.30867 28.5 6.18137 25.9204 6.71999 23.1432L9.02207 11.2731C9.02677 11.2489 9.03373 11.2137 9.04339 11.1714C9.11212 10.8711 9.58886 8.91261 10.8753 6.99532Z" fill="#323232"/>
            <path d="M12.7703 30C13.1482 30.721 13.727 31.4747 14.6046 32.0508C15.5192 32.6513 16.6694 33 18.0695 33C19.4698 33 20.62 32.6513 21.5347 32.0508C22.4122 31.4747 22.991 30.721 23.3689 30H12.7703Z" fill="#323232"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9393 3.43933C25.3536 4.02513 25.3536 4.97487 25.9393 5.56066C27.1785 6.79986 27.8323 8.01417 28.5448 10.8638C28.7457 11.6675 29.56 12.1561 30.3637 11.9552C31.1674 11.7543 31.6561 10.9399 31.4553 10.1362C30.6676 6.98583 29.8215 5.20014 28.0606 3.43933C27.4749 2.85356 26.5251 2.85356 25.9393 3.43933Z" fill="#323232"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0605 3.43933C10.6463 4.02513 10.6463 4.97487 10.0605 5.56066C8.82133 6.79986 8.16748 8.01417 7.45507 10.8638C7.25416 11.6675 6.43975 12.1561 5.63607 11.9552C4.83237 11.7543 4.34373 10.9399 4.54465 10.1362C5.33224 6.98583 6.17841 5.20014 7.93921 3.43933C8.52499 2.85356 9.47473 2.85356 10.0605 3.43933Z" fill="#323232"/>
        </svg>    
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-greenApple border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
          3
        </div>
        </button>
        <Link to={`/account/${user.id}`}>
          <button
            type="button"
            className="text-sm p-3 rounded-full focus:ring-2 focus:ring-gray-300"
            id="user-menu-button"
          >
            <img className='w-16' src={ellipse} alt="" />
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
