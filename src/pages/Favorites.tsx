import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ListMovies from "../components/ListMovies";
import Menu from "../components/Menu";
import { MovieService } from "../services/movieService";
import Loading from "../components/Loading";

const Favorites = () => {
  const [favoritesId, setFavoritesId] = useState<string[]>([]);
  const [favoritesMovies, setFavoritesMovies] = useState<any[]>([]);

  useEffect(() => {
    const favoriteMoviesId: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== null) {
        favoriteMoviesId.push(localStorage.getItem(localStorage.key(i)));
      }
    }
    setFavoritesId(favoriteMoviesId);

    const favoriteMoviesList: any[] = [];
    const api = new MovieService();
    favoritesId.map((movieId) => {
      api
        .detailMovie(
          `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`
        )
        .then((result: any) => {
          favoriteMoviesList.push(result.data);
        });
    });
    setFavoritesMovies(favoriteMoviesList);
  }, []);

  useEffect(() => {
    if (!favoritesId.length) return;

    const api = new MovieService();

    const fetchFavorites = async () => {
      try {
        const results = await Promise.all(
          favoritesId.map((movieId) =>
            api.detailMovie(
              `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`
            )
          )
        );

        setFavoritesMovies(results.map((r: any) => r.data));
      } catch (error) {
        console.error("Erro ao buscar filmes favoritos:", error);
      }
    };

    fetchFavorites();
  }, [favoritesId]);

  return (
    <>
      <Menu />
      <main className="relative mt-16">
        <h1 className="text-center text-xl md:text-2xl font-bold p-4">
          Meus favoritos
        </h1>
        {favoritesMovies ? (
          <ListMovies moviesList={favoritesMovies} />
        ) : (
          <Loading />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Favorites;
