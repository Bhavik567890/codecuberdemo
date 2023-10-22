import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// import pages
const HomePage = lazy(() => import("./pages/Home"));
const SunBurstChartPage = lazy(() => import("./pages/SunBurstChart"));
function App() {
  return (
    <>
        <Suspense fallback={<h2>Loading....</h2>}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chart" element={<SunBurstChartPage />} />
      </Routes>
        </Suspense>
    </>
  );
}

export default App;
