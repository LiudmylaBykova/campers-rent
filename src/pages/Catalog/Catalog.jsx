import SearchBar from "../../components/SearchBar/SearchBar";
import CampersList from "../../components/CampersList/CampersList";

import css from "../Catalog/Catalog.module.css";

const Catalog = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <SearchBar />
        <CampersList />
      </div>
    </div>
  );
};

export default Catalog;
