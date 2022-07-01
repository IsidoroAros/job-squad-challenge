/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

function CountryCard({ data }) {
  useEffect(() => {
    console.log("Data que viene: ", data);
  }, []);

  return (
    <div className="country-card">
      {data === undefined ? (
        <h2>No results matched your search :(</h2>
      ) : (
        <>
          <img src={data.flag} alt={`flag-${data.name}`} />
          <div className="country-info-container">
            <p>Country: {data.name}</p>
            <p>Capital: {data.capital}</p>
            <p>Continent: {data.continent}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryCard;

CountryCard.propTypes = {
  data: PropTypes.object.isRequired,
};
