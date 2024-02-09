
const MedicationFields = [
    { name: 'field', type: 'String', placeholder: 'Médicament' },
    { name: 'id', type: 'String', placeholder: '' },
    { name: 'name', type: 'String', placeholder: 'Nom' },
    { name: 'description', type: 'String', placeholder: 'Description' },
    { name: 'conditioning', type: 'String', placeholder: 'Conditionnement' },
    { name: 'price', type: 'Double', placeholder: 'Prix' },
    { name: 'quantity', type: 'Long', placeholder: 'Quantité' },
    { name: 'warningLevel', type: 'Long', placeholder: 'CMM' },
    { name: 'activated', type: 'String', placeholder: 'Statut' },
];

const MutualFields = [
    { name: 'field', type: 'String', placeholder: 'Mutuelle' },
    { name: 'id', type: 'String', placeholder: '' },
    { name: 'facturation', type: 'String', placeholder: 'Facturation' },
    { name: 'institution', type: 'String', placeholder: 'Institution' },
    { name: 'nature', type: 'String', placeholder: 'Nature' },
    { name: 'part', type: 'Integer', placeholder: 'Part patient (en %)' },
    { name: 'activated', type: 'String', placeholder: 'Statut' },
];

const NatureMutualFields = [
    { name: 'field', type: 'String', placeholder: 'Nature de mutuelle' },
    { name: 'id', type: 'String', placeholder: '' },
    { name: 'name', type: 'String', placeholder: 'Nom' },
    { name: 'activated', type: 'String', placeholder: 'Statut' },
];

const ServiceFields = [
    { name: 'field', type: 'String', placeholder: 'Service' },
    { name: 'id', type: 'String', placeholder: '' },
    { name: 'name', type: 'String', placeholder: 'Nom' },
    { name: 'description', type: 'String', placeholder: 'Description' },
    { name: 'activated', type: 'String', placeholder: 'Statut' },
];

const CategoryFields = [
    { name: 'field', type: 'String', placeholder: 'Catégorie' },
    { name: 'id', type: 'String', placeholder: '' },
    { name: 'name', type: 'String', placeholder: 'Nom' },
    { name: 'description', type: 'String', placeholder: 'Description' },
    { name: 'activated', type: 'String', placeholder: 'Statut' },
];

const ServiceCategoryFields = [
    { name: 'field', type: 'String', placeholder: 'Prix Service - Catégorie' },
    { name: 'id', type: 'String', placeholder: '' },
    { name: 'category', type: 'String', placeholder: 'Catégorie' },
    { name: 'service', type: 'String', placeholder: 'Service' },
    { name: 'price', type: 'String', placeholder: 'Prix' },
    { name: 'activated', type: 'String', placeholder: 'Statut' },
];

const PatientFields = [
    { name: 'field', type: 'String', placeholder: 'Patient' },
    { name: 'id', type: 'String', placeholder: '' },
    { name: 'name', type: 'String', placeholder: 'Prénom(s)' },
    { name: 'sur_name', type: 'String', placeholder: 'Nom' },
    { name: 'phone_number', type: 'String', placeholder: 'Numéro de téléphone' },
    { name: 'age', type: 'Integer', placeholder: 'Age' },
    { name: 'mutualized', type: 'String', placeholder: 'Mutualisé' },
    { name: 'mutual_id', type: 'String', placeholder: 'Mutuelle' },
    { name: 'activated', type: 'String', placeholder: 'Statut' },
];

const UserFields = [
    { name: 'field', type: 'String', placeholder: 'Utilisateur' },
    { name: 'id', type: 'String', placeholder: '' },
    { name: 'login', type: 'String', placeholder: 'Login' },
    { name: 'password_hash', type: 'String', placeholder: 'Mot de passe' },
    { name: 'first_name', type: 'String', placeholder: 'Prénom(s)' },
    { name: 'last_name', type: 'String', placeholder: 'Nom' },
    { name: 'email', type: 'String', placeholder: 'Email' },
    { name: 'authority_name', type: 'String', placeholder: 'Role' },
    { name: 'activated', type: 'String', placeholder: 'Statut' },
];

export {MedicationFields, MutualFields, NatureMutualFields, ServiceFields, CategoryFields, PatientFields, UserFields, ServiceCategoryFields}
