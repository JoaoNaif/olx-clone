import { useAppSelector } from "../redux/hooks/useAppSelector";

export const LoginInfo = () => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <div
      className={`lg:h-1/2 lg:w-1/5 w-3/5 text-white lg:rounded-r-3xl rounded-b-md ${
        theme.status === "dark" ? "bg-rose-500" : "bg-amber-700"
      }`}
    >
      <div className="flex flex-col items-center justify-center p-2">
        <ul
          className={`flex ${
            theme.status === "dark"
              ? "bg-slate-200 hover:bg-zinc-800"
              : "bg-zinc-800 hover:bg-slate-200 "
          } rounded-full justify-center items-center lg:w-1/2 md:h-32 w-1/3 lg:h-40 h-20 text-4xl mt-5 transition-colors duration-300 ease-in font-bold`}
        >
          <li className="text-blue-500">J</li>
          <li
            className={`text-5xl ${
              theme.status === "light" ? "text-rose-500  " : "text-amber-700"
            }`}
          >
            V
          </li>
          <li className="text-yellow-500">N</li>
        </ul>
        <h1 className="lg:text-3xl md:text-2xl text-xl my-4">Seja bem Vindo</h1>
        <p className="text-center text-sm md:text-lg mt-3">
          Façam o cadastro no maior mercado virtual da América Látina e
          Aproveite ofertas, descontos e produtos{" "}
        </p>
      </div>
    </div>
  );
};
