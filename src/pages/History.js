import React from 'react';
import { useParams } from 'react-router-dom';

import { UserData } from "../components/Data/Data";
import HistoryAdmin from '../components/History/HistoryAdmin';
import HistoryDepositary from '../components/History/HistoryDepositary';

function History() {
   
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
        case 'dépositaire':
        case 'caissier':
          return <HistoryDepositary userId={userId} />;
        case 'admin':
        case 'pharmacien':
        case 'agent':
          return <HistoryAdmin userId={userId} />;
        default:
          return null; 
    }})()}
</div>
);
}

export default History;
