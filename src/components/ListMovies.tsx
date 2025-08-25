import { MovieItem } from "./MovieItem";
import { useEffect, useState } from "react";
import { MovieService } from "../services/movieService";

const ListMovies = () => {
  interface Movie {
    poster_path: string;
    title: string;
    release_date: string;
    id: string;
  }

  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const api = new MovieService();
    api.getPopularMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);
  
  return (
    <>
      <div className="flex gap-4 justify-around max-w-[1150px] w-fit flex-wrap m-auto p-4">
        {movies.length === 0 ? (
          <p>Não tem filmes</p>
        ) : (
          <div>
            <h2>Teste</h2>
            {movies.map((movie) => (
              <MovieItem
                posterPath={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                key={movie.id}
              />
            ))}
          </div>
          
        )}
      </div>
    </>
  );
};

export default ListMovies;
