import Footer from "../components/Footer";
import ListMovies from "../components/ListMovies";
import Menu from "../components/Menu";

const Favorites = () => {
  return (
    <>
      <Menu />
      <main className=" mt-16">
        <h1 className="text-center text-xl md:text-2xl font-bold p-4">Meus favoritos</h1>
        <ListMovies />
      </main>
      <Footer />
    </>
  );
};

export default Favorites;
