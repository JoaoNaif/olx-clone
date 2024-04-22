const teste = () => {
  return (
    <div>
      {item.produtos.map((i) => (
        <li
          key={i.id}
          className={` w-2/3 rounded-md mx-auto border transition-all duration-200 ease-in cursor-pointer hover:scale-105 ${
            theme.status === "dark" ? "border-slate-200 " : " border-zinc-800"
          }`}
        >
          <div>
            <div className="m-4">
              <h1 className="font-bold text-xl">R${i.preco.toFixed(2)}</h1>
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
        </li>
      ))}
    </div>
  );
};
