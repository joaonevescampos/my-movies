import { Favorite, Key } from "@mui/icons-material";
import OutlinedButton from "./OutlinedButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
// import { useEffect, useState } from "react";

interface MovieProps {
  posterPath?: string;
  title?: string;
  releaseDate?: string;
  id?: string;
}

export const MovieItem = ({
  posterPath,
  title,
  releaseDate,
  id,
}: MovieProps) => {
  const [favorited, setFavorited] = useState(false);
  // const [wasFavorited, setWasFavorited] = useState(false);

  // useEffect(() => {
  //   for(let i=0; i < localStorage.length; i++) {
  //     localStorage.getItem(localStorage.key(i)) == id ? setWasFavorited(true) : setWasFavorited(false)
  //     console.log('value key', localStorage.getItem(localStorage.key(i)), 'id', id)
  //   }
  // }, [wasFavorited])

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
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={title}
          className="rounded-tl-xl rounded-tr-xl h-52 md:h-72 object-cover"
        />
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
          <OutlinedButton text="Detalhes" path={`${id}`} />
        </div>
      </div>
    </>
  );
};
