import { MovieItem } from "./MovieItem";

const ListMovies = ({moviesList}) => {

  return (
    <>
      <div className="flex gap-4 justify-around max-w-[1150px] w-fit flex-wrap m-auto p-4">
        {moviesList.map((movie) => (
          <MovieItem
            posterPath={movie?.poster_path}
            title={movie?.title}
            releaseDate={movie?.release_date}
            key={movie?.id}
            id={movie?.id}
          />
        ))}
      </div>
    </>
  );
};

export default ListMovies;
