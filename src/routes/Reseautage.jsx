import { useState } from "react";
import axios from "axios";

import { activites, regions } from "../utils/constantes";

const Reseautage = () => {
  const [selectedActivite, setSelectedActivite] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedVille, setSelectedVille] = useState("");

  const handleSearch = async () => {
    if (!selectedActivite) return alert("Veuillez sélectionner une activité !");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/search`,
        {
          params: {
            activite: selectedActivite,
            region: selectedRegion,
            ville: selectedVille,
          },
        }
      );
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
      alert("Une erreur est survenue lors de la recherche.");
    }
  };

  const filterByRegion = (newRegion) => {
    setSelectedRegion(newRegion);
    if (!newRegion) {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter((user) => user.region === newRegion));
    }
  };

  const filterByVille = (newVille) => {
    setSelectedVille(newVille);
    if (!newVille) {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter((user) =>
          user.ville.toLowerCase().includes(newVille.toLowerCase())
        )
      );
    }
  };
  return (
    <div className='reseautage-container p-8  w-[80%] mx-auto'>
      <div
        className='bg-[#ffffff]  my-6 p-6 flex flex-col items-center justify-center'
        style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
      >
        <h1 className='text-xl font-bold text-[#bc378c] mb-2'>
          Bienvenue sur le répertoire de l'entrepreneuriat au féminin (REF)
        </h1>
        <p className='text-[#bc378c] mb-4'>
          L'espace de réseautage dédié aux femmes entrepreneures !
        </p>

        <select
          value={selectedActivite}
          onChange={(e) => setSelectedActivite(e.target.value)}
          className='border border-[#bc378c] rounded-md p-2  text-sm'
        >
          <option value=''>Sélectionnez l'activité souhaitée</option>
          {activites.map((activite, index) => (
            <option key={index} value={activite}>
              {activite}
            </option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          className='bg-[#fdcd23] hover:bg-[#e6b91f] text-white px-8 py-2 ml-2 rounded mt-8'
        >
          Rechercher
        </button>
      </div>

      {users.length > 0 && (
        <div className='secondary-filters my-4'>
          <select
            value={selectedRegion}
            onChange={(e) => filterByRegion(e.target.value)}
            className='border p-2 mb-4 mr-2'
          >
            <option value=''>Toutes les régions</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
          <input
            type='text'
            placeholder='Filtrer par ville'
            value={selectedVille}
            onChange={(e) => filterByVille(e.target.value)}
            className='border p-2 '
          />
        </div>
      )}

      <div className='results-section grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            className='card border p-4 shadow rounded flex flex-col text-[#bc378c] h-full'
          >
            <h2 className='font-bold mb-2 text-lg'>
              {user.entreprise.toUpperCase()}
            </h2>
            <p className='text-base mb-1'>
              {user.region} - {user.ville}
            </p>
            <p className='text-base mb-1 italic'>{user.activite}</p>
            <p
              className='text-sm text-[#b4b4b4] italic mb-1 overflow-hidden'
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {user.description}
            </p>
            {user.site ? (
              <a href={user.site} target='blank'>
                Visitez notre site
              </a>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reseautage;
