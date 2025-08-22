import FilledButton from "./FilledButton";

const MovieDetailComponent = () => {
  const movie = {
    adult: false,
    backdrop_path: "/A466i5iATrpbVjX30clP1Zyfp31.jpg",
    genre_ids: [10749, 35, 18],
    id: 1307078,
    original_language: "en",
    original_title: "My Oxford Year",
    overview:
      "Uma americana ambiciosa em busca de seu sonho de estudar em Oxford se apaixona por um britânico charmoso com um segredo inimaginável.",
    popularity: 133.4895,
    poster_path: "/lukWPY3ouONKJ31oXhkBg7ShUEh.jpg",
    release_date: "2025-07-31",
    title: "Meu Ano em Oxford",
    video: false,
    vote_average: 7.247,
    vote_count: 299,
  };
  return (
    <main className="relative w-screen h-screen">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
        className="h-screen w-screen object-cover inset-0"
      />
      <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-black/80 h-full"></div>

      <div className="flex gap-12 absolute z-10 top-1/2 left-1/2 -translate-1/2 w-full max-w-[1200px] px-16">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-80 rounded"
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">{movie.title}</h1>
          <h2>{}</h2>
          <span>{movie.release_date}</span>
          <p>{movie.overview}</p>
          <span>{movie.vote_average}</span>
          <div className="flex gap-4">
            <FilledButton text="Assistir" bgColor="#6700D4" />
            <FilledButton text="Trailer" bgColor="#ffffff" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetailComponent;
