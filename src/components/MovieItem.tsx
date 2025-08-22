import OutlinedButton from "./OutlinedButton";

interface MovieProps {
  posterUrl: string;
  movieName: string;
  movieDate: string;
}

export const MovieItem = ({ posterUrl, movieName, movieDate }: MovieProps) => {
  return (
    <>
      <div className="w-[200px]">
        <img src={posterUrl} alt={movieName} className="rounded-tl-xl rounded-tr-xl"/>
        <div className="flex flex-col items-center p-2 gap-2 bg-[#070707] rounded-bl-xl rounded-br-xl">
          <h2 className="font-bold truncate w-[180px] text-center">{movieName}</h2>
          <span className="text-gray-500 text-sm">{movieDate}</span>
          <OutlinedButton />
        </div>
      </div>
    </>
  );
};
