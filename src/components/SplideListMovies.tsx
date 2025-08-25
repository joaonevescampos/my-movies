import { MovieItem } from "./MovieItem";
import moviePoster1 from "../assets/img/image 9.png";
import moviePoster2 from "../assets/img/image 10.png";
import moviePoster3 from "../assets/img/image 11.png";
import moviePoster4 from "../assets/img/image 12.png";
import moviePoster5 from "../assets/img/image 13.png";
import moviePoster6 from "../assets/img/image 14.png";

const SplideListMovies = () => {
  const movies = [
    {
      id: "1",
      name: "Missão Impossível dffdsfsdfsd dsfsdf",
      posterUrl: moviePoster1,
      date: "22 de mai de 2025",
    },
    {
      id: "1",
      name: "Superman",
      posterUrl: moviePoster2,
      date: "22 de mai de 2025",
    },
    {
      id: "1",
      name: "Elio",
      posterUrl: moviePoster3,
      date: "22 de mai de 2025",
    },
    {
      id: "1",
      name: "Alien",
      posterUrl: moviePoster4,
      date: "22 de mai de 2025",
    },
    {
      id: "1",
      name: "Wandinha",
      posterUrl: moviePoster5,
      date: "22 de mai de 2025",
    },
    {
      id: "1",
      name: "Hora do Mal",
      posterUrl: moviePoster6,
      date: "22 de mai de 2025",
    },
    {
      id: "1",
      name: "Alien",
      posterUrl: moviePoster4,
      date: "22 de mai de 2025",
    },
    {
      id: "1",
      name: "Wandinha",
      posterUrl: moviePoster5,
      date: "22 de mai de 2025",
    },
    {
      id: "1",
      name: "Hora do Mal",
      posterUrl: moviePoster6,
      date: "22 de mai de 2025",
    },
  ];
  return (
    <>
      <div className="flex gap-4 xl:gap-8 p-4 lg:p-8 overflow-auto scrollbar-none max-w-[1600px] m-auto">
        {movies.map((movie) => (
          <MovieItem
            posterUrl={movie.posterUrl}
            movieName={movie.name}
            movieDate={movie.date}
            movieId={movie.id}
          />
        ))}
      </div>
    </>
  );
};

export default SplideListMovies;
