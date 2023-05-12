import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value + "usd"}`;
}

const SearchBar = () => {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const handleFocus = (ref) => {
    ref.current.type = "date";
    ref.current.focus();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-1">
          <button
            className="btn btn-secondary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Filter
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Filter Options
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="priceRange" className="form-label">
                      Price Range:
                    </label>
                    <Slider
                      getAriaLabel={() => "Price Range "}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      max={1000}
                      min={1}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="roomType" className="form-label">
                      Room Type
                    </label>
                    <select className="form-select" id="roomType">
                      <option value="">Any</option>
                      <option value="single">Single</option>
                      <option value="double">Double</option>
                      <option value="suite">Suite</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="starRange" className="form-label">
                      Number of Stars
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Facility Amenities</label>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="amenity1"
                        />
                        <label className="form-check-label" htmlFor="amenity1">
                          Pool
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="amenity2"
                        />
                        <label className="form-check-label" htmlFor="amenity2">
                          Internet
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="amenity3"
                        />
                        <label className="form-check-label" htmlFor="amenity3">
                          Gym
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="amenity3"
                        />
                        <label className="form-check-label" htmlFor="amenity3">
                          Car Park
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="amenity3"
                        />
                        <label className="form-check-label" htmlFor="amenity3">
                          Air Conditioning
                        </label>
                      </div>
                      {/* Add more amenities here */}
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn
                  -secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Rest of the code */}
        <div className="col-md-3">
          <form className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Hotel or Location"
              style={{ textAlign: "left", color: "#575454" }}
            />
          </form>
        </div>
        <div className="col-md-2">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Check In"
              ref={checkInRef}
              onFocus={() => handleFocus(checkInRef)}
              style={{ textAlign: "left", color: "#575454" }}
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control text-left"
              placeholder={"Check Out"}
              ref={checkOutRef}
              onFocus={() => handleFocus(checkOutRef)}
              style={{ textAlign: "left", color: "#575454" }}
            />
          </div>
        </div>

        <div className="col-md-2">
          <div className="input-group mb-3">
            <select
              className="form-control"
              style={{ textAlign: "left", color: "#575454" }}
            >
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
            </select>
          </div>
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
