import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";

const HotelInfo = (hotelData) => {
  const [guests, setGuests] = React.useState(1);
  const [price, setPrice] = React.useState(700);
  const fixedPrice = 700;

  const handleGuestsDecrease = () => {
    var price = fixedPrice * (guests - 1);
    if (guests > 1) {
      setGuests(guests - 1);
      setPrice(price);
    }
    if (guests === 1) {
      setPrice(fixedPrice);
    }
  };

  const handleGuestsIncrease = () => {
    var price = fixedPrice * (guests + 1);
    setGuests(guests + 1);
    setPrice(price);
  };
  const data = hotelData.hotelData;
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          There is a gym and fitness center. This hotel offers suite rooms to
          its customers. 3 meals are served. Customers have the opportunity to
          eat unlimitedly. Indoor and outdoor swimming pool available This hotel
          is by the sea. Hotel is located in Malaga and the most important
          feature of this city is.. There is a gym and fitness center. This
          hotel offers suite rooms to its customers. 3 meals are served.
          Customers have the opportunity to eat unlimitedly. Indoor and outdoor
          swimming pool available This hotel is by the sea. Hotel is located in
          Malaga and the most important feature of this city is..
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-center align-items-center">
                <h5 className="card-title">{price} USD per night</h5>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    height: "60px",
                    width: "60px",
                    margin: "10px",
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
                  sx={{ height: "60px", width: "60px", margin: "10px" }}
                  onClick={handleGuestsIncrease}
                >
                  <AddIcon />
                </Button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <a href="#" className="btn btn-danger">
                  Reserve
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
