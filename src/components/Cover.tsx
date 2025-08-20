import coverImage from "../assets/img/cover.png";
import CustomizedButtons from "./CustumazedButtons";

const Cover = () => {
  return (
    <section>
      <picture className="relative w-full">
        <img
          src={coverImage}
          alt="superman"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-black/80"></div>
        <div className="absolute flex flex-col gap-4 bottom-12 left-12">
          <h1 className="uppercase font-bold">Superman</h1>
          <div>
            <CustomizedButtons />
          </div>
        </div>
      </picture>
    </section>
  );
};

export default Cover;
