import FilledButton from "./FilledButton";
import backdropFallback from "../assets/img/backdrop-fallback.jpg";
import { Link } from "react-router-dom";

const Cover = ({ movie }: any) => {
  return (
    <section>
      <div className="relative w-full h-full">
        <img
          src={
            movie?.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
              : backdropFallback
          }
          alt="superman"
          className="w-full h-full min-h-[400px] lg:max-h-[600px] object-cover"
        />
        <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,1))] bottom-[-1px]"></div>
        <div className="absolute flex flex-col gap-4 bottom-4 left-4 md:bottom-8 md:left-8">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-xl">
              Bem vindo(a) ao My Movies!
            </span>
            <span className="opacity-50 text-sm">
              Assista o filme em alta do momento:
            </span>
          </div>
          <h1 className="uppercase font-bold text-xl md:text-3xl">
            {movie?.title ? `${movie?.title}` : "CARREGANDO..."}
          </h1>
          <Link to={`${movie?.provider}`}>
            <FilledButton text="Assistir agora" bgColor="#6700D4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cover;
