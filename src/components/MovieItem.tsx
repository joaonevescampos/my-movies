import OutlinedButton from "./OutlinedButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface MovieProps {
  posterPath: string;
  title: string;
  releaseDate: string;
  id:string;
}

export const MovieItem = ({
  posterPath,
  title,
  releaseDate,
  id
}: MovieProps) => {
  return (
    <>
      <div className="w-[140px] md:w-[200px]">
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={title}
          className="rounded-tl-xl rounded-tr-xl"
        />
        <div className="relative flex flex-col p-2 md:p-4 gap-2 bg-[#070707] rounded-bl-xl rounded-br-xl w-[140px] md:w-[200px]">
          <FavoriteBorderIcon className="absolute right-1 text-gray-500"/>
          <h2 className="font-bold text-sm truncate w-[100px] md:w-[150px]  self-start">
            {title}
          </h2>
          <span className="text-gray-500 text-xs">{releaseDate}</span>
          <OutlinedButton text="Detalhes" path={`${id}`} />
        </div>
      </div>
    </>
  );
};
