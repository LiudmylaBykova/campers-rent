import React from "react";
import { useForm } from "react-hook-form";

import icon from "../../assets/icons.svg";
import css from "../SearchBar/SearchBar.module.css";

import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearchBtnSubmit = (values, actions) => {
    // ===
  };
  return (
    <div className={css.searchContainer}>
      <form className={css.form}>
        <p className={css.location}> Location</p>
        <div className={css.locationWrap}>
          <label>
            <input
              className={css.locationInput}
              type="text"
              placeholder="City"
            />
          </label>
          <svg className={css.locationSvg} width="9" height="10">
            <use href={`${icon}#icon-map`}></use>
          </svg>
        </div>
        <div className={css.wrap}>
          <p className={css.equipmantText}>Filters</p>
          <h2 className={css.title}>Vehicle equipment</h2>

          <ul className={css.list}>
            <li>
              <div className={css.listItem}>
                <label>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="equipmant"
                  />
                </label>
                <div className={css.svgDescriptionWrap}>
                  <svg className={css.svg} width="16" height="16">
                    <use href={`${icon}#icon-wind`}></use>
                  </svg>
                  <p className={css.description}>AC</p>
                </div>
              </div>
            </li>
            <li>
              <div className={css.listItem}>
                <label>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="equipmant"
                  />
                </label>
                <div className={css.svgDescriptionWrap}>
                  <svg className={css.svg} width="16" height="16">
                    <use href={`${icon}#icon-automatic`}></use>
                  </svg>
                  <p className={css.description}>Automatic</p>
                </div>
              </div>
            </li>
            <li>
              <div className={css.listItem}>
                <label>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="equipmant"
                  />
                </label>
                <div className={css.svgDescriptionWrap}>
                  <svg className={css.svg} width="16" height="16">
                    <use href={`${icon}#icon-kitchen`}></use>
                  </svg>
                  <p className={css.description}>Kitchen</p>
                </div>
              </div>
            </li>
            <li>
              <div className={css.listItem}>
                <label>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="equipmant"
                  />
                </label>
                <div className={css.svgDescriptionWrap}>
                  <svg className={css.svg} width="16" height="16">
                    <use href={`${icon}#icon-tv`}></use>
                  </svg>
                  <p className={css.description}>TV</p>
                </div>
              </div>
            </li>
            <li>
              <div className={css.listItem}>
                <label>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="equipmant"
                  />
                </label>
                <div className={css.svgDescriptionWrap}>
                  <svg className={css.svg} width="16" height="16">
                    <use href={`${icon}#icon-shower`}></use>
                  </svg>
                  <p className={css.description}>Shower/WC</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className={css.wrap}>
          <h2 className={css.title}>Vehicle type</h2>
          <ul className={css.list}>
            <li>
              <div className={css.listItem}>
                <label>
                  <input className={css.input} type="radio" name="car1" />
                </label>
                <div className={css.svgDescriptionWrap}>
                  <svg className={css.svgVehicle} width="20" height="20">
                    <use href={`${icon}#icon-car1`}></use>
                  </svg>
                  <p className={css.description}>Van</p>
                </div>
              </div>
            </li>
            <li>
              <div className={css.listItem}>
                <label>
                  <input className={css.input} type="radio" name="car2" />
                </label>
                <div className={css.svgCarDescriptionWrap}>
                  <svg className={css.svgVehicle} width="20" height="20">
                    <use href={`${icon}#icon-car2`}></use>
                  </svg>
                  <p className={css.description}>Fully</p>
                  <p className={css.description}> Integrated</p>
                </div>
              </div>
            </li>
            <li>
              <div className={css.listItem}>
                <label className={css.item}>
                  <input className={css.input} type="radio" name="car3" />
                </label>
                <div className={css.svgDescriptionWrap}>
                  <svg className={css.svgVehicle} width="20" height="20">
                    <use href={`${icon}#icon-car3`}></use>
                  </svg>
                  <p className={css.description}>Alcove</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button className={css.searchBtn}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
