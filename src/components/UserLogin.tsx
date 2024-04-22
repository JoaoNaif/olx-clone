import { FaUser } from "react-icons/fa6";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { HoverUserLogin } from "./HoverUserLogin";
import { TempLogin } from "./TempLogin";

export const UserLogin = () => {
  const theme = useAppSelector((state) => state.theme);
  const login = useAppSelector((state) => state.login);
  return (
    <>
      <button
        className={`text-3xl font-bold border-2 rounded-2xl p-1 md:p-2 hover:transition-colors hover:duration-300 hover:ease-in ${
          theme.status === "dark"
            ? "bg-slate-200 hover:border-rose-500 hover:text-rose-500 border-slate-200 text-rose-500 "
            : "bg-zinc-800 hover:border-amber-700 hover:text-amber-700 border-zinc-800 text-amber-700"
        }: `}
      >
        {login.access === true ? (
          <HoverUserLogin description={<TempLogin />}>
            <h1>
              {login.name.charAt(0).toLocaleUpperCase() +
                login.name.charAt(1).toLocaleUpperCase()}
            </h1>
          </HoverUserLogin>
        ) : (
          <FaUser />
        )}
      </button>
    </>
  );
};
