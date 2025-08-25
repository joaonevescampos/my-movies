import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SearchComponent from "../components/SearchComponent";
import ListMovies from "../components/ListMovies";

const Search = () => {
  return (
    <>
      <Menu />
      <main className=" mt-16">
        <h1 className="text-center text-xl md:text-2xl font-bold p-4">Pesquise por qualquer filme ou série</h1>
        <SearchComponent />
        <ListMovies />
      </main>
      <Footer />
    </>
  );
};

export default Search;
