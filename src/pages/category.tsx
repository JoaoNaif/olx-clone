import { useParams } from "react-router-dom";
import { data } from "../data/product";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { FaBuilding, FaMap, FaRegHeart } from "react-icons/fa6";
import { PiShareNetworkDuotone } from "react-icons/pi";
import { MdAddAPhoto, MdDateRange, MdOutlineEmail } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { FaCheckCircle, FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export const Category = () => {
  const params = useParams();
  const products = data;
  const fId = params.slug !== undefined ? parseInt(params.slug) : 0;
  const sId = params.slug1 !== undefined ? parseInt(params.slug1) : 0;

  const theme = useAppSelector((state) => state.theme);

  const filter = products.filter((item) => item.id === fId);
  const fill = filter.map((item) => item.produtos.filter((i) => i.id === sId));

  const date = new Date();
  return (
    <div>
      <ul className="container mx-auto p-1">
        {fill.map((item) => (
          <li key={0}>
            {item.map((i) => (
              <div key={i.id}>
                <div className="flex justify-between px-2 md:px-5 my-4 text-sm">
                  <p>São Paulo - São Paulo e região</p>
                  <div className="flex items-center ">
                    <p
                      className={`border-r pr-3 mr-3 ${
                        theme.status === "dark"
                          ? "border-rose-500"
                          : "border-amber-700"
                      }`}
                    >
                      {date.getDate()}/
                      {date.getMonth() > 10
                        ? date.getMonth()
                        : `0${date.getMonth()}`}
                      /{date.getFullYear()}
                    </p>
                    <FaRegHeart className="text-2xl mr-3" />
                    <PiShareNetworkDuotone className="text-2xl" />
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-start lg:flex-row gap-2">
                  <div className="grid grid-cols-4 gap-3 lg:w-4/5 w-full">
                    <div
                      className={`row-span-2 col-span-2  h-full flex items-center justify-center text-5xl ${
                        theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800"
                      }`}
                    >
                      <MdAddAPhoto />
                    </div>
                    <div
                      className={`${
                        theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800"
                      } h-[300px] flex items-center justify-center text-5xl`}
                    >
                      <MdAddAPhoto />
                    </div>
                    <div
                      className={`${
                        theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800"
                      } h-[300px] flex items-center justify-center text-5xl`}
                    >
                      <MdAddAPhoto />
                    </div>
                    <div
                      className={`${
                        theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800"
                      } h-[300px] flex items-center justify-center text-5xl`}
                    >
                      <MdAddAPhoto />
                    </div>
                    <div
                      className={`${
                        theme.status === "dark" ? "bg-slate-200" : "bg-zinc-800"
                      } h-[300px] flex items-center justify-center text-5xl`}
                    >
                      <MdAddAPhoto />
                    </div>
                  </div>
                  <div
                    className={`${
                      theme.status === "dark"
                        ? "bg-slate-700"
                        : "bg-stone-200 border-zinc-800"
                    } lg:w-1/5 w-full rounded-md border p-2 flex flex-col `}
                  >
                    <h1 className="mt-8 text-3xl">R$ {i.preco.toFixed(2)}</h1>
                    <span
                      className={`text-white ${
                        theme.status === "dark" ? "bg-rose-500" : "bg-amber-700"
                      } w-1/5 text-center rounded-md my-5 text-sm`}
                    >
                      Venda
                    </span>
                    <ul className="flex flex-col px-2 gap-8">
                      <li className="border-b border-zinc-800 flex justify-between items-center">
                        <p>Data Anúncio</p>
                        <p className="text-sm">12/03/2024</p>
                      </li>
                      <li className="border-b border-zinc-800 flex justify-between items-center">
                        <p>Status:</p> <p className="text-sm">Disponível</p>
                      </li>
                      <li className="border-b border-zinc-800 flex justify-between items-center text-green-600 ">
                        <p className="hover:underline">Simular financiamento</p>
                        <BsCashCoin className="text-xl" />
                      </li>
                    </ul>
                    <div className="flex items-center text-2xl my-10">
                      <FaPhoneAlt className="mr-2" />
                      <p>(99) 92345-9876</p>
                    </div>
                    <button
                      className={`flex items-center justify-center gap-2 ${
                        theme.status === "dark"
                          ? "bg-rose-500 hover:bg-rose-700"
                          : "bg-amber-700 hover:bg-amber-800"
                      } text-white p-2 rounded-full `}
                    >
                      <MdOutlineEmail className="text-2xl" />{" "}
                      <p className="text-xl">Enviar Mensagem</p>
                    </button>
                    <span
                      className={`mt-10 flex items-start gap-2 ${
                        theme.status === "dark"
                          ? "text-slate-200"
                          : "text-zinc-800"
                      }`}
                    >
                      <IoMdAlert className="text-5xl" />
                      <p className="text-sm">
                        Ao ver número ou enviar mensagem, seus dados poderão ser
                        compartilhados com o anunciante.
                      </p>
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-col-reverse lg:flex-row gap-3">
                  <div className=" lg:w-4/5 w-full flex flex-col">
                    <div>
                      <h1 className="text-2xl font-bold">
                        {i.nome} - Informações
                      </h1>
                      <p className="my-4 ">Código de Anúncio: {i.id}</p>
                      <span
                        className={`text-sm  cursor-pointer ${
                          theme.status === "dark"
                            ? "text-slate-200"
                            : "text-zinc-800"
                        }`}
                      >
                        <p className="max-w-96">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Ratione ad, quae id minima iste rem officiis
                          pariatur necessitatibus veniam sequi officia et sit
                          consequatur a voluptatem vel qui ducimus saepe?
                        </p>
                        <span className="hover:underline text-green-600">
                          Ver Descrição completa
                        </span>
                      </span>
                    </div>
                    <div
                      className={`h-1 w-full my-4 ${
                        theme.status === "dark" ? "bg-rose-500" : "bg-amber-700"
                      }`}
                    />
                    <div>
                      <h1 className="text-2xl font-bold ">Localização</h1>
                      <div
                        className={`flex justify-between p-4 border-2 mt-3 rounded ${
                          theme.status === "dark"
                            ? "bg-slate-200 border-rose-500"
                            : "bg-zinc-800 border-amber-700"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <FaBuilding className="text-5xl" />
                          <span>
                            <h3 className="font-bold text-xl">
                              Avenida João Neri de Carvalho
                            </h3>
                            <p className="text-sm">
                              Centro, São Miguel Paulista, SP, 08010-340
                            </p>
                          </span>
                        </div>
                        <button
                          className={`border px-2 rounded-lg flex items-center gap-3 hover:text-white ${
                            theme.status === "dark"
                              ? "border-rose-500 hover:bg-rose-500"
                              : "border-amber-700 hover:bg-amber-700"
                          } transition-colors duration-200 ease-in`}
                        >
                          <FaMap className="text-xl" />
                          <p>Exibir no mapa</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`lg:w-1/5 w-full flex flex-col items-center justify-center rounded-md border p-2 ${
                      theme.status === "dark"
                        ? "bg-slate-700 border-slate-200"
                        : "bg-stone-200 border-zinc-800"
                    }`}
                  >
                    <div className={`flex gap-2 mt-3`}>
                      <FaUserCircle className="text-5xl" />
                      <div>
                        <p className="text-sm">Profissional</p>
                        <h3 className="font-bold">Carlos Vendedor</h3>
                      </div>
                    </div>
                    <div
                      className={`text-sm mt-5 flex flex-col gap-2 ${
                        theme.status === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <MdDateRange />
                        <p>Na JVN desde fevereiro 2018</p>
                      </span>
                      <span className="flex items-center gap-2">
                        <IoLocationOutline />
                        <p>Centro, São Miguel Paulista - SP</p>
                      </span>
                    </div>
                    <button
                      className={`border mt-4 p-2 rounded-full hover:text-white ${
                        theme.status === "dark"
                          ? "border-rose-500 text-white hover:bg-rose-500 "
                          : "border-amber-700 text-black hover:bg-amber-700 "
                      } transition-colors duration-200 ease-in`}
                    >
                      Acessar perfil do anunciante
                    </button>
                    <div
                      className={`h-1 w-1/2 rounded-full my-5 ${
                        theme.status === "dark" ? "bg-rose-500" : "bg-amber-700"
                      }`}
                    />
                    <div>
                      <h3
                        className={`font-bold mb-2 ${
                          theme.status === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Informações Verificadas
                      </h3>
                      <ul className="flex flex-col gap-1 text-green-600">
                        <li className="flex items-center gap-2">
                          <FaCheckCircle />
                          <p>E-mail</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheckCircle />
                          <p>Telefone</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheckCircle />
                          <p>Perfil</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};
