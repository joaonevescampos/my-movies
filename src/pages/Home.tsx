import Menu from "../components/Menu";
import Cover from "../components/Cover";
import ListMovies from "../components/ListMovies";
import SearchComponent from "../components/SearchComponent";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Menu />
      <Cover />
      <main>
        <SearchComponent />
        <ListMovies />
        <ListMovies />
        <ListMovies />
      </main>
      <Footer />
    </>
  );
}

export default Home;
