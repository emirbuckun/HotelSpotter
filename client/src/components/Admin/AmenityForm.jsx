import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "/src/hooks/useFetch";
import axios from "axios";

const initialState = {
  hotelID: "",
  amenity: "",
};

function AmenityForm({ form, setForm, id, operationType }) {
  id = id == "" ? null : id;
  const { hotelID, amenity } = form;
  const hotels = useFetch(serverURL + "/hotel/getAllHotels").data;

  useEffect(() => {
    operationType == "Create" && setForm(initialState);
    operationType == "Update" && fetchAmenity();
  }, [operationType]);

  const fetchAmenity = async () => {
    try {
      await axios.get(serverURL + "/amenity/" + id).then((response) => {
        const responseData = response.data;
        responseData.amenity =
          Array.isArray(responseData.amenity) && responseData.amenity.join(",");
        setForm({
          hotelID: responseData.hotelID,
          amenity: responseData.amenity,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      {operationType == "Delete" ? (
        "Are you sure you want to delete this record?"
      ) : (
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formAmenities">
            <Form.Label column sm={2}>
              Amenities
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="amenity"
                value={amenity || ""}
                placeholder="Enter amenities"
                onChange={handleInputChange}
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
                name="hotelID"
                value={hotelID || ""}
                onChange={handleInputChange}
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
        </Form>
      )}
    </>
  );
}

export default AmenityForm;
