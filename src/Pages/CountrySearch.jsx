import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import CountryCard from "../Components/CountryCard";
import {
  getCountryByName,
  getAllCountries,
} from "../Services/Countries.service";

function CountrySearch() {
  const [countrySearch, setCountrySearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then((res) => {
      console.log("Res data", res.data);
      setCountries(
        res.data.map((item) => {
          return {
            id: item.area,
            name: item.name.common,
            capital: item.capital,
            continent: item.region,
            flag: item.flags.png,
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    if (countrySearch) {
      getCountryByName(countrySearch)
        .then((res) => {
          if (countrySearch.length >= 2) {
            setCountries(
              res.data.map((item) => {
                const country = {
                  name: item.name.common,
                  capital: item.capital,
                  currency: item.currencies,
                  flag: item.flags.png,
                };
                return country;
              })
            );
          }
        })
        .catch(() => {
          setCountries(undefined);
        });
    }
  }, [countrySearch]);

  return (
    <div className="main-container">
      <h3>Country search</h3>
      <TextField
        label="Country"
        value={countrySearch}
        onChange={(e) => setCountrySearch(e.target.value)}
        variant="filled"
        my={2}
      />
      <div className="country-container">
        {countries &&
          countries.map((country) => {
            return <CountryCard key={country.area} data={country} />;
          })}
      </div>
    </div>
  );
}

export default CountrySearch;
