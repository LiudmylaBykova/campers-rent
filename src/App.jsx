import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Catalog from "./pages/Catalog/Catalog";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
