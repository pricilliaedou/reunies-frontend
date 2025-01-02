import Header from "./Header";
import Footer from "./Footer";
import Hero from "../assets/hero.webp";

const Layout = ({ dynamicContent, children, token, setUser, username }) => {
  return (
    <div>
      <Header token={token} setUser={setUser} username={username} />
      <section
        className='h-screen bg-fixed bg-center bg-cover flex justify-center items-center text-white text-center'
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className=' p-8 rounded-md'>{dynamicContent}</div>
      </section>

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
