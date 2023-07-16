import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import AmenityForm from "./AmenityForm";
import Swal from "sweetalert2";
import axios from "axios";

const Modal = ({ id, operationType, pageName, modalShow, onHide }) => {
  const [form, setForm] = useState({});

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

  const modalTitle =
    operationType + " " + pageName.charAt(0).toUpperCase() + pageName.slice(1);
  const modalBody = (
    <AmenityForm {...{ form, setForm, id, operationType, pageName }} />
  );
  const modalFooter = (
    <>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        {operationType}
      </Button>
    </>
  );

  return (
    <BootstrapModal
      size="lg"
      centered
      animation={false}
      show={modalShow}
      onHide={onHide}
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{modalTitle}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{modalBody}</BootstrapModal.Body>
      <BootstrapModal.Footer>{modalFooter}</BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
