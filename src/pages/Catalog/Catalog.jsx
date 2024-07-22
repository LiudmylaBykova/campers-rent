import SearchBar from "../../components/SearchBar/SearchBar";
import CampersList from "../../components/CampersList/CampersList";

import css from "../Catalog/Catalog.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { selectIsError } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Catalog = () => {
  const isError = useSelector(selectIsError);
  return (
    <div className={css.section}>
      <div className={css.container}>
        <SearchBar />
        {isError && <ErrorMessage />}
        {!isError && <CampersList />}
      </div>
    </div>
  );
};

export default Catalog;
