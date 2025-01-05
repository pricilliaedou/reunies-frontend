import Actions from "../assets/actions.png";

const Succes = () => {
  return (
    <div className='relative flex size-full h-screen flex-col bg-white group/design-root overflow-x-hidden'>
      <div className='flex items-center bg-white p-4 pb-2 justify-between'>
        <div
          className='text-[#bc378c] flex size-12 shrink-0 items-center'
          data-icon='ArrowLeft'
          data-size='24px'
          data-weight='regular'
        >
          <a href='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24px'
              height='24px'
              fill='currentColor'
              viewBox='0 0 256 256'
            >
              <path d='M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z'></path>
            </svg>
          </a>
        </div>
        <h2 className='text-[#bc378c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12'>
          Soumission de formulaire
        </h2>
      </div>
      <h1 className='text-[#bc378c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5'>
        Merci de nous avoir contacté !
      </h1>
      <p className='text-[#bc378c] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center'>
        Nous avons bien reçu votre message et nous sommes impatientes de
        discuter de la façon dont nous pouvons collaborer ensemble.
      </p>

      <div className='w-full max-w-[400px] mx-auto'>
        <img
          src={Actions}
          alt='image merci'
          className='w-full h-auto object-contain'
        />
      </div>

      <div className='flex px-4 py-3 justify-center'>
        <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 text-base bg-[#fdcd23] text-[#ffffff] font-bold leading-normal tracking-[0.015em] '>
          <a href='/'>
            <span className='truncate'>Retour vers l'accueil</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Succes;
