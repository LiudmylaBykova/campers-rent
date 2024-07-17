import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import Catalog from "./pages/Catalog/Catalog";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
