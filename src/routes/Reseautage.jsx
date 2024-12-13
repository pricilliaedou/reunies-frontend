import { useState, useEffect } from "react";
import axios from "axios";

const Reseautage = () => {
  const [activites, setActivites] = useState([]);
  const [activite, setActivite] = useState("");
  const [region, setRegion] = useState("");
  const [ville, setVille] = useState("");
  const predefinedRegions = [
    "Île-de-France",
    "Provence-Alpes-Côte d'Azur",
    "Auvergne-Rhône-Alpes",
  ];

  useEffect(() => {
    const fetchActivites = async () => {
      const response = await axios.get("VITE_BACKEND_URL/activites");
      setActivites(response.data);
    };

    fetchActivites();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { activiteNom: activite, region, ville };
      await axios.post("http://localhost:5000/users/inscription", data);
      alert("Utilisateur enregistré !");
    } catch (error) {
      console.error(error.response.data.error || "Une erreur est survenue.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Activité :
        <select value={activite} onChange={(e) => setActivite(e.target.value)}>
          <option value=''>Sélectionnez une activité</option>
          {activites.map((a) => (
            <option key={a._id} value={a.nom}>
              {a.nom}
            </option>
          ))}
        </select>
      </label>

      <label>
        Région :
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value=''>Sélectionnez une région</option>
          {predefinedRegions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>

      <label>
        Ville :
        <input
          type='text'
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          placeholder='Ex : Paris'
        />
      </label>

      <button type='submit'>Soumettre</button>
    </form>
  );
};

export default Reseautage;
