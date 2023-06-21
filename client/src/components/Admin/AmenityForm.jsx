import React from "react";

const AmenityForm = () => {
  return (
    <form>
      <div class="form-group">
        <label for="amenities">Amenities</label>
        <input
          type="text"
          class="form-control"
          id="amenities"
          placeholder="Wifi, TV, Washer"
        />
      </div>
      <div class="form-group">
        <label for="hotelName">Hotel</label>
        <select class="form-control" id="hotelName">
          <option>Kelebek Special Cave Hotel & Spa</option>
          <option>Lara Barut Collection</option>
          <option>Concorde De Luxe Resort</option>
          <option>Swissotel The Bosphorus, Istanbul</option>
          <option>Megasaray WestBeach Antalya</option>
        </select>
      </div>
    </form>
  );
};

export default AmenityForm;
