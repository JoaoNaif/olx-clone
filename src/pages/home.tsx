import {
  FaCar,
  FaHouse,
  FaLightbulb,
  FaLocationDot,
  FaPlus,
} from "react-icons/fa6";
import { SlideHome } from "../components/SlideHome";
import { data } from "../data/product";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { IoIosFootball } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { useState } from "react";
import { HoverUserLogin } from "../components/HoverUserLogin";
import { Link } from "react-router-dom";

export const Home = () => {
  const sch = useAppSelector((state) => state.search);
  const theme = useAppSelector((state) => state.theme);

  const [catId, setCatId] = useState<number>(0);
  const date = new Date();

  const products = data;
  const filter =
    sch.status.length > 0
      ? products.map((item) =>
          item.produtos.filter((i) =>
            i.nome.toLocaleLowerCase().includes(sch.status.toLocaleLowerCase())
          )
        )
      : [];

  const category = products.filter((item) => item.id === catId);
  return (
    <div className="container mx-auto mt-5 ">
      <SlideHome />
      <nav className="my-5 ">
        <ul className="flex justify-evenly ">
          <li
            onClick={() => setCatId(1)}
            className={`text-3xl p-2 rounded-md  cursor-pointer hover:scale-110 transition duration-400 ease-in font-bold flex items-center ${
              theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800 "
            } `}
          >
            <HoverUserLogin description="Carros">
              <FaCar />
            </HoverUserLogin>
          </li>
          <li
            onClick={() => setCatId(2)}
            className={`text-3xl p-2 rounded-md cursor-pointer hover:scale-110 transition duration-400 ease-in font-bold flex items-center ${
              theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800 "
            } `}
          >
            <HoverUserLogin description="Esportes">
              <IoIosFootball />
            </HoverUserLogin>
          </li>
          <li
            onClick={() => setCatId(3)}
            className={`text-3xl p-2 rounded-md  cursor-pointer hover:scale-110 transition duration-400 ease-in font-bold flex items-center ${
              theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800 "
            } `}
          >
            <HoverUserLogin description="Moda">
              <FaTshirt />
            </HoverUserLogin>
          </li>
          <li
            onClick={() => setCatId(4)}
            className={`text-3xl p-2 rounded-md cursor-pointer hover:scale-110 transition duration-400 ease-in font-bold flex items-center ${
              theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800 "
            } `}
          >
            <HoverUserLogin description="Celulares">
              <MdPhoneAndroid />
            </HoverUserLogin>
          </li>
          <li
            onClick={() => setCatId(5)}
            className={`text-3xl p-2 rounded-md cursor-pointer hover:scale-110 transition duration-400 ease-in font-bold flex items-center ${
              theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800 "
            } `}
          >
            <HoverUserLogin description="Imóveis">
              <FaHouse />
            </HoverUserLogin>
          </li>
          <li
            onClick={() => setCatId(6)}
            className={`text-3xl p-2 rounded-md cursor-pointer hover:scale-110 transition duration-400 ease-in flex items-center font-bold ${
              theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800 "
            } `}
          >
            <HoverUserLogin description="Decoração">
              <FaLightbulb />
            </HoverUserLogin>
          </li>
          <li
            onClick={() => setCatId(0)}
            className={`text-3xl p-2 rounded-md cursor-pointer hover:scale-110 transition duration-400 ease-in flex items-center font-bold ${
              theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800 "
            } `}
          >
            <HoverUserLogin description="Tudo">
              <FaPlus />
            </HoverUserLogin>
          </li>
        </ul>
      </nav>

      {sch.status.length > 0
        ? products.map((item) => (
            <ul key={item.id} className="flex flex-col ">
              {item.produtos.map((i) => (
                <li key={i.id}>
                  {i.nome
                    .toLocaleLowerCase()
                    .includes(sch.status.toLocaleLowerCase()) && (
                    <Link
                      to={`/category/${item.id}/${i.id}`}
                      key={i.id}
                      className={`flex `}
                    >
                      <div
                        className={`text-5xl flex justify-center items-center h-48 w-1/4 border-2 rounded-md mr-1 ${
                          theme.status === "dark"
                            ? "bg-slate-200 border-zinc-800 hover:border-rose-500 hover:border-4"
                            : "bg-zinc-800 border-slate-200 hover:border-amber-700 hover:border-4"
                        }`}
                      >
                        {item.id === 1 && <FaCar />}
                        {item.id === 2 && <IoIosFootball />}
                        {item.id === 3 && <FaTshirt />}
                        {item.id === 4 && <MdPhoneAndroid />}
                        {item.id === 5 && <FaHouse />}
                        {item.id === 6 && <FaLightbulb />}
                      </div>
                      <div
                        className={`border w-full ${
                          theme.status === "dark"
                            ? "border-slate-200"
                            : "border-zinc-800"
                        }`}
                      >
                        <div>
                          <div className="m-4">
                            <h1 className="font-bold text-xl">
                              R${i.preco.toFixed(2)}
                            </h1>
                            <h3 className="text-lg mt-2">{i.nome}</h3>
                          </div>
                          <div className="m-4">
                            <span className="flex items-center gap-1">
                              <FaLocationDot />
                              <p>Itaquera - SP</p>
                            </span>
                            <span className="flex items-center mt-3 text-sm">
                              <p className="mr-1">Hoje,</p>
                              {date.getHours()}:
                              {date.getMinutes() > 10
                                ? date.getMinutes()
                                : `0${date.getMinutes()}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ))
        : []}
      {sch.status.length === 0 && (
        <div>
          {catId === 0 ? (
            <ul className="">
              {products.map((item) => (
                <ul
                  key={item.id}
                  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10"
                >
                  {item.produtos.map((i) => (
                    <Link
                      to={`/category/${item.id}/${i.id}`}
                      key={i.id}
                      className={` w-2/3 rounded-md overflow-x-hidden mx-auto border transition-all duration-200 ease-in cursor-pointer hover:scale-105 ${
                        theme.status === "dark"
                          ? "border-slate-200 "
                          : " border-zinc-800"
                      }`}
                    >
                      <div
                        className={`text-5xl flex justify-center items-center h-48  ${
                          theme.status === "dark"
                            ? "bg-slate-200"
                            : "bg-zinc-800"
                        }`}
                      >
                        {item.id === 1 && <FaCar />}
                        {item.id === 2 && <IoIosFootball />}
                        {item.id === 3 && <FaTshirt />}
                        {item.id === 4 && <MdPhoneAndroid />}
                        {item.id === 5 && <FaHouse />}
                        {item.id === 6 && <FaLightbulb />}
                      </div>
                      <div className=" overflow-x-hidden">
                        <div>
                          <div className="m-4">
                            <h1 className="font-bold text-xl">
                              R${i.preco.toFixed(2)}
                            </h1>
                            <h3 className="text-lg mt-2">{i.nome}</h3>
                          </div>
                          <div className="m-4">
                            <span className="flex items-center gap-1">
                              <FaLocationDot />
                              <p>Itaquera - SP</p>
                            </span>
                            <span className="flex items-center mt-3 text-sm">
                              <p className="mr-1">Hoje,</p>
                              {date.getHours()}:
                              {date.getMinutes() > 10
                                ? date.getMinutes()
                                : `0${date.getMinutes()}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </ul>
              ))}
            </ul>
          ) : (
            <div className="">
              {category.map((item) => (
                <ul
                  key={item.id}
                  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10 "
                >
                  {item.produtos.map((i) => (
                    <Link
                      to={`/category/${item.id}/${i.id}`}
                      key={i.id}
                      className={` w-2/3 rounded-md overflow-x-hidden mx-auto border transition-all duration-200 ease-in cursor-pointer hover:scale-105 ${
                        theme.status === "dark"
                          ? "border-slate-200 "
                          : " border-zinc-800"
                      }`}
                    >
                      <div
                        className={`text-5xl flex justify-center items-center h-48  ${
                          theme.status === "dark"
                            ? "bg-slate-200"
                            : "bg-zinc-800"
                        }`}
                      >
                        {item.id === 1 && <FaCar />}
                        {item.id === 2 && <IoIosFootball />}
                        {item.id === 3 && <FaTshirt />}
                        {item.id === 4 && <MdPhoneAndroid />}
                        {item.id === 5 && <FaHouse />}
                        {item.id === 6 && <FaLightbulb />}
                      </div>
                      <div className=" overflow-x-hidden">
                        <div>
                          <div className="m-4">
                            <h1 className="font-bold text-xl">
                              R${i.preco.toFixed(2)}
                            </h1>
                            <h3 className="text-lg mt-2">{i.nome}</h3>
                          </div>
                          <div className="m-4">
                            <span className="flex items-center gap-1">
                              <FaLocationDot />
                              <p>Itaquera - SP</p>
                            </span>
                            <span className="flex items-center mt-3 text-sm">
                              <p className="mr-1">Hoje,</p>
                              {date.getHours()}:
                              {date.getMinutes() > 10
                                ? date.getMinutes()
                                : `0${date.getMinutes()}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
