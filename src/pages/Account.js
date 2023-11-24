import React from 'react';
import { useParams } from 'react-router-dom';

import AccountAdmin from '../components/Account/AccountAdmin';
import AccountDepositary from '../components/Account/AccountDepositary';


import { UserData } from '../components/Data/Data';


const Account = () => {
    const { userId } = useParams();
    const user = UserData.find((user) => user.id === userId);

    if (!user) {
      console.log(userId);
      return <div>Utilisateur non trouvé</div>;
    }

    return (
        <div>
            {(() => {
                switch (user.authority_name) {
                    case 'caissier':
                    case 'dépositaire':
                        return (
                            <AccountDepositary userId={userId}/>
                            );
                    case 'admin':
                    case 'agent':
                    case 'pharmacien':
                        return (
                            <AccountAdmin userId={userId}/>
                            );
                    default:
                        return null;
                    }
            })()}
        </div>
    );

}
 
export default Account;