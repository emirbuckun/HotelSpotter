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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useGetUserID } from "/src/hooks/useGetUserID";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import axios from "axios";

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

const Modal = (data) => {
  const [reservation, setReservation] = useState({
    checkIn: dayjs(),
    checkOut: dayjs(),
  });
  const reservationInfo = data.data;
  const userID = useGetUserID();

  useEffect(() => {
    setReservation((prevState) => ({
      hotelID: reservationInfo.data._id,
      userID: userID,
      checkIn: prevState.checkIn,
      checkOut: prevState.checkOut,
      guestCount: reservationInfo.guests,
      price: reservationInfo.price,
      roomType: reservationInfo.roomType,
    }));
  }, [reservationInfo]);

  const handleDateChange = (value, name) => {
    setReservation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReservation = async () => {
    if (userID == null) {
      Swal.fire({
        title: "Error",
        text: "You should login to make reservation!",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "blue",
      });
    } else {
      try {
        const response = await axios.post(
          serverURL + "/reservation",
          reservation
        );
        if (response.status == 200) {
          await Swal.fire({
            title: "Booking Successful",
            text: "Redirecting to Home Page",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "blue",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "blue",
        });
      }
    }
  };

  return (
    <div
      className="modal"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Make Reservation
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {
              <ReservationForm
                data={reservationInfo}
                reservation={reservation}
                handleDateChange={handleDateChange}
              />
            }
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              // data-bs-dismiss="modal"
              onClick={handleReservation}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReservationForm = (info) => {
  const data = info.data;
  const handleDateChange = info.handleDateChange;
  const reservation = info.reservation;
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Hotel</label>
        <input
          type="text"
          className="form-control"
          id="hotel"
          value={data.data.name}
          readOnly
          disabled
          required
        />
      </div>
      <div
        className="form-group"
        style={{
          marginBottom: "0px",
          marginTop: "10px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check In"
            format="DD/MM/YYYY"
            disablePast
            slotProps={{
              textField: { size: "small", required: true },
            }}
            value={reservation.checkIn}
            sx={{ width: "100%" }}
            onChange={(newValue, context) => {
              if (context.validationError == null) {
                handleDateChange(newValue, (name = "checkIn"));
              }
            }}
          />
        </LocalizationProvider>
      </div>
      <div
        className="form-group"
        style={{
          marginTop: "10px",
          marginBottom: "0px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check Out"
            format="DD/MM/YYYY"
            disablePast
            slotProps={{
              textField: { size: "small", required: true },
            }}
            value={reservation.checkOut}
            sx={{ width: "100%" }}
            onChange={(newValue, context) => {
              if (context.validationError == null) {
                handleDateChange(newValue, (name = "checkOut"));
              }
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="form-group">
        <label htmlFor="guestCount">Guest Count</label>
        <input
          id="guestCount"
          type="number"
          value={data.guests}
          className="form-control"
          readOnly
          disabled
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="roomType">Room Type</label>
        <select
          id="roomType"
          className="form-control"
          value={data.roomType}
          readOnly
          disabled
          required
        >
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="text"
          value={data.price + "$"}
          className="form-control"
          readOnly
          disabled
          required
        />
      </div>
    </form>
  );
};
