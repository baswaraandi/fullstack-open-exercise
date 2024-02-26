import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note.jsx";
import countriesServices from "./services/countries.js";

const Filter = (props) => {
  const { countries, setDataFilter } = props;
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "") {
      setDataFilter(countries);
    } else {
      const filteredCountries = filter
        ? countries.filter((country) =>
            country.name.common.toLowerCase().includes(filter.toLowerCase())
          )
        : countries;
      setDataFilter(filteredCountries);
    }
  }, [filter, countries, setDataFilter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      Find Countries <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await countriesServices.getAll();
      setCountries(response);
      setFilteredCountries(response);
    } catch (error) {
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Filter countries={countries} setDataFilter={setFilteredCountries} />
      {/* Check if filter is empty */}
      {filteredCountries.length > 0 && (
        <ul>
          {filteredCountries.map((country) => (
            <Note key={country.cca2} note={country} />
          ))}
        </ul>
      )}
      {/* Conditionally render if no countries found */}
      {filteredCountries.length === " " && !error && (
        <div>No countries found</div>
      )}
      {/* Render error message if there is an error */}
      {error && <div>{error}</div>}
    </div>
  );
};

export default App;
