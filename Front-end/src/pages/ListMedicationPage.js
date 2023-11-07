import React from 'react';
import NavbarVertical from "../components/NavbarVertical";

const ListMedicationPage = () => {
    return (  
        <div className='flex'>
            <NavbarVertical/>
            <div className='p-4'>
            <h1 className="text-3xl mt-24 inter ml-10 mb-4">Conditioning Page</h1>
            <table className="table-auto ml-10">
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>    

            </div>
        </div>
    );
}
 
export default ListMedicationPage;