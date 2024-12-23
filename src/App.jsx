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
      // console.log(token);
      // console.log(username);
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
              <Connexion />
            </Layout>
          }
        />
        <Route
          path='/inscription'
          element={
            <Layout>
              <Inscription
                setUser={setUser}
                token={token}
                username={username}
              />
            </Layout>
          }
        />
        <Route
          path='/activites'
          element={
            <Layout setUser={setUser}>
              <Reseautage />
            </Layout>
          }
        />
        <Route path='*' element={<Erreur />} />
      </Routes>
    </Router>
  );
}

export default App;
