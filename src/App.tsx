import { AnimatePresence } from "motion/react";
import Loader from "./components/ui/Loader/Loader";
import useLoading from "./hooks/useLoading";
import Cursor from "./components/common/Cursor/Cursor";

import AppRoutes from "./routes/AppRoutes";

function App() {
  const { progress, finished } =
    useLoading(3200);

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
          <AppRoutes />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;