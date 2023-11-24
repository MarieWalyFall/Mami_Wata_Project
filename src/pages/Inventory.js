import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserData } from '../components/Data/Data';

import Navbar from "../components/Navbar/NavbarVertical";

const Inventory = () => {

    const { userId } = useParams();
    const user = UserData.find((user) => user.id === userId);
  
    if (!user) {
      console.log(userId);
      return <div>Utilisateur non trouvé</div>;
    }
    if(user.authority_name != 'admin' && user.authority_name != 'pharmacien'){
      return <div>Utilisateur non autorisé</div>;
    }

    return ( 
        <div className="flex">
            <Navbar page="inventory" userId={userId}/>
            <div className="text-3xl m-32">
                <h1>WORK IN PROGRESS</h1>
            </div>

        </div>
    );
}
 
export default Inventory;