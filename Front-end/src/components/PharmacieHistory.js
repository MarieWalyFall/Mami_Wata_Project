const PharmacieHistory = () => {
  return (  
    <div className="relative py-10 px-4 rounded-lg">

      <span className="lato text-sm py-10 font-semibold">Aujourd'hui - Samedi 8 avril 2023</span>
      <table className="inter w-full text-sm text-left border mb-6 shadow-lg">
        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Nombre d'article</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="pb-4 pl-6">FKRef-64311e055</td>
              <td className="pb-4 px-2">2</td>
              <td className="pb-4 px-2">10000 XOF</td>
              <td className="pb-4 px-2">3000 XOF</td>
              <td className="pb-4 px-2">7000 XOF</td>
              <td className="pb-4 px-2"><span className="bg-greenApple p-1 border rounded-md text-white">Vendu</span></td>
              <td className="text-xs">8 avril 2023 : 12:31:16</td>
            </tr>
            <tr className="bg-greenApple">
              <td colSpan={7} className="text-center py-1 col-span-full">
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>                
              </td>
            </tr>
        </tbody>
      </table>
      <table className="inter w-full text-sm text-left border mb-6 shadow-lg">
        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Nombre d'article</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="pb-4 pl-6">FKRef-64311e055</td>
              <td className="pb-4 px-2">2</td>
              <td className="pb-4 px-2">10000 XOF</td>
              <td className="pb-4 px-2">3000 XOF</td>
              <td className="pb-4 px-2">7000 XOF</td>
              <td className="pb-4 px-2"><span className="bg-greenApple p-1 border rounded-md text-white">Vendu</span></td>
              <td className="text-xs">8 avril 2023 : 12:31:16</td>
            </tr>
            <tr className="bg-greenApple">
              <td colSpan={7} className="text-center py-1 col-span-full">
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>                
              </td>
            </tr>
        </tbody>
      </table>
      <table className="inter w-full text-sm text-left border mb-6 shadow-lg">
        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Nombre d'article</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="pb-4 pl-6">FKRef-64311e055</td>
              <td className="pb-4 px-2">2</td>
              <td className="pb-4 px-2">10000 XOF</td>
              <td className="pb-4 px-2">3000 XOF</td>
              <td className="pb-4 px-2">7000 XOF</td>
              <td className="pb-4 px-2"><span className="bg-greenApple p-1 border rounded-md text-white">Vendu</span></td>
              <td className="text-xs">8 avril 2023 : 12:31:16</td>
            </tr>
            <tr className="bg-greenApple">
              <td colSpan={7} className="text-center py-1 col-span-full">
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>                
              </td>
            </tr>
        </tbody>
      </table>

      <div className="flex justify-center my-10">
        <hr className="border-1.5 border-black w-1/12"/>
      </div>

      <span className="lato text-sm font-semibold">Hier - Vendredi 7 avril 2023</span>
      <table className="inter w-full text-sm text-left border mb-6 shadow-lg">
        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Nombre d'article</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="pb-4 pl-6">FKRef-64311e055</td>
              <td className="pb-4 px-2">2</td>
              <td className="pb-4 px-2">10000 XOF</td>
              <td className="pb-4 px-2">3000 XOF</td>
              <td className="pb-4 px-2">7000 XOF</td>
              <td className="pb-4 px-2"><span className="bg-greenApple p-1 border rounded-md text-white">Vendu</span></td>
              <td className="text-xs">8 avril 2023 : 12:31:16</td>
            </tr>
            <tr className="bg-greenApple">
              <td colSpan={7} className="text-center py-1 col-span-full">
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>                
              </td>
            </tr>
        </tbody>
      </table>
      <table className="inter w-full text-sm text-left border mb-6 shadow-lg">
        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Nombre d'article</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="pb-4 pl-6">FKRef-64311e055</td>
              <td className="pb-4 px-2">2</td>
              <td className="pb-4 px-2">10000 XOF</td>
              <td className="pb-4 px-2">3000 XOF</td>
              <td className="pb-4 px-2">7000 XOF</td>
              <td className="pb-4 px-2"><span className="bg-greenApple p-1 border rounded-md text-white">Vendu</span></td>
              <td className="text-xs">8 avril 2023 : 12:31:16</td>
            </tr>
            <tr className="bg-greenApple">
              <td colSpan={7} className="text-center py-1 col-span-full">
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>                
              </td>
            </tr>
        </tbody>
      </table>
      <table className="inter w-full text-sm text-left border mb-6 shadow-lg">
        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Nombre d'article</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="pb-4 pl-6">FKRef-64311e055</td>
              <td className="pb-4 px-2">2</td>
              <td className="pb-4 px-2">10000 XOF</td>
              <td className="pb-4 px-2">3000 XOF</td>
              <td className="pb-4 px-2">7000 XOF</td>
              <td className="pb-4 px-2"><span className="bg-greenApple p-1 border rounded-md text-white">Vendu</span></td>
              <td className="text-xs">8 avril 2023 : 12:31:16</td>
            </tr>
            <tr className="bg-greenApple">
              <td colSpan={7} className="text-center py-1 col-span-full">
                <div className="flex justify-center">
                  <svg className="w-4 h-4 text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </div>                
              </td>
            </tr>
        </tbody>
      </table>

    </div>

  );
}

export default PharmacieHistory;