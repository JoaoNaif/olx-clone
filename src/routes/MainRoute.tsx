import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Category } from "../pages/category";
import { NotFound } from "../pages/notFound";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug/:slug1" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
