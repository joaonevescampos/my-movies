import Menu from "../components/Menu";
import Cover from "../components/Cover";
import SplideListMovies from "../components/SplideListMovies";
import SearchComponent from "../components/SearchComponent";
import Footer from "../components/Footer";
import { MovieService } from "../services/movieService";
import { useEffect, useState } from "react";

function Home() {
  interface Movie {
    poster_path: string;
    title: string;
    release_date: string;
    id: string;
  }
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [upComingMovies, setUpComingMovies] = useState<Movie[]>([]);
  const [randomPopularMovie, setRandomPopularMovie] = useState<Movie>();

  useEffect(() => {
    const randomNumber: number =
      popularMovies?.length > 0
        ? Math.floor(Math.random() * popularMovies.length)
        : 0;
    setRandomPopularMovie(popularMovies[randomNumber]);
  }, [popularMovies]);

  useEffect(() => {
    const api = new MovieService();
    api.getPopularMovies().then((data) => {
      setPopularMovies(data.results);
    });

    api.getNowPlayingMovies().then((data) => {
      setnowPlayingMovies(data.results);
    });

    api.getTopRatedMovies().then((data) => {
      setTopRatedMovies(data.results);
    });

    api.getUpComingMovies().then((data) => {
      setUpComingMovies(data.results);
    });
  }, []);
  return (
    <>
      <Menu />
      <Cover movie={randomPopularMovie} />
      <main>
        <SearchComponent />
        <SplideListMovies movies={nowPlayingMovies} categoryName="Em cartaz" />
        <SplideListMovies
          movies={topRatedMovies}
          categoryName="Melhor avaliados"
        />
        <SplideListMovies movies={popularMovies} categoryName="Populares" />
        <SplideListMovies movies={upComingMovies} categoryName="Em Breve" />
      </main>
      <Footer />
    </>
  );
}

export default Home;
