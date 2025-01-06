import { Link } from "react-router-dom";
import ContactForm from "../composants/ContactForm";
import Histoire from "../assets/histoire.jpg";
// import Benevole from "../assets/benevole.webp";
import Hero from "../assets/hero.webp";
import Actions from "../assets/actions.png";
import Helena from "../assets/helena.png";
import Olga from "../assets/olga.png";
import Dora from "../assets/dora.png";
import Clarisse from "../assets/clarisse.png";
import Linkedin from "../assets/linkedin.png";
import Calendrier from "../assets/calendrier.png";
import LiveForGood from "../assets/Logo-live-for-good.png";
import MangeVoyage from "../assets/Logo-Mange-Voyage-Aime.png";
import Pepite from "../assets/Logo-Pepite.png";

const Accueil = () => {
  return (
    <div>
      <section
        className=' py-6 mx-6 bg-[#fdcd23] mt-12 flex flex-col sm:flex-col md:flex-row justify-center rounded'
        id='histoire'
      >
        <div>
          <div className='flex relative gap-2 px-4 w-full'>
            <div className='w-2/5 relative flex-shrink-0 hidden md:block'>
              <img
                className='absolute right-8 bottom-{-1} object-cover rounded'
                src={Histoire}
                alt="image illustrant l'image de l'histoire de l'association"
              />
            </div>
            <div className='w-full md:w-3/5  mt-10 pr-2'>
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
            <div className='bg-[#bc378c] w-[70%] sm:w-[55%] italic text-sm font-bold text-[#ffffff] rounded p-2 bg-opacity-60 mt-3 ml-auto'>
              <p>« J'adore ces moments de partage et d’entraide » Sonia.</p>
            </div>
            <div className='bg-[#bc378c] w-[70%] sm:w-[55%] italic text-sm font-bold text-[#ffffff] rounded p-2 bg-opacity-60 mt-3 mr-auto'>
              <p>
                « Réunies... le réseau qui ne ressemble à rien d'autre de ce que
                je connais [...] Tu es en train de créer une vraie dynamite
                féminine [...] toutes ensemble, n'importe quel sujet sur nos
                chemins pro ! » Rachel.
              </p>
            </div>
            <div className='bg-[#bc378c] w-[70%] sm:w-[55%] italic text-sm font-bold text-[#ffffff] rounded p-2 bg-opacity-60 mt-3 ml-auto'>
              <p>
                « Merci à toi de nous réunir sur des sujets que nous reléguons
                parfois au second plan par craintes ou par manque de temps »
                Karine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold my-12 text-[#bc378c] text-center tracking-wide'>
          Notre équipe de passionnée
        </h2>
        <div className='flex flex-col gap-3 sm:gap-4'>
          <div className='text-sm font-bold  relative flex items-center ml-auto'>
            <img
              className='object-cover w-full h-auto'
              src={Helena}
              alt='image Helena'
            />
            <div className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-[30%]'>
              <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#fdcd23] whitespace-nowrap'>
                Helena DAGNOGO
              </h2>
              <div className='flex items-center gap-4'>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-[#ffffff]'>
                  Présidente
                </p>
                <Link
                  to='https://www.linkedin.com/in/helena-dagnogo-4ab4aa178'
                  target='blank'
                >
                  <img
                    className='object-contain w-[20px] min-w-[20px] h-auto'
                    src={Linkedin}
                    alt='Logo Linkedin'
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className='text-sm font-bold  relative flex items-center mr-auto'>
            <img
              className='object-cover w-full h-auto'
              src={Olga}
              alt='image Olga'
            />
            <div className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-[30%] flex flex-col items-end'>
              <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#fdcd23] whitespace-nowrap'>
                Olga MADZIGON
              </h2>
              <div className='flex items-center gap-4 flex-row-reverse'>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-[#ffffff]  '>
                  Vice-présidente
                </p>
                <Link
                  to='https://www.linkedin.com/in/olga-madzigon-744030107/'
                  target='blank'
                >
                  <img
                    className='object-contain w-[20px] min-w-[20px] h-auto'
                    src={Linkedin}
                    alt='Logo Linkedin'
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='text-sm font-bold  relative flex items-center ml-auto'>
            <img className='object-cover' src={Dora} alt='Image Dora' />
            <div className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-[30%]'>
              <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#fdcd23] whitespace-nowrap'>
                Dora MOUALHI
              </h2>
              <div className='flex items-center gap-4'>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-[#ffffff]'>
                  Secrétaire
                </p>
                <Link
                  to='https://www.linkedin.com/in/dora-moualhi-6a7a08242/'
                  target='blank'
                >
                  <img
                    className='object-contain w-[20px] min-w-[20px] h-auto'
                    src={Linkedin}
                    alt='Logo Linkedin'
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='text-sm font-bold  relative flex items-center mr-auto'>
            <img className='object-cover' src={Clarisse} alt='Image Clarisse' />
            <div className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-[30%] flex flex-col items-end'>
              <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#fdcd23] whitespace-nowrap'>
                Clarisse BEGUIN
              </h2>
              <div className='flex items-center flex-row-reverse gap-4'>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-[#ffffff]'>
                  Trésorière
                </p>
                <Link
                  to='https://www.linkedin.com/in/clarisse-beguin-65a5a5117/'
                  target='blank'
                >
                  <img
                    className='object-contain w-[20px] min-w-[20px] h-auto'
                    src={Linkedin}
                    alt='Logo Linkedin'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='relative w-full flex justify-center items-center text-white text-center'
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          aspectRatio: "16/9",
        }}
      >
        <div className='absolute inset-0 flex flex-col justify-center items-center px-4'>
          <h2 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4'>
            Vous souhaitez rejoindre l'aventure?
          </h2>
          <a
            href='mailto:programme.reunies@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#fdcd23] text-[#ffffff] py-2 px-6 rounded font-semibold text-sm sm:text-base md:text-lg lg:text-xl'
          >
            Oui je souhaite devenir bénévole
          </a>
        </div>
      </section>

      <section className=' px-4 mx-auto' id='actions'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col  w-full md:w-3/5  '>
            <h2 className='text-2xl pt-2 font-bold text-start text-[#bc378c]  tracking-wide'>
              Nos actions
            </h2>
            <p className='mt-4 text-[#bc378c] font-semibold leading-relaxed'>
              Nous organisons des activités variées pour soutenir les femmes
              entrepreneures et porteuses de projets :
            </p>
            <p className='mt-4 text-[#bc378c] font-semibold leading-relaxed'>
              Des rencontres mensuelles de partage d’experiences, des ateliers,
              formations et webinaires, ainsi que des actions de médiation et
              vulgarisation scientifique sur l'entrepreneuriat.
            </p>
          </div>
          <div className='w-full md:w-2/5'>
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
      <section className='px-4  mx-auto'>
        <h2 className='text-2xl font-bold my-12 text-[#bc378c] text-center tracking-wide'>
          Nos partenaires
        </h2>
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
      </section>
      <section className='flex flex-col px-4 justify-center items-center mt-12 mx-auto bg-[#fdcd23] py-12'>
        <h2 className='text-2xl font-semi-bold  text-[#ffffff] tracking-wide text-center'>
          Inscrivez vous à notre newsletter !
        </h2>

        <a
          href='https://reunies.substack.com/'
          target='blank'
          className='bg-[#ffffff] text-[#fdcd23] mt-4 py-2 px-10 rounded font-semi-bold'
        >
          S'inscrire
        </a>
      </section>
      <section className='w-3/5 px-4 mx-auto py-10 mt-10'></section>
      <ContactForm />
    </div>
  );
};
export default Accueil;
