import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import pharmacieSign from './../assets/images/pharmacy-sign.png';

const Navbar = ({ page }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-100 w-1/10 h-screen text-white py-4 border sticky top-0">
    <div className="text-2xl font-semibold flex items-center justify-center pl-4 mb-8 text-greenApple">
      <img src={pharmacieSign} alt="" className="mr-2" />
    </div>
    <nav>
      <ul>
          <li>
            <Link to="/dashboard" className={`block py-2 pl-3 pr-4 border text-${page == "dashboard"? 'greenApple' : 'gray-600'} hover:bg-gray-100 `} aria-current="page">
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link to="/history/pharmacie/true" className={`block py-2 pl-3 pr-4 border text-${page == "history/pharmacie/true"? 'greenApple' : 'gray-600'} hover:bg-gray-100 `} aria-current="page">
              Historique
            </Link>
          </li>
          <li>
            <Link to="/conditioning" className={`block py-2 pl-3 pr-4 border text-${page == "conditioning"? 'greenApple' : 'gray-600'} hover:bg-gray-100 `} aria-current="page">
              Conditionnements
            </Link>
          </li>
          <li>
            <Link to="/listMedication" className={`block py-2 pl-3 pr-4 border text-${page == "listMedication"? 'greenApple' : 'gray-600'} hover:bg-gray-100 `} aria-current="page">
              Médicaments
            </Link>
          </li>
          <li>
            <Link to="/inventory" className={`block py-2 pl-3 pr-4 border text-${page == "inventory"? 'greenApple' : 'gray-600'} hover:bg-gray-100 `} aria-current="page">
              Inventaire
            </Link>
          </li>
          <li>
            <Link to="/mutual" className={`block py-2 pl-3 pr-4 border text-${page == "mutual"? 'greenApple' : 'gray-600'} hover:bg-gray-100 `} aria-current="page">
              Mutuelles
            </Link>
          </li>
          <li>
            <Link to="/service" className={`block py-2 pl-3 pr-4 border text-${page == "service"? 'greenApple' : 'gray-600'} hover:bg-gray-100 `} aria-current="page">
              Services
            </Link>
          </li>
        </ul>        
      </nav>
    </div>
  );
};

export default Navbar;
