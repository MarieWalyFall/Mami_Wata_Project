import React, { useState } from 'react';
import pharmacieSign from './../assets/images/pharmacy-sign.png';

const Navbar = ({ ticket }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-100 w-1/10 h-screen text-white py-4 border">
    <div className="text-2xl font-semibold flex items-center justify-center pl-4 mb-8 text-greenApple">
      <img src={pharmacieSign} alt="" className="mr-2" />
    </div>
    <nav>
      <ul >
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 border text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Tableau de bord</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 border text-gray-600 hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Historique</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 border text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Conditionnements</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 border text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Médicaments</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 border text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Mutuelles</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 border text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
          </li>
        </ul>        
      </nav>
    </div>
  );
};

export default Navbar;
