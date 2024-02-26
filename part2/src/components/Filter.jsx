import React from "react";

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

export default Filter;
