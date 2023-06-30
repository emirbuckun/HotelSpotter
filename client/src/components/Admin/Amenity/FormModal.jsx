import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "/src/hooks/useFetch";
import Swal from "sweetalert2";
import axios from "axios";

const initialState = {
  hotelID: "",
  amenity: "",
};

const FormModal = (props) => {
  const id = props.id == "" ? null : props.id;
  const operationType = props.operationType;
  const [form, setForm] = useState(initialState);
  const [hotels, setHotels] = useState([]);
  const hotelList = useFetch(serverURL + "/hotel").data;

  const { hotelID, amenity } = form;

  useEffect(() => {
    operationType == "Create" && setForm(initialState);
    id && fetchAmenity();
  }, [operationType, id]);

  useEffect(() => {
    setHotels(hotelList);
  }, [hotelList]);

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

  const handleSubmit = async () => {
    try {
      let response, title, text, icon;
      if (operationType == "Create" || operationType == "Update") {
        const amenities = amenity.split(/[,]+/);
        if (hotelID.length > 0 && amenities.length > 0 && amenities[0] != "") {
          const amenityModel = { hotelID, amenity: amenities };
          response =
            operationType == "Create"
              ? await axios.post(serverURL + "/amenity", amenityModel)
              : await axios.put(serverURL + "/amenity/" + id, amenityModel);
          title =
            operationType == "Create"
              ? "Create Amenity Successful"
              : "Update Amenity Successful";
          text =
            operationType == "Create"
              ? "Amenity has been created!"
              : "Amenity has been updated!";
          icon = "success";
        } else {
          title = "Input Error";
          text = "Enter all inputs correctly!";
          icon = "error";
        }
      } else if (operationType == "Delete") {
        response = await axios.delete(serverURL + "/amenity/" + id);
        title = "Delete Amenity Successful";
        text = "Amenity has been deleted!";
        icon = "success";
      }
      Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  return (
    <Modal
      size="lg"
      centered
      animation={false}
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {operationType} Amenity
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {operationType}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
