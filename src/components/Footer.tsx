import githubIcon from "../assets/img/github-icon.png";
import logo from "../assets/img/logo.png";
import tmdbLogo from "../assets/img/tmdb-logo.svg";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full h-36 bg-[#070707] px-12">
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Desenvolvido por:</span>
        <a
          href="https://github.com/joaonevescampos"
          target="_blank"
          className="flex gap-4 items-center"
        >
          <img src={githubIcon} alt="icone github" />
          <span className="text-sm text-gray-300">@joaonevescampos</span>
        </a>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <img src={logo} alt="logo" className="w-36" />
        <small className="text-gray-500">
          Copyrights. Todos direitos reservados
        </small>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">API consumida:</span>
        <a
          href="https://developer.themoviedb.org/reference/intro/getting-started"
          target="_blank"
          className="flex gap-4 items-center"
        >
          <img src={tmdbLogo} alt="tmdb logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
