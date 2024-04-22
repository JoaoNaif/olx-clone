import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useAppSelector } from "../redux/hooks/useAppSelector";

export const Footer = () => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <div
      className={`border-t mt-10 flex justify-center items-center flex-col ${
        theme.status === "dark" ? "border-slate-200" : "border-zinc-800"
      }`}
    >
      <ul className="flex flex-col items-center gap-10 md:gap-0 md:items-start md:flex-row w-full justify-evenly my-5">
        <li>
          <h3 className="text-center mb-2">Contato</h3>
          <ul
            className={`flex flex-col gap-2  ${
              theme.status === "dark" ? "text-slate-200" : "text-zinc-800"
            }`}
          >
            <li>E-mail: joaonaif@gmail.com</li>
            <li>Hotmail: joaonaif@hotmail.com</li>
          </ul>
        </li>
        <li className="">
          <h3 className="text-center mb-2">Outros Projetos</h3>
          <ul
            className={` flex flex-col items-center gap-2 ${
              theme.status === "dark" ? "text-slate-200" : "text-zinc-800"
            }`}
          >
            <li>
              <a
                className="hover:underline"
                href="https://github.com/JoaoNaif/teste-contextApi"
              >
                Context-Api
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://github.com/JoaoNaif/jogo-memoria"
              >
                Jogo da Memória
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://github.com/JoaoNaif/movie-films"
              >
                Movie-Filme
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-center mb-2">Redes Sociais</h3>
          <ul
            className={`text-2xl flex gap-4 ${
              theme.status === "dark" ? "text-slate-200" : "text-zinc-800"
            }`}
          >
            <li>
              <a href="https://github.com/JoaoNaif">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/joaonaif/?hl=pt-br">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joaonaif/">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <span className="flex justify-between container font-bold">
        <p>Criado por: João Naif</p> <p>Finalizado: 29/03/2024</p>{" "}
      </span>
    </div>
  );
};
