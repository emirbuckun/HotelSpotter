import React, { useState } from "react";
import SearchBar from "./SearchBar";
import HotelList from "./HotelList";
import useFetch from "/src/hooks/useFetch";
import dayjs from "dayjs";

const initialState = {
  priceRange: [1, 10000],
  roomType: "",
  star: 0,
  poolAmenity: false,
  internetAmenity: false,
  gymAmenity: false,
  parkAmenity: false,
  airAmenity: false,
  searchText: "",
  checkIn: dayjs(), // today
  checkOut: dayjs(), // today
  guestCount: 0,
};

const Home = () => {
  const [filter, setFilter] = useState({ ...initialState });
  const { data, loading } = useFetch(serverURL + "/hotel/getHotelList");

  const handleChange = (e, newValue, activeThumb) => {
    var { name, value, type } = e.target;
    if (Array.isArray(newValue)) {
      const minDistance = 50;
      if (activeThumb === 0) {
        setFilter((prevState) => ({
          ...prevState,
          [name]: [
            Math.min(newValue[0], filter.priceRange[1] - minDistance),
            filter.priceRange[1],
          ],
        }));
      } else {
        setFilter((prevState) => ({
          ...prevState,
          [name]: [
            filter.priceRange[0],
            Math.max(newValue[1], filter.priceRange[0] + minDistance),
          ],
        }));
      }
    } else {
      if (type == "checkbox" || type == "radio") value = newValue;
      setFilter((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleDateChange = (value, name) => {
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClearFilter = () => {
    setFilter({ ...initialState });
  };

  const handleApplyFilter = () => {
    // alert("Apply Filter");
    console.log(filter);
  };

  const handleSearch = () => {
    // alert("Search");
    console.log(filter);
  };

  return (
    <>
      <SearchBar
        filter={filter}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
        handleClearFilter={handleClearFilter}
        handleApplyFilter={handleApplyFilter}
        handleSearch={handleSearch}
      />
      <HotelList data={data} loading={loading} />
    </>
  );
};

export default Home;
