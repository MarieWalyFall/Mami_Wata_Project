import React from 'react';
import NavbarVertical from "../components/NavbarVertical";

const Conditioning = () => {
  const handleActivate = () => {
    const isConfirmed = window.confirm('Voulez-vous activer ce conditionnement ?');

    if (isConfirmed) {
      // Le code pour activer l'élément va ici
    }
  };

  const handleDeactivate = () => {
    const isConfirmed = window.confirm('Voulez-vous désactiver ce conditionnement ?');

    if (isConfirmed) {
      // Le code pour désactiver l'élément va ici
    }
  };

  return (
    <div className="flex">
        <NavbarVertical/>
        <div className="p-4">
            <h1 className="text-3xl mt-24 inter ml-10 mb-4">Conditioning Page</h1>
            <table className="table-auto ml-10">
                <thead>
                <tr>
                    <th className="px-4 py-2">Nom</th>
                    <th className="px-4 py-2">Statut</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border px-4 py-2">Item 1</td>
                    <td className="border px-4 py-2 flex items-center justify-center">
                    <button
                        className="bg-greenApple p-1 border rounded-md text-white"
                        onClick={handleActivate}
                    >
                        Activé
                    </button>
                    </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Item 2</td>
                    <td className="border px-4 py-2 flex items-center justify-center">
                    <button
                        className="bg-red-700 p-1 border rounded-md text-white"
                        onClick={handleDeactivate}
                    >
                        Désactivé
                    </button>
                    </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Item 3</td>
                    <td className="border px-4 py-2 flex items-center justify-center">
                    <button
                        className="bg-greenApple p-1 border rounded-md text-white"
                        onClick={handleActivate}
                    >
                        Activé
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
  );
};

export default Conditioning;