import React from "react";
import Slider from "@mui/material/Slider";
import TuneIcon from "@mui/icons-material/Tune";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IconButton, Rating, FormControlLabel, Checkbox } from "@mui/material";

const SearchBar = ({
  filter,
  handleChange,
  handleDateChange,
  handleClearFilter,
  handleApplyFilter,
  handleSearch,
}) => {
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
                      value={filter.priceRange}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `${value} $`}
                      max={10000}
                      min={0}
                      disableSwap
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="roomType" className="form-label">
                      Room Type
                    </label>
                    <select
                      className="form-select"
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
                        size="large"
                        precision={1}
                        value={filter.star}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Facility Amenities</label>
                    <div>
                      <div>
                        <FormControlLabel
                          label="Pool"
                          control={
                            <Checkbox
                              name="poolAmenity"
                              checked={filter.poolAmenity}
                              onChange={handleChange}
                            />
                          }
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          label="Internet"
                          control={
                            <Checkbox
                              name="internetAmenity"
                              checked={filter.internetAmenity}
                              onChange={handleChange}
                            />
                          }
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          label="Gym"
                          control={
                            <Checkbox
                              name="gymAmenity"
                              checked={filter.gymAmenity}
                              onChange={handleChange}
                            />
                          }
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          label="Car Park"
                          control={
                            <Checkbox
                              name="parkAmenity"
                              checked={filter.parkAmenity}
                              onChange={handleChange}
                            />
                          }
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          label="Air Conditioning"
                          control={
                            <Checkbox
                              name="airAmenity"
                              checked={filter.airAmenity}
                              onChange={handleChange}
                            />
                          }
                        />
                      </div>
                      {/* Add more amenities here */}
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleClearFilter}>
                  Clear
                </button>
                <button
                  className="btn btn-success"
                  // data-bs-dismiss="modal"
                  // aria-label="Close"
                  onClick={handleApplyFilter}
                >
                  Apply
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
              name="searchText"
              value={filter.searchText}
              onChange={handleChange}
              className="form-control"
              placeholder="Search Hotel"
              style={{ textAlign: "left", color: "#575454" }}
            />
          </form>
        </div>
        <div className="col-md-2">
          <div className="input-group mb-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Check In"
                value={filter.checkIn}
                onChange={(newValue, context) => {
                  if (context.validationError == null) {
                    handleDateChange(newValue, (name = "checkIn"));
                  }
                }}
                format="DD/MM/YYYY"
                disablePast
                slotProps={{ textField: { size: "small" } }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="col-md-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Check Out"
              value={filter.checkOut}
              onChange={(newValue, context) => {
                if (context.validationError == null) {
                  handleDateChange(newValue, (name = "checkOut"));
                }
              }}
              format="DD/MM/YYYY"
              disablePast
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
        </div>

        <div className="col-md-2">
          <div className="input-group mb-3">
            <select
              name="guestCount"
              value={filter.guestCount}
              onChange={handleChange}
              className="form-control"
            >
              <option value={1}>1 Person</option>
              <option value={2}>2 Person</option>
              <option value={3}>3 Person</option>
              <option value={4}>4 Person</option>
            </select>
          </div>
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
