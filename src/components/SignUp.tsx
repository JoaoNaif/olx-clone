import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { IoClose } from "react-icons/io5";
import { Account } from "../types/Account";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import {
  setAccess,
  setEmail,
  setName,
  setPassword,
} from "../redux/reducers/loginReducer";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { LoginInfo } from "./LoginInfo";
import { HoverDescription } from "./HoverDescription";
import { PiUserSwitchFill } from "react-icons/pi";

const SignUpFormSchema = z.object({
  name: z.string().min(2, "Mínimo 2 letras"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(7, "Mínimo 7 caracteres"),
});

interface Data {
  email: string;
  password: string;
  name: string;
}

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>({ resolver: zodResolver(SignUpFormSchema) });

  const theme = useAppSelector((state) => state.theme);
  const login = useAppSelector((state) => state.login);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [account, setAccount] = useState<Account[]>([]);
  const [listEmail, setListEmail] = useState<string[]>([]);
  const [create, setCreate] = useState(false);
  const [exist, setExist] = useState("");
  const [signExit, setSignExit] = useState(false);

  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");

  const [showStatus, setShowStatus] = useState(false);
  const [checkAlert, setCheckAlert] = useState("");

  useEffect(() => {
    check();
    exitModal();
  }, [showStatus, login.access]);

  const check = () => {
    let timer: NodeJS.Timeout;
    if (showStatus) {
      timer = setTimeout(() => {
        setShowStatus(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  };

  const exitModal = () => {
    let timerModal: NodeJS.Timeout;
    if (login.access) {
      timerModal = setTimeout(() => {
        setModal(false);
      }, 2000);
    }
    return () => clearTimeout(timerModal);
  };

  const handleSignUp = () => {
    if (login.access) {
      setSignExit(true);
    } else {
      setModal(true);
    }
  };

  const handleSignUpForm = (data: Data) => {
    const i = {
      email: data.email,
      password: data.password,
      name: data.name,
      id: account.length,
    };
    if (listEmail.includes(i.email)) {
      setExist(i.email);
      setCreate(true);
      setShowStatus(true);
      setCheckAlert("Conta já existente!");
    } else {
      setAccount([...account, i]);
      setListEmail([...listEmail, i.email]);
      setShowStatus(true);
      setCheckAlert("Conta Criada!");
    }

    reset();
  };

  const handleSignIn = (email: string, pass: string) => {
    if (exist !== "") {
      const emailFil = account.filter((i) => i.email === exist);
      console.log(emailFil);
      const passFil = emailFil.filter((i) => i.password === pass);
      console.log(passFil);
      const nameFil = emailFil.map((i) => i.name);

      if (passFil.length !== 0 && emailFil.length !== 0) {
        dispatch(setPassword(pass));
        dispatch(setEmail(exist));
        dispatch(setName(nameFil[0]));
        dispatch(setAccess(true));
        setShowStatus(true);
        setCheckAlert("Acesso Concluído");
        setSignEmail("");
        setSignPass("");
      } else {
        alert("Senha ou Email Incorreto");
      }
    } else {
      const emailFil = account.filter((i) => i.email === email);
      console.log(emailFil);
      const passFil = emailFil.filter((i) => i.password === pass);
      console.log(passFil);
      const nameFil = emailFil.map((i) => i.name);

      if (passFil.length !== 0 && emailFil.length !== 0) {
        dispatch(setPassword(pass));
        dispatch(setEmail(email));
        dispatch(setName(nameFil[0]));
        dispatch(setAccess(true));
        setShowStatus(true);
        setCheckAlert("Acesso Concluído");
        setSignEmail("");
        setSignPass("");
      } else {
        setShowStatus(true);
        setCheckAlert("ERRO! Senha ou Email Incorreto");
      }
    }
  };

  const handleToggleAccount = () => {
    setExist("");
    setCreate(!create);
  };

  const handleExitAccount = () => {
    dispatch(setPassword(""));
    dispatch(setEmail(""));
    dispatch(setName(""));
    dispatch(setAccess(false));
    setSignExit(false);
  };

  return (
    <>
      <button
        onClick={handleSignUp}
        className={`text-xl border-2 px-3 md:px-7 rounded-2xl py-1   hover:transition-colors hover:duration-300 hover:ease-in ${
          theme.status === "dark"
            ? "hover:border-rose-500 hover:text-rose-500 border-slate-200 text-slate-200"
            : "hover:border-amber-700 hover:text-amber-700 border-zinc-800 text-zinc-800"
        }: `}
      >
        {login.access === false ? "Entrar" : "Sair"}
      </button>
      {modal && (
        <div className="fixed max-h-screen h-full w-full top-0 flex lg:flex-row flex-col items-center justify-center bg-black bg-opacity-80 z-10">
          {create === true ? (
            <div
              className={`lg:h-1/2 lg:w-1/5 w-3/5 lg:rounded-l-3xl p-2 rounded-t-md ${
                theme.status === "dark" ? "bg-zinc-800" : "bg-slate-200"
              }`}
            >
              <div className="flex justify-between items-center p-2">
                <span
                  onClick={handleToggleAccount}
                  className="hover:underline cursor-pointer"
                >
                  Criar Conta
                </span>
                <IoClose
                  onClick={() => setModal(false)}
                  className={`lg:text-4xl text-3xl ${
                    theme.status === "light"
                      ? "bg-zinc-800 hover:text-slate-200"
                      : "bg-slate-200 hover:text-zinc-800"
                  } rounded-full cursor-pointer transition-colors duration-400 ease-in`}
                />
              </div>
              <div className="text-center">
                <h1 className="lg:text-3xl text-xl text-center font-bold my-7">
                  Entrar na Conta
                </h1>
                <form className="flex flex-col gap-4 items-center">
                  {exist !== "" ? (
                    <div className="flex items-center">
                      <h3 className="font-bold">Email: {exist}</h3>
                      <HoverDescription description="Trocar E-mail">
                        <button
                          type="button"
                          onClick={() => setExist("")}
                          className={` font-bold p-1 ml-2 rounded-full ${
                            theme.status === "dark"
                              ? "bg-slate-200 hover:bg-rose-500 text-rose-500 hover:text-slate-200"
                              : "bg-zinc-800 hover:bg-amber-700 text-amber-700 hover:text-zinc-800"
                          } transition-colors duration-200 ease-in`}
                        >
                          <PiUserSwitchFill className="text-xl" />
                        </button>
                      </HoverDescription>
                    </div>
                  ) : (
                    <div
                      className={`flex items-center border-b-2 ${
                        errors.name
                          ? "text-red-500 border-red-500 placeholder:text-red-500"
                          : `${
                              theme.status === "light"
                                ? "border-zinc-800 text-zinc-800 "
                                : "border-slate-200 text-slate-200"
                            }`
                      }`}
                    >
                      <MdEmail />
                      <input
                        type="email"
                        value={signEmail}
                        onChange={(e) => setSignEmail(e.target.value)}
                        placeholder="E-mail"
                        className="px-2 bg-transparent outline-none"
                      />
                    </div>
                  )}
                  <div
                    className={`flex items-center border-b-2 ${
                      errors.name
                        ? "text-red-500 border-red-500 placeholder:text-red-500"
                        : `${
                            theme.status === "light"
                              ? "border-zinc-800 text-zinc-800 "
                              : "border-slate-200 text-slate-200"
                          }`
                    }`}
                  >
                    <RiLockPasswordFill />
                    <input
                      type="password"
                      value={signPass}
                      onChange={(e) => setSignPass(e.target.value)}
                      placeholder="Senha"
                      className="px-2 bg-transparent outline-none"
                    />
                  </div>
                </form>
                <button
                  type="button"
                  className={`${
                    theme.status === "dark"
                      ? "border-slate-200 text-rose-500 hover:border-rose-500 hover:bg-rose-500 hover:text-white"
                      : "border-zinc-800 text-amber-700 hover:border-amber-700 hover:bg-amber-700 hover:text-white"
                  } border-2 py-1 px-4 rounded-2xl font-bold cursor-pointer transition-colors ease-linear duration-200 mt-5`}
                  onClick={() => handleSignIn(signEmail, signPass)}
                >
                  Entrar
                </button>
              </div>
            </div>
          ) : (
            <div
              className={`lg:h-1/2 lg:w-1/5 w-3/5 lg:rounded-l-3xl p-2 rounded-t-md ${
                theme.status === "dark" ? "bg-zinc-800" : "bg-slate-200"
              }`}
            >
              <div className="flex justify-between items-center p-2">
                <span
                  onClick={handleToggleAccount}
                  className="hover:underline cursor-pointer "
                >
                  Entrar na Conta
                </span>
                <IoClose
                  onClick={() => setModal(false)}
                  className={`text-4xl ${
                    theme.status === "light"
                      ? "bg-zinc-800 hover:text-slate-200"
                      : "bg-slate-200 hover:text-zinc-800"
                  } rounded-full cursor-pointer transition-colors duration-400 ease-in`}
                />
              </div>
              <div>
                <h1 className="text-3xl text-center font-bold my-8">
                  Criar conta
                </h1>
                <form
                  onSubmit={handleSubmit(handleSignUpForm)}
                  className="flex flex-col items-center justify-center gap-6  "
                >
                  <div>
                    <div
                      className={`flex items-center border-b-2 ${
                        errors.name
                          ? "text-red-500 border-red-500 placeholder:text-red-500"
                          : `${
                              theme.status === "light"
                                ? "border-zinc-800 text-zinc-800 "
                                : "border-slate-200 text-slate-200"
                            }`
                      }`}
                    >
                      <FaUser />
                      <input
                        type="text"
                        {...register("name")}
                        className={`px-2 bg-transparent outline-none`}
                        placeholder="Nome"
                      />
                    </div>

                    <p className="text-red-500">
                      {errors.name?.message as string}
                    </p>
                  </div>

                  <div>
                    <div
                      className={`flex items-center border-b-2 ${
                        errors.email
                          ? "text-red-500 border-red-500 placeholder:text-red-500"
                          : `${
                              theme.status === "light"
                                ? "border-zinc-800 text-zinc-800 "
                                : "border-slate-200 text-slate-200"
                            }`
                      }`}
                    >
                      <MdEmail />
                      <input
                        type="email"
                        {...register("email")}
                        className={`px-2 bg-transparent outline-none `}
                        placeholder="E-mail"
                      />
                    </div>
                    <p className="text-red-500">
                      {errors.email?.message as string}
                    </p>
                  </div>

                  <div>
                    <div
                      className={`flex items-center border-b-2 ${
                        errors.password
                          ? "text-red-500 border-red-500 placeholder:text-red-500"
                          : `${
                              theme.status === "light"
                                ? "border-zinc-800 text-zinc-800 "
                                : "border-slate-200 text-slate-200"
                            }`
                      }`}
                    >
                      <RiLockPasswordFill />
                      <input
                        type="password"
                        {...register("password")}
                        className={`px-2 bg-transparent outline-none`}
                        placeholder="Senha"
                      />
                    </div>
                    <p className="text-red-500">
                      {errors.password?.message as string}
                    </p>
                  </div>

                  <input
                    type="submit"
                    value={`Cadastrar`}
                    className={`${
                      theme.status === "dark"
                        ? "border-slate-200 text-rose-500 hover:border-rose-500 hover:bg-rose-500 hover:text-white"
                        : "border-zinc-800 text-amber-700 hover:border-amber-700 hover:bg-amber-700 hover:text-white"
                    } border-2 py-1 px-4 rounded-2xl font-bold cursor-pointer transition-colors ease-linear duration-200`}
                  />
                </form>
              </div>
            </div>
          )}
          <LoginInfo />
          <h1>
            {showStatus && (
              <div
                className={`absolute top-0 right-0 text-2xl rounded-md m-3 p-2 text-white ${
                  checkAlert.includes("ERRO") ? "bg-red-500" : "bg-green-600"
                }`}
              >
                <h1>{checkAlert}</h1>
              </div>
            )}
          </h1>
        </div>
      )}
      {signExit && (
        <div className="fixed max-h-screen h-full w-full top-0 bg-black bg-opacity-80 flex items-center justify-center font-bold z-10">
          <div className="bg-white w-[300px] h-[300px] flex flex-col justify-evenly items-center rounded">
            <h1 className="my-3 text-2xl">Deseja realmente sair?</h1>
            <p>Logado: {login.email}</p>
            <div className="flex gap-12 my-3 ">
              <button
                onClick={handleExitAccount}
                className={`border-zinc-800 border-2 py-1 px-4 rounded-3xl ${
                  theme.status === "dark"
                    ? "hover:border-rose-500 hover:bg-rose-500 hover:text-white"
                    : "hover:border-amber-700 hover:bg-amber-700 hover:text-white"
                } transition-colors duration-200 ease-in`}
              >
                Sair
              </button>
              <button
                onClick={() => setSignExit(false)}
                className={`border-zinc-800 border-2 py-1 px-4 rounded-3xl ${
                  theme.status === "dark"
                    ? "hover:border-rose-500 hover:bg-rose-500 hover:text-white"
                    : "hover:border-amber-700 hover:bg-amber-700 hover:text-white"
                } transition-colors duration-200 ease-in`}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
