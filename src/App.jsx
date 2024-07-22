import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
