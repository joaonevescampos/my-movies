import coverImage from "../assets/img/cover.png";
import FilledButton from "./FilledButton";

const Cover = () => {
  return (
    <section>
      <div className="relative w-full h-full">
        <img
          src={coverImage}
          alt="superman"
          className="w-full h-full max-h-[500px] object-cover"
        />
        <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-black/80"></div>
        <div className="absolute flex flex-col gap-4 bottom-4 left-4 md:bottom-8 md:left-8">
          <h1 className="uppercase font-bold text-xl md:text-4xl">Superman</h1>
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
