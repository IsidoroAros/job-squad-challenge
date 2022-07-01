/* eslint-disable import/prefer-default-export */
import Axios from "axios";

export const getCountryByName = (name) => {
  return Axios.get(`${import.meta.env.VITE_BASE_URL}/v3.1/name/${name}`);
};

export const getAllCountries = () => {
  return Axios.get(`${import.meta.env.VITE_BASE_URL}v3.1/all`);
};
