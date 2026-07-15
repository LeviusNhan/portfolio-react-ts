import Home from "./pages/Home";
import { AnimatePresence } from "motion/react";
import Loader from "./components/ui/Loader/Loader";
import useLoading from "./hooks/useLoading";
import Cursor from "./components/common/Cursor/Cursor";

function App() {
  const { progress, finished } = useLoading(3200);

  return (
  <>
    <Cursor />

    <AnimatePresence mode="wait">
      {!finished ? (
        <Loader
          key="loader"
          progress={progress}
        />
      ) : (
        <Home key="home" />
      )}
    </AnimatePresence>
  </>
);
}

export default App;