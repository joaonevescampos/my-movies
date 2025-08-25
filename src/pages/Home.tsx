import Menu from "../components/Menu";
import Cover from "../components/Cover";
import SplideListMovies from "../components/SplideListMovies";
import SearchComponent from "../components/SearchComponent";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Menu />
      <Cover />
      <main>
        <SearchComponent />
        <SplideListMovies />
        <SplideListMovies />
        <SplideListMovies />
      </main>
      <Footer />
    </>
  );
}

export default Home;
