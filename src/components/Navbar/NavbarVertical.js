import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { UserData } from "../Data/Data";

import pharmacieSign from './../../assets/images/pharmacy-sign.png';
import ellipse from './../../assets/images/Ellipse 24.png';

const NavbarVertical = ({ page, userId }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const user = UserData.find((user) => user.id === userId);
  
  if (!user) {
      console.log(userId);
      return <div>Utilisateur non trouvé</div>;
  }


  return (
    <div className="bg-gray-100 w-1/10 h-screen text-white py-4 border sticky top-0">
      <div className="text-2xl font-semibold flex items-center justify-center pl-4 mb-8 text-greenApple">
        <img src={pharmacieSign} alt="" className="mr-2" />
      </div>
      <nav>
        <ul>
            <li>
              <Link to={`/dashboard/${user.id}`} className={`block py-2 pl-3 pr-4 border text-${page == "dashboard"? 'greenApple' : 'gray-600'} hover:bg-gray-100 ` } aria-current="page">
                Tableau de bord
              </Link>
            </li>
            <li>
              <Link to={`/history/${user.id}`} className={`block py-2 pl-3 pr-4 border text-${page == "history"? 'greenApple' : 'gray-600'} hover:bg-gray-100 `} aria-current="page">
                Historique
              </Link>
            </li>
            <li>
              <Link to={`/patient/${user.id}`} className={`block py-2 pl-3 pr-4 border text-${page == "patient"? 'greenApple' : 'gray-600'} ${user.authority_name == "admin"? '' : 'hidden'} hover:bg-gray-100 `} aria-current="page">
                Patients
              </Link>
            </li>
            <li>
              <Link to={`/user/${user.id}`} className={`block py-2 pl-3 pr-4 border text-${page == "user"? 'greenApple' : 'gray-600'} ${user.authority_name == "admin"? '' : 'hidden'} hover:bg-gray-100 `} aria-current="page">
                Utilisateurs
              </Link>
            </li>
            <li>
              <Link to={`/conditioning/${user.id}`} className={`block py-2 pl-3 pr-4 border text-${page == "conditioning"? 'greenApple' : 'gray-600'} ${user.authority_name == "admin" || user.authority_name == "pharmacien" ? '' : 'hidden'} hover:bg-gray-100 `} aria-current="page">
                Conditionnements
              </Link>
            </li>
            <li>
              <Link to={`/listMedication/${user.id}`} className={`block py-2 pl-3 pr-4 border text-${page == "listMedication"? 'greenApple' : 'gray-600'} ${user.authority_name == "admin" || user.authority_name == "pharmacien" ? '' : 'hidden'} hover:bg-gray-100 `} aria-current="page">
                Médicaments
              </Link>
            </li>
            <li>
              <Link to={`/inventory/${user.id}`} className={`block py-2 pl-3 pr-4 border text-${page == "inventory"? 'greenApple' : 'gray-600'} ${user.authority_name == "admin" || user.authority_name == "pharmacien" ? '' : 'hidden'} hover:bg-gray-100 `} aria-current="page">
                Inventaire
              </Link>
            </li>
            <li>
              <Link to={`/mutual/${user.id}`} className={`block py-2 pl-3 pr-4 border text-${page == "mutual"? 'greenApple' : 'gray-600'} ${user.authority_name == "admin" || user.authority_name == "pharmacien" ? '' : 'hidden'} hover:bg-gray-100 `} aria-current="page">
                Mutuelles
              </Link>
            </li>
            <li>
              <Link to={`/service/${user.id}`} className={`block py-2 pl-3 pr-4 border text-${page == "service"? 'greenApple' : 'gray-600'} ${user.authority_name == "admin" || user.authority_name == "pharmacien" ? '' : 'hidden'} hover:bg-gray-100 `} aria-current="page">
                Services
              </Link>
            </li>
          </ul>        
      </nav>
      <Link to={`/account/${user.id}`} className={`block py-2 pl-3 pr-4 border hover:bg-gray-100 `} aria-current="page">
        <button
          type="button"
          className="text-sm p-3 rounded-full flex justify-center items-center mt-12"
          id="user-menu-button"
        >
          <img className='w-10' src={ellipse} alt="" />
          <span className='text-greenApple pl-2'> {user.first_name} {user.last_name} </span>
        </button>
      </Link>

    </div>
  );
};

export default NavbarVertical;
