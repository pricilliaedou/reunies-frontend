import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//  Routes
import Accueil from "./routes/Accueil";
import Connexion from "./routes/Connexion";
import Inscription from "./routes/Inscription";
import Reseautage from "./routes/Reseautage";
import Erreur from "./routes/Erreur";

// Composants
// import Header from "./composants/Header";
import Layout from "./composants/Layout";

import "./index.css";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [username, setUsername] = useState(Cookies.get("username") || null);
  const setUser = (data) => {
    if (data) {
      console.log(data);
      const { token, username } = data;
      setToken(token);
      setUsername(username);
      Cookies.set("token", token, { expires: 14 });
      Cookies.set("username", username, { expires: 14 });
    } else {
      setToken(null);
      setUsername(null);

      Cookies.remove("token");
      Cookies.remove("username");
    }
  };
  const activites = [
    "Informatique",
    "Santé",
    "Commerce",
    "Éducation",
    "Transport",
    "Tourisme",
  ];

  const regions = [
    "Auvergne-Rhône-Alpes",
    "Bourgogne-Franche-Comté",
    "Bretagne",
    "Centre-Val de Loire",
    "Corse",
    "Grand Est",
    "Hauts-de-France",
    "Île-de-France",
    "Normandie",
    "Nouvelle-Aquitaine",
    "Occitanie",
    "Pays de la Loire",
    "Provence-Alpes-Côte d’Azur",
    "Guadeloupe",
    "Martinique",
    "Guyane",
    "La Réunion",
    "Mayotte",
  ];
  return (
    <Router>
      <div className='container mx-auto max-w-[1280px]'></div>
      {/* <Header setUser={setUser} token={token} username={username} /> */}

      <Routes>
        <Route
          path='/'
          element={
            <Layout setUser={setUser} token={token} username={username}>
              <Accueil />
            </Layout>
          }
        />
        <Route
          path='/connexion'
          element={
            <Layout setUser={setUser} token={token} username={username}>
              <Connexion setUser={setUser} />
            </Layout>
          }
        />
        <Route
          path='/inscription'
          element={
            <Layout setUser={setUser} token={token} username={username}>
              <Inscription
                setUser={setUser}
                token={token}
                username={username}
                activites={activites}
                regions={regions}
              />
            </Layout>
          }
        />
        <Route
          path='/reseautage'
          element={
            <Layout setUser={setUser} token={token} username={username}>
              <Reseautage activites={activites} regions={regions} />
            </Layout>
          }
        />
        <Route path='*' element={<Erreur />} />
      </Routes>
    </Router>
  );
}

export default App;
