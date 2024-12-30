import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Connexion = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/connexion`,
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser({
          token: response.data.token,
          username: response.data.account.username,
        });
        setIsLoading(false);
        alert("Bienvenue sur la page réseautage !");
        navigate("/reseautage");
      } else {
        alert("Une erreur est survenue, merci de réessayer..");
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("email ou mot de passe invalid");
        setIsLoading(false);
      }
      console.log(error.message);
    }
  };

  return isLoading ? (
    <p>En cours de téléchargement ...</p>
  ) : (
    <>
      (
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-center text-2xl font-bold text-[#bc378c] sm:text-3xl'>
            Se connecter
          </h1>

          <form
            action='#'
            className='mb-0 mt-2 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
            onSubmit={handleSubmit}
          >
            <div>
              <div className='relative'>
                <input
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setErrorMessage("");
                  }}
                  type='email'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder='Adresse mail'
                  required
                />

                <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <div className='relative'>
                <input
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  type='password'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder='Mot de passe'
                  required
                />

                <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type='submit'
              className='block w-full rounded-lg bg-[#fdcd23] text-[#ffffff] font-bold px-5 py-3 font-medium text-white'
            >
              Je me connecte
            </button>

            <Link to={"/"} className='text-center text-sm text-[#bc378c] block'>
              Mot de passe oublié
            </Link>

            <Link
              to={"/inscription"}
              className='underline text-center text-sm text-[#bc378c] block mt-2'
            >
              Vous n'avez pas encore de compte? S'inscrire maintenant
            </Link>

            <span className='text-[#ff4655] text-sm'>{errorMessage}</span>
          </form>
        </div>
      </div>
      );
    </>
  );
};

export default Connexion;
