import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import useFetch from "/src/hooks/useFetch";
import Swal from "sweetalert2";
import axios from "axios";

const AmenityForm = () => {
  const [isCreate] = useState(true);
  const [hotelID, setHotelID] = useState("");
  const [amenity, setAmenity] = useState("");
  const [hotels, setHotels] = useState([]);
  const { data } = useFetch(serverURL + "/hotel");
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length > 0 && isCreate) setHotels(data);
  }, [data]);

  const handleSubmit = async () => {
    const amenities = amenity.split(/[ ,]+/);
    if (hotelID.length > 0 && amenities.length > 0 && amenities[0] != "") {
      try {
        const response = await axios.post(serverURL + "/amenity", {
          hotelID,
          amenity: amenities,
        });
        if (response.status == 200) {
          Swal.fire({
            title: "Create Amenity Successful",
            text: "Amenity has been created!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            window.location.reload();
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
    } else {
      Swal.fire({
        title: "Input Error",
        text: "Enter all inputs correctly!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formAmenities">
        <Form.Label column sm={2}>
          Amenities
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            value={amenity}
            placeholder="Enter amenities"
            onChange={(e) => setAmenity(e.target.value)}
          />
          <Form.Text>Separate with comma (,)</Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formAmenities">
        <Form.Label column sm={2}>
          Hotel
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            value={hotelID}
            onChange={(e) => setHotelID(e.target.value)}
          >
            {hotels.length > 0 ? (
              <>
                <option value={0}>Select hotel</option>
                {hotels.map((hotel) => (
                  <option key={hotel._id} value={hotel._id}>
                    {hotel.name}
                  </option>
                ))}
              </>
            ) : (
              "empty"
            )}
          </Form.Select>
        </Col>
      </Form.Group>
      <Button variant="success" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default AmenityForm;
