import { useAppSelector } from "./redux/hooks/useAppSelector";
import { MainRoute } from "./routes/MainRoute";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div
      className={`min-h-screen overflow-x-hidden  ${
        theme.status === "light"
          ? "bg-zinc-200 text-amber-700"
          : "bg-zinc-900 text-rose-500"
      }`}
    >
      <Header />

      <MainRoute />

      <Footer />
    </div>
  );
}

export default App;
