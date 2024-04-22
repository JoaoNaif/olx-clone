import { FaUserCircle } from "react-icons/fa";
import { useAppSelector } from "../redux/hooks/useAppSelector";

export const TempLogin = () => {
  const login = useAppSelector((state) => state.login);
  return (
    <div className="flex flex-col items-center justify-center p-1">
      <FaUserCircle className="text-2xl" />
      <p className="my-3">{login.name}</p>
      <span>{login.email}</span>
    </div>
  );
};
