import OutlinedButton from "./OutlinedButton";

interface MovieProps {
  movieId: string;
  posterUrl: string;
  movieName: string;
  movieDate: string;
}

export const MovieItem = ({
  posterUrl,
  movieName,
  movieDate,
  movieId,
}: MovieProps) => {
  return (
    <>
      <div className="w-[200px]">
        <img
          src={posterUrl}
          alt={movieName}
          className="rounded-tl-xl rounded-tr-xl"
        />
        <div className="flex flex-col items-center p-2 gap-2 bg-[#070707] rounded-bl-xl rounded-br-xl">
          <h2 className="font-bold truncate w-[100px] xl:w-96 text-center">
            {movieName}
          </h2>
          <span className="text-gray-500 text-sm">{movieDate}</span>
          <OutlinedButton text="Assistir" path={`${movieId}`} />
        </div>
      </div>
    </>
  );
};
