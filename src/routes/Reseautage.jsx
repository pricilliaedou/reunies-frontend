import { useState } from "react";
import axios from "axios";

const Reseautage = ({ activites, regions }) => {
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

  const filterByRegion = () => {
    if (!selectedRegion) return setFilteredUsers(users);
    setFilteredUsers(users.filter((user) => user.region === selectedRegion));
  };

  const filterByVille = () => {
    if (!selectedVille) return setFilteredUsers(users);
    setFilteredUsers(
      users.filter((user) =>
        user.ville.toLowerCase().includes(selectedVille.toLowerCase())
      )
    );
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
          className='bg-[#fdcd23] text-white px-8 py-2 ml-2 rounded mt-8'
        >
          Rechercher
        </button>
      </div>

      {users.length > 0 && (
        <div className='secondary-filters my-4'>
          <select
            value={selectedRegion}
            onChange={(e) => {
              setSelectedRegion(e.target.value);
              filterByRegion();
            }}
            className='border p-2'
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
            onChange={(e) => {
              setSelectedVille(e.target.value);
              filterByVille();
            }}
            className='border p-2 ml-2'
          />
        </div>
      )}

      <div className='results-section grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            className='card border p-4 shadow rounded flex flex-col items-center'
          >
            <img
              src={`/images/activites/${user.activite}.png`}
              alt={user.activite}
              className='w-20 h-20 object-cover mb-4'
            />
            <h2 className='font-bold'>{user.entreprise}</h2>
            <p className='text-sm'>{user.description}</p>
            <p className='text-sm'>
              {user.region} - {user.ville}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reseautage;
