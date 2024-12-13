import Header from "./Header";
import Hero from "../assets/hero.webp";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <section
        className='h-screen bg-fixed bg-center bg-cover flex justify-center items-center text-white text-center'
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className='bg-black bg-opacity-40 p-8 rounded-md'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#fdcd23]'>
            Réunies
          </h1>
          <p className='mt-4 text-3xl font-bold'>
            pour Entreprendre au Féminin
          </p>
          <p className='mt-4 text-3xl font-bold'>au Féminin</p>
          <button className='bg-[#fdcd23] text-[#ffffff] px-8 py-2 rounded mt-6 font-bold'>
            Réseauter
          </button>
        </div>
      </section>

      <div>{children}</div>
    </div>
  );
};

export default Layout;