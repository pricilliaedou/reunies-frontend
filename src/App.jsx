import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//  Routes
import Accueil from "./routes/Accueil";
import Connexion from "./routes/Connexion";
import Inscription from "./routes/Inscription";
import Reseautage from "./routes/Reseautage";
import Succes from "./routes/Succes";
import Erreur from "./routes/Erreur";

// Composants
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

  return (
    <Router>
      <div className='container mx-auto max-w-[1280px]'></div>

      <Routes>
        <Route
          path='/'
          element={
            <Layout
              dynamicContent={
                <>
                  <h1 className='text-4xl md:text-5xl font-bold text-[#fdcd23]'>
                    Réunies
                  </h1>
                  <p className='mt-4 text-3xl font-bold'>pour Entreprendre</p>
                  <p className='mt-4 text-3xl font-bold'>au Féminin</p>
                  <button
                    onClick={() => (window.location.href = "/connexion")}
                    className='bg-[#fdcd23] text-[#ffffff] px-8 py-2 rounded mt-6 font-bold hover:bg-[#e6b91f]'
                  >
                    Réseauter
                  </button>
                </>
              }
              setUser={setUser}
              token={token}
              username={username}
            >
              <Accueil />
            </Layout>
          }
        />
        <Route
          path='/connexion'
          element={
            <Layout
              dynamicContent={
                <h1 className='text-4xl md:text-5xl font-bold text-[#fdcd23]'>
                  Connexion
                </h1>
              }
              setUser={setUser}
              token={token}
              username={username}
            >
              <Connexion setUser={setUser} />
            </Layout>
          }
        />
        <Route
          path='/inscription'
          element={
            <Layout
              dynamicContent={
                <h1 className='text-4xl md:text-5xl font-bold text-[#fdcd23]'>
                  Inscription
                </h1>
              }
              setUser={setUser}
              token={token}
              username={username}
            >
              <Inscription
                setUser={setUser}
                token={token}
                username={username}
              />
            </Layout>
          }
        />
        <Route
          path='/reseautage'
          element={
            token ? (
              <Layout
                dynamicContent={
                  <>
                    <h1 className='text-4xl md:text-5xl font-bold text-[#fdcd23]'>
                      Réunies
                    </h1>
                    <p className='mt-4 text-3xl font-bold'>
                      pour Entreprendre au Féminin
                    </p>
                    <p className='mt-4 text-3xl font-bold'>au Féminin</p>
                  </>
                }
                setUser={setUser}
                token={token}
                username={username}
              >
                <Reseautage />
              </Layout>
            ) : (
              <Navigate to='/connexion' />
            )
          }
        />
        <Route path='/succes' element={<Succes />} />
        <Route path='*' element={<Erreur />} />
      </Routes>
    </Router>
  );
}

export default App;
