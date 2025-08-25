import FilledButton from "./FilledButton";
import backdropFallback from "../assets/img/backdrop-fallback.jpg"

const Cover = ({movie}:any) => {
  console.log(movie)
  return (
    <section>
      <div className="relative w-full h-full">
        <img
          src={movie?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : backdropFallback}
          alt="superman"
          className="w-full h-full min-h-[400px] lg:max-h-[600px] object-cover"
        />
        <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-black/80"></div>
        <div className="absolute flex flex-col gap-4 bottom-4 left-4 md:bottom-8 md:left-8">
          <h1 className="uppercase font-bold text-xl md:text-4xl">{movie?.title ? `${movie?.title}` : 'BEM VINDO(A) AO MY MOVIES'}</h1>
          <div className="flex gap-4">
            <FilledButton text = "Assistir" bgColor="#6700D4"/>
            <FilledButton text = "Trailer" bgColor="#ffffff"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
