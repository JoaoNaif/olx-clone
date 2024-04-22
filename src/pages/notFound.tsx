import { FaRobot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-10">
      <FaRobot className="text-9xl" />
      <h1 className="text-4xl my-10">Not Found - 404</h1>
      <p className="text-2xl">Página não encontrada!</p>
      <Link to={`/`}>
        <p className="hover:underline">Voltar para Home</p>
      </Link>
    </div>
  );
};
