import { Link } from "react-router-dom";
import footer from "../assets/footer.webp";
import LiveForGood from "../assets/Logo-live-for-good.png";
import MangeVoyage from "../assets/Logo-Mange-Voyage-Aime.png";
import Pepite from "../assets/Logo-Pepite.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/insta.png";

const Footer = () => (
  <footer
    className='w-full bg-cover bg-center text-white'
    style={{
      backgroundImage: `url(${footer})`,
    }}
  >
    <div className='container w-[80%] mx-auto px-4 py-8 flex flex-col gap-8 md:flex-row  justify-between'>
      <div className='w-full md:w-1/3 text-center md:text-left'>
        <a
          href='./politique-de-confidentialite.pdf'
          download='./politique-de-confidentialite.pdf'
        >
          Politique de confidentialité
        </a>
        <p></p>
        <a href='./mentions-legales.pdf' download='./mentions-legales.pdf'>
          Mentions légales
        </a>
      </div>

      <div className='w-full md:w-1/3 text-center'>
        <p>Nos partenaires</p>
        <div className='flex justify-center items-center gap-4 mt-4'>
          <Link to='https://www.live-for-good.org/' target='blank'>
            <img
              className='object-contain h-15'
              src={LiveForGood}
              alt='Logo Live For Good'
            />
          </Link>
          <Link to='https://pepite-pacaest.pepitizy.fr/fr' target='blank'>
            <img
              className='object-contain h-15'
              src={Pepite}
              alt='Logo Pepite'
            />
          </Link>
          <Link to='https://mangevoyageaime.fr/' target='blank'>
            <img
              className='object-contain h-15'
              src={MangeVoyage}
              alt='Logo Mange Voyage Aime'
            />
          </Link>
        </div>
      </div>

      <div className='w-full md:w-1/3 text-center'>
        <p>Nos réseaux sociaux</p>
        <div className='flex justify-center items-center gap-4 mt-4'>
          <Link to='https://www.instagram.com/programme.reunies' target='blank'>
            <img
              className='object-contain h-8'
              src={Instagram}
              alt='Logo Instagram'
            />
          </Link>
          <Link
            to='https://www.linkedin.com/in/helena-dagnogo-4ab4aa178'
            target='blank'
          >
            <img
              className='object-contain h-8'
              src={Linkedin}
              alt='Logo Linkedin'
            />
          </Link>
        </div>
      </div>
    </div>

    <div className='mx-auto border-t border-white w-full md:w-[50%] sm:w-[75%] mt-4 p-8 text-center'>
      <p className='px-4'>
        Site réalisé par les apprenantes,{" "}
        <Link
          to='https://github.com/pricilliaedou'
          target='blank'
          className='text-[#fdcd23]'
        >
          Pricillia
        </Link>{" "}
        ,{" "}
        <Link
          to='https://www.linkedin.com/in/la%C3%ABtitia-diafutua-035964319/'
          target='blank'
          className='text-[#fdcd23]'
        >
          Laëtitia
        </Link>{" "}
        et{" "}
        <Link
          to='https://www.behance.net/gallery/211963909/Portfolio-UX-design'
          target='blank'
          className='text-[#fdcd23]'
        >
          Manon{" "}
        </Link>{" "}
        de l'association{" "}
        <Link
          to='https://descodeuses.org/'
          target='blank'
          className='text-[#fdcd23]'
        >
          Descodeuses
        </Link>
      </p>
    </div>
  </footer>
);

export default Footer;
