import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Form = (info) => {
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
          value={reservation.price + "$"}
          className="form-control"
          readOnly
          disabled
          required
        />
      </div>
    </form>
  );
};

export default Form;
