import { Link } from "react-router-dom";
import erreur from "../assets/erreur.jpg";

const Erreur = () => (
  <div className='flex flex-col md:flex-row min-h-screen'>
    <div className='w-full md:w-1/2 flex items-center justify-center'>
      <img
        className='w-full h-auto md:h-full object-contain'
        src={erreur}
        alt="image de la page d'erreur"
      />
    </div>

    <div className='w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4 py-8'>
      <h1 className='text-[#bc378c] text-4xl font-bold mb-4'>404</h1>
      <h2 className='text-[#bc378c] text-2xl font-semibold mb-4'>
        Oops, votre page est introuvable !
      </h2>
      <p className='text-[#bc378c] text-lg'>
        Retour à la page d'
        <Link to='/' className='underline hover:text-[#a52d7e]'>
          accueil
        </Link>
        .
      </p>
    </div>
  </div>
);

export default Erreur;
