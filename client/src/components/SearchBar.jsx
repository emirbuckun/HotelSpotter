import React, { useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import { IconButton, makeStyles } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function valuetext(value) {
  return `${value}`;
}

const SearchBar = () => {
  const [value, setPriceValue] = React.useState([1, 1000]);

  const minDistance = 10;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setPriceValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  const [amenity1Checked, setAmenity1Checked] = useState(false);
  const [amenity2Checked, setAmenity2Checked] = useState(false);
  const [amenity3Checked, setAmenity3Checked] = useState(false);
  const [amenity4Checked, setAmenity4Checked] = useState(false);
  const [amenity5Checked, setAmenity5Checked] = useState(false);
  const [ratingValue, setRatingValue] = React.useState(0);

  const handleClearFilters = () => {
    setAmenity1Checked(false);
    setAmenity2Checked(false);
    setAmenity3Checked(false);
    setAmenity4Checked(false);
    setAmenity5Checked(false);
    setRatingValue(0);
    document.getElementById("roomType").value = "";
    setPriceValue([1, 1000]);
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
                      getAriaLabel={() => "Minimum distance"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `${value} $`}
                      getAriaValueText={valuetext}
                      max={1000}
                      min={1}
                      disableSwap
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
                    <div>
                      <Rating
                        name="numberOfStar"
                        precision={1}
                        value={ratingValue}
                        size="large"
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
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
                              checked={amenity1Checked}
                              onChange={(e) =>
                                setAmenity1Checked(e.target.checked)
                              }
                            />
                          }
                          label="Pool"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={amenity2Checked}
                              onChange={(e) =>
                                setAmenity2Checked(e.target.checked)
                              }
                            />
                          }
                          label="Internet"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={amenity3Checked}
                              onChange={(e) =>
                                setAmenity3Checked(e.target.checked)
                              }
                            />
                          }
                          label="Gym"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={amenity4Checked}
                              onChange={(e) =>
                                setAmenity4Checked(e.target.checked)
                              }
                            />
                          }
                          label="Car Park"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={amenity5Checked}
                              onChange={(e) =>
                                setAmenity5Checked(e.target.checked)
                              }
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
                <Button variant="contained" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
                <button
                  className="btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  color="#0288d1"
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
