import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import TuneIcon from "@mui/icons-material/Tune";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  IconButton,
  Rating,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const initialState = {
  priceRange: [1, 1000],
  roomType: "",
  star: 0,
  poolAmenity: false,
  internetAmenity: false,
  gymAmenity: false,
  parkAmenity: false,
  airAmenity: false,
};

const SearchBar = () => {
  const [filter, setFilter] = useState({ ...initialState });

  const handleChange = (e, newValue, activeThumb) => {
    const { name, value } = e.target;
    if (name == "priceRange") {
      const minDistance = 50;
      if (!Array.isArray(newValue)) return;
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
      setFilter((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-1">
          <IconButton
            className="btn btn-secondary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <TuneIcon style={{ color: "#0288d1", fontSize: 30 }} />
          </IconButton>
        </div>
        <div
          className="modal"
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
                      name="priceRange"
                      getAriaLabel={() => "Minimum distance"}
                      value={filter.priceRange}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `${value} $`}
                      getAriaValueText={(value) => `${value}`}
                      max={1000}
                      min={1}
                      disableSwap
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="roomType" className="form-label">
                      Room Type
                    </label>
                    <select
                      className="form-select"
                      id="roomType"
                      name="roomType"
                      value={filter.roomType}
                      onChange={handleChange}
                    >
                      <option value="">Any</option>
                      <option value="single">Single</option>
                      <option value="double">Double</option>
                      <option value="suite">Suite</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="star" className="form-label">
                      Number of Stars
                    </label>
                    <div>
                      <Rating
                        name="star"
                        precision={1}
                        value={filter.star}
                        size="large"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Facility Amenities</label>
                    <div>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="poolAmenity"
                              checked={filter.poolAmenity}
                              onChange={handleChange}
                            />
                          }
                          label="Pool"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="internetAmenity"
                              checked={filter.internetAmenity}
                              onChange={handleChange}
                            />
                          }
                          label="Internet"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="gymAmenity"
                              checked={filter.gymAmenity}
                              onChange={handleChange}
                            />
                          }
                          label="Gym"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="parkAmenity"
                              checked={filter.parkAmenity}
                              onChange={handleChange}
                            />
                          }
                          label="Car Park"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="airAmenity"
                              checked={filter.airAmenity}
                              onChange={handleChange}
                            />
                          }
                          label="Air Conditioning"
                        />
                      </div>
                      {/* Add more amenities here */}
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <Button
                  variant="contained"
                  onClick={() => setFilter({ ...initialState })}
                >
                  Clear Filters
                </Button>
                <button
                  className="btn"
                  // data-bs-dismiss="modal"
                  // aria-label="Close"
                  color="#0288d1"
                  onClick={() => alert("filter")}
                >
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Check In"
                slotProps={{ textField: { size: "small" } }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="col-md-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Check Out"
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
          <div className="input-group mb-3"></div>
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
