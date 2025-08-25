import { MovieItem } from "./MovieItem";
import { useEffect, useState } from "react";
import { MovieService } from "../services/movieService";

const ListMovies = () => {
  interface Movie {
    poster_path: string;
    title: string;
    release_date: string;
    id?: string;
  }

  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const api = new MovieService();
    api.getMovies("/movie/popular?language=pt-BR&page=1").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <div className="flex gap-4 justify-around max-w-[1150px] w-fit flex-wrap m-auto p-4">
        {movies.map((movie) => (
          <MovieItem
            posterPath={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </div>
    </>
  );
};

export default ListMovies;
