import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { UserData } from "../components/Data/Data";


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Recherche de l'utilisateur dans UserData
    const user = UserData.find(
      (user) => user.login === username && user.password_hash === password
    );

    if (user) {
      // Utilisateur trouvé, vous pouvez faire quelque chose avec l'objet utilisateur ici
      console.log('Utilisateur trouvé :', user);

      // Rediriger vers une autre page ou effectuer d'autres actions
      navigate(`/account/${user.id}`);
    } else {
      // Aucun utilisateur trouvé, afficher une erreur
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center login">
      <div className="flex h-screen justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
          <div className="text-center mx-auto w-24 h-24 mb-4 ministere">
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label className="block text-gray-600 font-semibold" htmlFor="username">Nom d'utilisateur</label>
              <input
                className="w-full border border-gray-300 p-2 rounded-full"
                type="text"
                id="username"
                name="username"
                placeholder="Entrez votre nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold" htmlFor="password">
                Mot de passe
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-full"
                type="password"
                id="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}            
            <div className="mb-4 flex justify-center">
              <button
                className="w-1/3 bg-greenApple text-white p-2 rounded-full hover:bg-green-600"
                type="submit"
              >
                Se connecter
              </button>
            </div>
            <div className="text-center">
              <a className="text-gray-500 hover:underline" href="#!">Mot de passe oublié ?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
