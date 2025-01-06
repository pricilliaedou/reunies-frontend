import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { activites, regions } from "../utils/constantes";

const Inscription = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [ville, setVille] = useState("");
  const [region, setRegion] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [activite, setActivite] = useState("");
  const [description, setDescription] = useState("");
  const [reseaux, setReseaux] = useState("");
  const [site, setSite] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !email.trim() ||
      !password.trim() ||
      !username.trim() ||
      !nom.trim() ||
      !prenom.trim() ||
      !ville.trim() ||
      !region.trim() ||
      !activite.trim()
    ) {
      setErrorMessage("Tous les champs obligatoires doivent être remplis !");
      return;
    }

    if (description && description.length > 200) {
      setErrorMessage("La description ne doit pas dépasser 200 caractères.");
      return;
    }

    if (site && !/^https?:\/\/[\w.-]+\.[a-z]{2,}$/i.test(site)) {
      setErrorMessage("L'URL du site est invalide.");
      return;
    }

    try {
      const payload = {
        email: email.trim(),
        password,
        username: username.trim(),
        nom: nom.trim(),
        prenom: prenom.trim(),
        ville: ville.trim(),
        region: region.trim(),
        entreprise: entreprise.trim(),
        activite,
        description: description.trim(),
        reseaux: reseaux.trim(),
        site: site.trim(),
      };

      console.log("Payload envoyé :", payload);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/inscription`,
        payload
      );
      console.log(response.data.token);
      if (response.data.token) {
        setUser(response.data.token);
        alert("Compte créé avec succès !");
        navigate("/reseautage");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 409) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md space-y-6'
    >
      <h2 className='text-xl text-[#bc378c] font-bold text-center'>
        Racontez-nous tout
      </h2>
      {errorMessage && (
        <p className='text-red-500 text-center'>{errorMessage}</p>
      )}

      <div className='space-y-4'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full border border-[#bc378c] rounded-md p-3 text-sm'
          required
        />
        <input
          type='text'
          placeholder='Nom'
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className='w-full border border-[#bc378c] rounded-md p-3 text-sm'
          required
        />
        <input
          type='text'
          placeholder='Prénom'
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          className='w-full border border-[#bc378c] rounded-md p-3 text-sm'
          required
        />
      </div>

      <div className='flex space-x-4'>
        <input
          type='email'
          placeholder='email@exemple.fr'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='flex-1 border border-[#bc378c] rounded-md p-3 text-sm'
          required
        />
        <input
          type='password'
          placeholder='Mot de passe'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='flex-1 border border-[#bc378c] rounded-md p-3 text-sm'
          required
        />
      </div>

      <div className='flex space-x-4'>
        <input
          type='text'
          placeholder='Ville'
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          className='flex-1 border border-[#bc378c] rounded-md p-3 text-sm'
          required
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className='flex-1 border border-[#bc378c] rounded-md p-3 text-sm'
          required
        >
          <option value=''>Sélectionnez une région</option>
          {regions.map((r, index) => (
            <option key={index} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className='flex space-x-4'>
        <input
          type='text'
          placeholder='Nom de votre entreprise'
          value={entreprise}
          onChange={(e) => setEntreprise(e.target.value)}
          className='flex-1 border border-[#bc378c] rounded-md p-3 text-sm'
          required
        />
        <select
          value={activite}
          onChange={(e) => setActivite(e.target.value)}
          className='flex-1 border border-[#bc378c] rounded-md p-3 text-sm'
          required
        >
          <option value=''>Secteur d'activité</option>
          {activites.map((a, index) => (
            <option key={index} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <textarea
        placeholder='Description (max. 200 caractères)'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows='2'
        className='w-full border border-[#bc378c] rounded-md p-3 text-sm'
      ></textarea>

      <div className='flex space-x-4'>
        <input
          type='text'
          placeholder='https://www.example.fr'
          value={site}
          onChange={(e) => setSite(e.target.value)}
          className='flex-1 border border-[#bc378c] rounded-md p-3 text-sm'
        />
        <input
          type='text'
          placeholder='Réseaux sociaux'
          value={reseaux}
          onChange={(e) => setReseaux(e.target.value)}
          className='flex-1 border border-[#bc378c] rounded-md p-3 text-sm'
        />
      </div>

      <textarea
        placeholder='Commentaire'
        value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
        rows='4'
        className='w-full border border-[#bc378c] rounded-md p-3 text-sm'
      ></textarea>

      <button
        type='submit'
        className='w-full bg-[#fdcd23] text-white font-bold py-3 rounded-md hover:bg-[#e6b91f]'
      >
        Je m'inscris
      </button>
    </form>
  );
};

export default Inscription;
