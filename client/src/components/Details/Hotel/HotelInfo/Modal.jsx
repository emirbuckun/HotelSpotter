import React, { useEffect, useState } from "react";
import Form from "/src/components/Details/Hotel/HotelInfo/Form";
import { useGetUserID } from "/src/hooks/useGetUserID";
import { useCookies } from "react-cookie";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import axios from "axios";

const Modal = (data) => {
  const [cookies] = useCookies(["access_token"]);
  const userID = useGetUserID();
  const [reservation, setReservation] = useState({
    checkIn: dayjs(),
    checkOut: dayjs(),
  });
  const reservationInfo = data.data;

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

  useEffect(() => {
    const newPrice =
      reservation.checkOut.diff(reservation.checkIn, "days") *
      reservationInfo.price;
    setReservation((prevState) => ({
      ...prevState,
      price: newPrice,
    }));
  }, [reservation.checkIn, reservation.checkOut]);

  const handleDateChange = (value, name) => {
    setReservation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReservation = async () => {
    const dateDifference = reservation.checkOut.diff(
      reservation.checkIn,
      "days"
    );
    if (userID == null || !cookies.access_token) {
      Swal.fire({
        title: "Error",
        text: "You should login to make reservation!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (dateDifference <= 0) {
      Swal.fire({
        title: "Error",
        text: "You should choose valid check in and check out dates!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      try {
        const response = await axios.post(
          serverURL + "/reservation",
          reservation
        );
        if (response.status == 200) {
          Swal.fire({
            title: "Booking Successful",
            text: "Your reservation has been made!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error,
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
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
              <Form
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

export default Modal;
