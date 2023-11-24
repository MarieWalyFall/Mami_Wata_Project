// conditioningData.js

// Importez vos images ici
import injectable from './../../assets/images/conditioning/injectable.png';
import cp from './../../assets/images/conditioning/cp.jpg';
import gel from './../../assets/images/conditioning/gel.jpg';
import pommade from './../../assets/images/conditioning/pommade.jpg';
import sirop from './../../assets/images/conditioning/sirop.jpg';
import solute from './../../assets/images/conditioning/solute.jpg';
import suppositoire from './../../assets/images/conditioning/suppositoire.jpg';


const conditioningData = [
  { name: 'Cp', image: cp, activated: false },
  { name: 'Sirop', image: sirop, activated: true },
  { name: 'Pommade', image: pommade, activated: true },
  { name: 'Gel', image: gel, activated: true },
  { name: 'Suppositoire', image: suppositoire, activated: false },
  { name: 'Injectable', image: injectable, activated: true },
  { name: 'Solute', image: solute, activated: true },
];

const MedicationTransactionData =[
  {reference: 'FKRef-64311e055',
    articles: 5,
    checkOutCode: 46,
    patient: 'Bruce Banner',
    depositary: 'Dr Strange',
    cashier: 'Sylvie Loki',
    mutual: 'SONAM_80',
    date: '8 avril 2023 : 12:31:16',
    status: 'UNPAID',
    totalInvoice: 15000,
    amountCashedIn: 3000
  },
  {reference: 'FKRef-64311e055',
    articles: 16,
    checkOutCode: 46,
    patient: 'Bruce Banner',
    depositary: 'Dr Strange',
    cashier: 'Sylvie Loki',
    mutual: 'SONAM_70',
    date: '8 avril 2023 : 12:31:16',
    status: 'PAID',
    totalInvoice: 10000,
    amountCashedIn: 3000
  },
  {reference: 'FKRef-64311e055',
    articles: 2,
    checkOutCode: 46,
    patient: 'Bruce Banner',
    depositary: 'Dr Strange',
    cashier: 'Sylvie Loki',
    mutual: 'SONAM_80',
    date: '8 avril 2023 : 12:31:16',
    status: 'DELIVERED',
    totalInvoice: 15000,
    amountCashedIn: 3000
  },
  {reference: 'FKRef-64311e055',
    articles: 3,
    checkOutCode: 46,
    patient: 'Bruce Banner',
    depositary: 'Dr Strange',
    cashier: 'Sylvie Loki',
    mutual: 'SONAM_80',
    date: '8 avril 2023 : 12:31:16',
    status: 'CANCELLED',
    totalInvoice: 15000,
    amountCashedIn: 3000
  },
];

const TicketTransactionData =[
  {reference: 'FKRef-64311e055',
    service: 'Pédiatrie',
    category: 'Consultation',
    patient: 'Clark Kent',
    cashier: 'Harley Quinn',
    mutual: 'SONAM_80',
    date: '8 avril 2023 : 12:31:16',
    sold: true,
    totalInvoice: 2000,
    amountCashedIn: 400
  },
  {reference: 'FKRef-64311e055',
    service: 'Pédiatrie',
    category: 'Consultation',
    patient: 'Clark Kent',
    cashier: 'Harley Quinn',
    mutual: 'SONAM_80',
    date: '8 avril 2023 : 12:31:16',
    sold: false,
    totalInvoice: 3000,
    amountCashedIn: 600
  },
  {reference: 'FKRef-64311e055',
    service: 'Pédiatrie',
    category: 'Consultation',
    patient: 'Clark Kent',
    cashier: 'Harley Quinn',
    mutual: 'SONAM_80',
    date: '8 avril 2023 : 12:31:16',
    sold: true,
    totalInvoice: 2000,
    amountCashedIn: 400
  },
  {reference: 'FKRef-64311e055',
    service: 'Pédiatrie',
    category: 'Consultation',
    patient: 'Clark Kent',
    cashier: 'Harley Quinn',
    mutual: 'SONAM_80',
    date: '8 avril 2023 : 12:31:16',
    sold: false,
    totalInvoice: 2000,
    amountCashedIn: 400
  },
];

const MedicationData = [
  {
    name: 'Adrénaline',
    description: 'Description du médicament',
    price: 200,
    quantity: 51,
    warningLevel: 65,
    activated: true,
    stockLevelIndication: 'SAFE',
    conditioning: 'injectable',
    image: injectable,
  },
  {
    name: 'Adrénaline',
    description: 'Description du médicament',
    price: 200,
    quantity: 10,
    warningLevel: 56,
    activated: true,
    stockLevelIndication: 'MEDIUM',
    conditioning: 'injectable',
    image: injectable,
  },
  {
    name: 'Adrénaline',
    description: 'Description du médicament',
    price: 200,
    quantity: 145,
    warningLevel: 56,
    activated: true,
    stockLevelIndication: 'LOW',
    conditioning: 'injectable',
    image: injectable,
  },
  {
    name: 'Adrénaline',
    description: 'Description du médicament',
    price: 200,
    quantity: 78,
    warningLevel: 56,
    activated: false,
    stockLevelIndication: 'ALARMING',
    conditioning: 'injectable',
    image: injectable,
  },
  {
    name: 'Adrénaline',
    description: 'Description du médicament',
    price: 200,
    quantity: 1,
    warningLevel: 56,
    activated: true,
    stockLevelIndication: 'SAFE',
    conditioning: 'injectable',
    image: injectable,
  },
]

const ServiceData = [
  { name : 'Pédiatrie',
    activated : true
  },
  { name : 'Maternité',
    activated : true
  },
  { name : 'Généraliste',
    activated : true
  },
  { name : 'Laboratoire',
    activated : true
  },
  { name : 'ORL',
    activated : false
  },  
];

const CategoryData = [
  { name : 'Consultation',
    service : 'Pédiatrie',
    price : 2000,
    activated : true
  },  
  { name : 'Analyses',
    service : 'Laboratoire',
    price : 5000,
    activated : true
  },  
  { name : 'Visite',
    service : 'Maternité',
    price : 3000,
    activated : false
  },  
];

const MutualData = [
  { facturation : 'Facturation',
    institution : 'Institution',
    nature : 'CESAM',
    part : 20,
    activated : true
  },
  { facturation : 'Facturation',
    institution : 'Institution',
    nature : 'Maladie universell',
    part : 10,
    activated : false
  },
  { facturation : 'Facturation',
    institution : 'Institution',
    nature : 'Gratuité 0 à 5 ans',
    part : 0,
    activated : true
  },
  { facturation : 'Facturation',
    institution : 'Institution',
    nature : 'Travailleur',
    part : 30,
    activated : true
  },
  { facturation : 'Facturation',
    institution : 'Institution',
    nature : 'Travailleur',
    part : 20,
    activated : true
  },
];

const NatureMutualData = [
  { name : 'Cesam',
    activated : true
  },
  { name : 'Maladie universells',
    activated : false
  },
  { name : 'Gratuité 0 à 5 ans',
    activated : true
  },
  { name : 'Travailleur',
    activated : true
  },
];

const PatientData = [
  { name : 'Captain',
    sur_name : 'America',
    phone_number : '77 777 77 77',
    age : 100,
    sex : 'M',
    mutualized : true,
    mutual_id : 'SONAM_80',
    activated : true
  },
  { name : 'Captain',
    sur_name : 'Marvel',
    phone_number : '77 777 77 77',
    age : 45,
    sex : 'F',
    mutualized : true,
    mutual_id : 'SONAM_80',
    activated : true
  },
  { name : 'Iron',
    sur_name : 'Man',
    phone_number : '77 777 77 77',
    age : 40,
    sex : 'M',
    mutualized : true,
    mutual_id : 'SONAM_80',
    activated : true
  },
  { name : 'Bruce Hulk',
    sur_name : 'Banner',
    phone_number : '77 777 77 77',
    age : 42,
    sex : 'M',
    mutualized : false,
    mutual_id : 'SONAM_80',
    activated : false
  },
  { name : 'Thor',
    sur_name : 'Odinson',
    phone_number : '77 777 77 77',
    age : 25,
    sex : 'M',
    mutualized : false,
    mutual_id : 'SONAM_80',
    activated : true
  },
];

const UserData = [
  { id : '1',
    login : 'admin',
    password_hash : 'passer',
    first_name : 'Captain',
    last_name : 'Holt',
    email : 'holt@gmail.com',
    authority_name : 'admin',
    activated : true
  },
  { id : '2',
    login : 'pharmacien',
    password_hash : 'passer',
    first_name : 'Terry',
    last_name : 'Jeffords',
    email : 'jeffords@gmail.com',
    authority_name : 'pharmacien',
    activated : true
  },
  { id : '3',
  login : 'agent',
  password_hash : 'passer',
  first_name : 'Rosa',
  last_name : 'Diaz',
  email : 'diaz@gmail.com',
  authority_name : 'agent',
  activated : true
  },
  { id : '4',
    login : 'caissier',
    password_hash : 'passer',
    first_name : 'Gina',
    last_name : 'Linetti',
    email : 'linetti@gmail.com',
    authority_name : 'caissier',
    activated : false
  },
  { id : '5',
    login : 'dépositaire',
    password_hash : 'passer',
    first_name : 'Jake',
    last_name : 'Peralta',
    email : 'peralta@gmail.com',
    authority_name : 'dépositaire',
    activated : false
  },

];


// Exportez les données
export { conditioningData, MedicationTransactionData, TicketTransactionData, MedicationData, ServiceData, CategoryData, MutualData, NatureMutualData, PatientData, UserData};
