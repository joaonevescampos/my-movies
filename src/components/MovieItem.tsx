import { Favorite } from "@mui/icons-material";
import OutlinedButton from "./OutlinedButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import posterFallback from "../assets/img/backdrop-fallback.jpg";

interface MovieProps {
  posterPath: string;
  title: string;
  releaseDate: string;
  id: string;
}

export const MovieItem = ({
  posterPath,
  title,
  releaseDate,
  id,
}: MovieProps) => {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const storedMovie = localStorage.getItem(`movieId-${id}`);
    if (storedMovie) {
      setFavorited(true);
    }
  }, [id]);

  const addToFavorite = () => {
    localStorage.setItem(`movieId-${id}`, id);
    setFavorited(true);
  };

  const removeFavorite = () => {
    localStorage.removeItem(`movieId-${id}`);
    setFavorited(false);
  };

  return (
    <>
      <div className="w-[138px] md:w-[200px] hover:scale-105 hover:transition-normal">
        {posterPath ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
            className="rounded-tl-xl rounded-tr-xl h-52 md:h-80 object-cover"
          />
        ) : (
          <img
            src={posterFallback}
            alt={title}
            className="rounded-tl-xl rounded-tr-xl h-52 md:h-80 object-cover"
          />
        )}
        <div className="relative flex flex-col p-2 md:p-4 gap-2 bg-[#070707] rounded-bl-xl rounded-br-xl w-[138px] md:w-[200px]">
          {favorited ? (
            <Favorite
              className="absolute right-1 text-[#AF63FF]"
              onClick={removeFavorite}
            />
          ) : (
            <FavoriteBorderIcon
              className="absolute right-1 text-gray-500"
              onClick={addToFavorite}
            />
          )}

          <h2 className="font-bold text-sm truncate w-[100px] md:w-[150px]  self-start">
            {title}
          </h2>
          <span className="text-gray-500 text-xs">
            {releaseDate.slice(0, 4)}
          </span>
          <OutlinedButton text="Detalhes" path={`movie/${id}`} />
        </div>
      </div>
    </>
  );
};
