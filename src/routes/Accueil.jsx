// import Layout from "../composants/Layout";
import { Link } from "react-router-dom";
import ContactForm from "../composants/ContactForm";
import Histoire from "../assets/histoire.jpg";
import Benevole from "../assets/benevole.webp";
import Actions from "../assets/actions.png";
import Calendrier from "../assets/Calendrier.png";
import LiveForGood from "../assets/Logo-live-for-good.png";
import MangeVoyage from "../assets/Logo-Mange-Voyage-Aime.png";
import Pepite from "../assets/Logo-Pepite.png";

const Accueil = () => {
  return (
    <div>
      <section className='px-4 py-6 mx-6 bg-[#fdcd23] mt-12 mx-auto'>
        <div>
          <div className='flex relative gap-2'>
            <div className='w-2/5 relative flex-shrink-0'>
              <img
                className='absolute right-8 bottom-0 object-cover'
                src={Histoire}
                alt="image illustrant l'image de l'histoire de l'association"
              />
            </div>
            <div className='w-3/5  mt-10 pr-2'>
              <h2 className='text-2xl font-bold text-[#bc378c]'>
                Notre Histoire
              </h2>
              <p className='mt-4 text-[#ffffff] font-semibold leading-normal'>
                C’est sous le soleil niçois que le réseau Réunies est né dans le
                but de rassembler les femmes entrepreneures pour leur permettre
                de partager leurs expériences, briser leur isolement et trouver
                des solutions aux difficultés qu’elles rencontrent dans
                l’entrepreneuriat. Notre objectif est de valoriser le travail
                des femmes entrepreneures en créant les conditions propices à
                leur réussite et à leur épanouissement.
              </p>
              <p className='mt-4 text-[#ffffff] font-semibold leading-normal '>
                Notre objectif est de valoriser le travail des femmes
                entrepreneures en créant les conditions propices à leur réussite
                et à leur épanouissement.
              </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='bg-[#bc378c] w-2/4 italic text-sm font-bold text-[#ffffff] rounded p-2 bg-opacity-60 mt-3 ml-auto'>
              <p>« J'adore ces moments de partage et d’entraide » Sonia.</p>
            </div>
            <div className='bg-[#bc378c] w-2/4 italic text-sm font-bold text-[#ffffff] rounded p-2 bg-opacity-60 mt-3 mr-auto'>
              <p>
                « Réunies... le réseau qui ne ressemble à rien d'autre de ce que
                je connais [...] Tu es en train de créer une vraie dynamite
                féminine [...] toutes ensemble, n'importe quel sujet sur nos
                chemins pro ! » Rachel.
              </p>
            </div>
            <div className='bg-[#bc378c] w-2/4 italic text-sm font-bold text-[#ffffff] rounded p-2 bg-opacity-60 mt-3 ml-auto'>
              <p>
                « Merci à toi de nous réunir sur des sujets que nous reléguons
                parfois au second plan par craintes ou par manque de temps »
                Karine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4  mx-auto '>
        <h2 className='text-2xl font-bold my-12 text-[#bc378c] text-center tracking-wide'>
          Notre équipe de passionnée
        </h2>
        <div className='flex flex-col'>
          <div className='bg-[#bc378c] w-2/4 italic text-sm font-bold text-[#ffffff] rounded p-2 bg-opacity-60 mt-3 ml-auto'>
            <p>« J'adore ces moments de partage et d’entraide » Sonia.</p>
          </div>
          <div className='bg-[#bc378c] w-2/4 italic text-sm font-bold text-[#ffffff] rounded p-2 bg-opacity-60 mt-3 mr-auto'>
            <p>
              « Réunies... le réseau qui ne ressemble à rien d'autre de ce que
              je connais [...] Tu es en train de créer une vraie dynamite
              féminine [...] toutes ensemble, n'importe quel sujet sur nos
              chemins pro ! » Rachel.
            </p>
          </div>
          <div className='bg-[#bc378c] w-2/4 italic text-sm font-bold text-[#ffffff] rounded p-2 bg-opacity-60 mt-3 ml-auto'>
            <p>
              « Merci à toi de nous réunir sur des sujets que nous reléguons
              parfois au second plan par craintes ou par manque de temps »
              Karine.
            </p>
          </div>
        </div>
      </section>

      <section
        className='h-[400px] bg-fixed  bg-contain bg-no-repeat  bg-center flex justify-center items-center text-white text-center mt-4'
        style={{
          backgroundImage: `url(${Benevole})`,
        }}
      ></section>

      <section className=' px-4   mx-auto '>
        <div className='flex'>
          <div className='flex flex-col w-3/5  '>
            <h2 className='text-2xl pt-12 font-bold text-start text-[#bc378c]  tracking-wide'>
              Lorem, ipsum dolor.
            </h2>
            <p className='mt-4 text-[#bc378c] font-semibold leading-relaxed'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              explicabo veniam aperiam eaque, perferendis ipsam dolore, commodi,
              labore ab accusamus et excepturi libero voluptatum eos? Libero
              sapiente voluptatibus, autem eius vitae ab alias minima doloremque
              id ipsum natus accusantium dicta reprehenderit exercitationem ea
              eaque officiis in? Esse explicabo facere ullam.
            </p>
          </div>
          <div className='w-2/5'>
            <img
              src={Actions}
              alt='image pour illustrer les actions '
              className='object-cover'
            />
          </div>
        </div>
      </section>
      <section className=' px-4   mx-auto '>
        <div className='w-full'>
          <img
            src={Calendrier}
            alt="image pour illustrer la présentation du calendrier une fois qu'il sera implémenté "
            className='object-cover'
          />
        </div>
      </section>
      <section className='px-4  mx-auto '>
        <h2 className='text-2xl font-bold my-12 text-[#bc378c] text-center tracking-wide'>
          Nos partenaires
        </h2>
        <div className='flex justify-center items-center'>
          <img src={LiveForGood} alt='Logo Live For Good' />
          <img src={Pepite} alt='Logo Pepite' />
          <img src={MangeVoyage} alt='Logo Mange Voyage Aime' />
        </div>
      </section>
      <section className='px-4 text-center  mx-auto bg-[#fdcd23] py-10'>
        <h2 className='text-2xl font-semi-bold  text-[#ffffff] tracking-wide'>
          Inscrivez vous à notre newsletter !
        </h2>
        <Link to={"/"}>
          <button className='bg-[#ffffff] text-[#fdcd23] mt-4 py-2 px-10 rounded font-semi-bold'>
            S'inscrire
          </button>
        </Link>
      </section>
      <section className='w-3/5 px-4 mx-auto py-10 mt-10'></section>
      <ContactForm />
    </div>
  );
};
export default Accueil;
