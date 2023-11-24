import Navbar from "../Navbar/Navbar";
import { useParams } from 'react-router-dom';

function DashboardDepositary () {
    const { userId } = useParams();  
    return (  
        <div>
            <Navbar page="dashboard" userId={userId} />
            <div className="flex justify-center items-center text-3xl mt-32 ">
                <h1>WORK IN PROGRESS</h1>
            </div>
        </div>
    );
}
 
export default DashboardDepositary;