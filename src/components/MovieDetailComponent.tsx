import { useEffect, useState } from "react";
import FilledButton from "./FilledButton";
import { MovieService } from "../services/movieService";
import Loading from "./Loading";
import { Link } from "react-router-dom";

interface MovieId {
  movieId: string;
}

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  vote_average: string;
  id?: string;
  backdrop_path: string;
}

const MovieDetailComponent = ({ movieId }: MovieId) => {
  const [movie, setMovie] = useState<Movie>();
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const api = new MovieService();
    api
      .detailMovie(
        `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`
      )
      .then((result: any) => {
        setMovie(result.data);
      });
  }, []);

  useEffect(() => {
    console.log("detalhe do filme", movie);
  }, [movie]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative w-screen h-[calc(100vh-132px)] mt-[36px]">
      {!movie ? (
        <Loading />
      ) : (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.title}
            className="h-full w-screen object-cover inset-0"
          />
          <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-black/80 h-full"></div>

          <Link to="/">
          <button className="absolute top-0 left-0 text-sm inset-0 text-gray-400 w-fit h-fit p-4"> Voltar à página anterior</button>
          </Link>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12 absolute z-10 top-1/2 left-1/2 -translate-1/2 w-full max-w-[1000px] px-4 md:px-16">
            {width > 768 ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title}
                className="w-64 object-cover rounded"
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                alt={movie?.title}
                className="w-full max-w-80 m-auto object-cover rounded"
              />
            )}

            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="font-bold">{movie?.title}</h1>
              <h2>{}</h2>
              <span className="opacity-60 text-xs md:text-sm">
                {movie?.release_date.slice(0, 4)}
              </span>
              <p className="text-xs md:text-sm">{movie?.overview}</p>
              <span className="font-bold text-xs">
                Avaliação: {movie?.vote_average.toString().slice(0, 3)} / 10
              </span>
              <div className="flex gap-4">
                <FilledButton text="Assistir" bgColor="#6700D4" />
                <FilledButton text="Trailer" bgColor="#ffffff" />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default MovieDetailComponent;
