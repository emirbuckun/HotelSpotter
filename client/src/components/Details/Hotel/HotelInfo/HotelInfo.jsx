import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Modal from "/src/components/Details/Hotel/HotelInfo/Modal";

const HotelInfo = (hotelData) => {
  const [roomType, setRoomType] = useState("Single");
  const [guests, setGuests] = useState(1);
  const [price, setPrice] = useState(0);

  const data = hotelData.hotelData;
  const amenities = data.amenities ? data.amenities.amenity : [];
  const rooms = data.room ? data.room : [];
  const minPrice =
    rooms.length > 0 ? rooms.find((x) => x.roomType === "Single").price : 1000;
  const location = data.location;
  const locationText =
    location.street +
    " St. No: " +
    location.number +
    " Zip: " +
    location.zip +
    " " +
    location.city +
    "/" +
    location.country;

  useEffect(() => {
    setPrice(minPrice);
  }, []);

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
    const price = rooms.find((x) => x.roomType === event.target.value).price;
    setPrice(price * guests);
  };

  const handleGuestsDecrease = () => {
    if (guests > 1) {
      setGuests(guests - 1);
      setPrice(rooms.find((x) => x.roomType === roomType).price * (guests - 1));
    }
  };

  const handleGuestsIncrease = () => {
    setGuests(guests + 1);
    setPrice(rooms.find((x) => x.roomType === roomType).price * (guests + 1));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-7">
              <h5 className="text-center">Details</h5>
              <div className="card card-body">
                <div>
                  <strong>Name:</strong> {data.name}
                </div>
                <div>
                  <strong>Star:</strong> {data.star}
                </div>
                <div>
                  <strong>Rating:</strong> {data.rating}
                </div>
                <div>
                  <strong>Location:</strong> {locationText}
                </div>
                <div>
                  <strong>Rooms:</strong>
                  {rooms.map((data, index) => (
                    <>
                      <div key={index}>
                        {data.roomType}: {data.price}$
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-5">
              <h5 className="text-center">Amenities</h5>
              <div className="card card-body">
                <ul className="list-group list-group-flush">
                  {amenities.length > 0 ? (
                    amenities.map((data, index) => (
                      <li key={index} className="list-group-item">
                        <strong>{index + 1} -</strong> {data}
                      </li>
                    ))
                  ) : (
                    <div>There is no any specified amenity in this hotel.</div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h5 className="text-center">Reserve</h5>
          <div className="card card-body">
            <div className="d-flex justify-content-center align-items-center">
              <h5 className="card-title">{price} USD night</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Room Type
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="roomType"
                  name="row-radio-buttons-group"
                  defaultValue="Single"
                >
                  <FormControlLabel
                    value="Single"
                    control={<Radio />}
                    label="Single"
                    onClick={handleRoomTypeChange}
                  />
                  <FormControlLabel
                    value="Double"
                    control={<Radio />}
                    label="Double"
                    onClick={handleRoomTypeChange}
                  />
                  <FormControlLabel
                    value="Suite"
                    control={<Radio />}
                    label="Suite"
                    onClick={handleRoomTypeChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="contained"
                color="error"
                sx={{
                  height: "60px",
                }}
                onClick={handleGuestsDecrease}
              >
                <RemoveIcon />
              </Button>
              <TextField
                id="outlined-number"
                label="Guests"
                variant="outlined"
                value={guests}
                sx={{ width: "100px", margin: "10px" }}
              />
              <Button
                variant="contained"
                color="success"
                sx={{ height: "60px" }}
                onClick={handleGuestsIncrease}
              >
                <AddIcon />
              </Button>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Reserve
              </button>
              {
                <Modal
                  data={{
                    data: data,
                    roomType: roomType,
                    guests: guests,
                    price: price,
                  }}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
