import { useState } from "react";

const FilterComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '18',
        phoneNumber: '',
        isMutual: false,
        mutuelleType: '',
        mutuelle: '',
        carnet: '',
      });
    
      // Créez un gestionnaire d'événements pour détecter les modifications du formulaire
      const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        if (value.trim() === "") {
          console.log(`Le champ ${name} ne peut pas être vide.`);
          return;
        }
      
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      
      };
    
    return ( 

        <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="mutuelleType">
                Status
              </label>
              <select
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="mutuelleType"
                id="mutuelleType"
                value={formData.mutuelleType}
                onChange={handleInputChange}
              >
                <option value="">
                    <div class="w-36 h-36 bg-red-600 rounded-full"></div>
                    <span>Vendu</span>
                </option>
                <option value="type1">Payé</option>
                <option value="type2">Non payé</option>
                <option value="type3">Annulé</option>
              </select>
            </div>

        </div>
    );
}
 
export default FilterComponent;