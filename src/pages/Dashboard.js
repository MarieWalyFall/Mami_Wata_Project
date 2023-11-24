import React from "react";
import { useParams } from 'react-router-dom';

import { UserData } from "../components/Data/Data";
import DashboardAdmin from "../components/Dashboard/DashboardAdmin";
import DashboardDepositary from "../components/Dashboard/DashboardDepositary";

function Dashboard() {
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
                            return <DashboardDepositary userId={userId} />;
                        case 'admin':
                        case 'pharmacien':
                        case 'agent':
                            return <DashboardAdmin userId={userId} />;
                        default:
                            return null; 
                    }
            })()}
        </div>
    );
}
 
export default Dashboard;