import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.svg";

const Header = ({ token, username, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/connexion");
  };

  return (
    <header>
      <div className='flex items-center justify-between px-4 py-3 md:px-8'>
        <Link to='/' className='w-1/3'>
          <img
            src={Logo}
            alt="Logo de l'association réunies pour entreprendre au féminin"
          />
        </Link>

        <div className='md:hidden'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>

        <nav className='hidden md:flex space-x-4'>
          {!token ? (
            <>
              <Link to='/connexion'>Réseautage</Link>
              <a href='/#histoire'>Notre histoire</a>
              <a href='/#actions'>Nos actions</a>
              <a href='/#contact'>Contact</a>
              <button
                onClick={handleRedirect}
                className='bg-[#bc378c] text-[#ffffff] px-4 py-2 rounded'
              >
                Se connecter
              </button>
            </>
          ) : (
            <>
              <Link to='/'>Accueil</Link>
              <Link to='/reseautage'>Réseauter</Link>
              <p className='text-[#bc378c]'>{username}</p>
              <button
                onClick={() => setUser(null)}
                className='bg-[#bc378c] text-[#ffffff] px-4 py-2 rounded'
              >
                Se déconnecter
              </button>
            </>
          )}
        </nav>
      </div>

      {isMenuOpen && (
        <div className='md:hidden '>
          <nav className='flex flex-col space-y-2 p-4'>
            {!token ? (
              <>
                <Link to='/connexion'>Réseautage</Link>
                <a href='/#histoire'>Notre histoire</a>
                <a href='/#actions'>Nos actions</a>
                <a href='/#contact'>Contact</a>
                <button
                  onClick={handleRedirect}
                  className='bg-[#bc378c] text-[#ffffff] px-4 py-2 rounded'
                >
                  Se connecter
                </button>
              </>
            ) : (
              <>
                <Link to='/'>Accueil</Link>
                <Link to='/reseautage'>Réseauter</Link>
                <p className='text-[#bc378c]'>{username}</p>
                <button
                  onClick={() => setUser(null)}
                  className='bg-[#bc378c] text-[#ffffff] px-4 py-2 rounded'
                >
                  Se déconnecter
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;
