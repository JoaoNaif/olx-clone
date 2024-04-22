import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { setThemeStatus } from "../redux/reducers/themeReducer";
import { setSearchStatus } from "../redux/reducers/searchReducer";
import { FaMagnifyingGlass, FaMoon, FaSun } from "react-icons/fa6";
import { BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SignUp } from "./SignUp";
import { UserLogin } from "./UserLogin";

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.theme);
  const sch = useAppSelector((state) => state.search);

  const handleChangeTheme = () => {
    dispatch(setThemeStatus(theme.status === "light" ? "dark" : "light"));
  };
  const handleSearchButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchStatus(e.target.value));
  };

  return (
    <header
      className={`flex justify-center items-center p-4 gap-3 border-b ${
        theme.status === "dark" ? "border-slate-200" : "border-zinc-800"
      }`}
    >
      <Link
        to={"/"}
        className="flex items-center font-bold text-xl md:text-3xl"
      >
        <p className="text-blue-500">J</p>
        <p className="text-2xl md:text-4xl">V</p>
        <p className="text-yellow-500">N</p>
      </Link>
      <input
        type="text"
        className={`w-1/4 h-full text-sm md:text-xl p-2 border-2  outline-none rounded-md bg-transparent hover:transition-colors hover:duration-300 hover:ease-in ${
          theme.status === "dark"
            ? "hover:border-rose-500 focus:border-rose-500 border-slate-200"
            : "hover:border-amber-700 focus:border-amber-700 border-zinc-800"
        }`}
        onChange={handleSearchButton}
        value={sch.status}
        placeholder="Pesquisar"
      />
      <div
        className={`${
          theme.status === "light" ? "bg-zinc-800" : "bg-slate-200"
        } text-3xl p-2 rounded-full hidden md:block`}
      >
        <FaMagnifyingGlass />
      </div>
      <div
        className={`${
          theme.status === "light" ? "bg-zinc-800" : "bg-slate-200"
        } text-3xl p-2 rounded-full hidden md:block`}
      >
        <BsChat />
      </div>
      <SignUp />
      <UserLogin />
      <button
        className={`font-bold text-3xl p-1 md:p-2 rounded-full ${
          theme.status === "dark"
            ? "bg-slate-200 hover:bg-slate-300 cursor-pointer"
            : "bg-zinc-800 hover:bg-zinc-900 cursor-pointer"
        }`}
        onClick={handleChangeTheme}
      >
        {theme.status === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};
