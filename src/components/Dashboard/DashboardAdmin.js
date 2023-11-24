import Navbar from "../Navbar/NavbarVertical";
import { useParams } from 'react-router-dom';

function DashboardAdmin () {
    const { userId } = useParams();  
    return (  
        <div className="flex">
            <Navbar page="dashboard" userId={userId} />
            <div className="text-3xl m-32">
                <h1>WORK IN PROGRESS</h1>
            </div>
        </div>
    );
}
 
export default DashboardAdmin;