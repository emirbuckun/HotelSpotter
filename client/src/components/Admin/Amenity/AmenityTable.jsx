import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import FormModal from "/src/components/Admin/Amenity/FormModal";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";

const AmenityTable = () => {
  const [table, setTable] = useState([]);
  const { data, loading } = useFetch(serverURL + "/amenity");
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");
  const [operationType, setOperationType] = useState("CREATE");

  useEffect(() => {
    if (data.length > 0) {
      parseAmenityData();
      setTable(data);
    }
  }, [data]);

  const parseAmenityData = () => {
    data.length > 0 &&
      data.forEach(function (obj) {
        obj.amenity = Array.isArray(obj.amenity) && obj.amenity.join(", ");
      });
  };

  const openModal = (id, operationType) => {
    setId(id);
    setOperationType(operationType);
    setModalShow(true);
  };

  return (
    <>
      {loading || table.length <= 0 ? (
        <div className="text-center">Loading</div>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Hotel Name</th>
                <th>Amenities</th>
                <th className="text-center" colSpan={2}>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => openModal("", "CREATE")}
                  >
                    <MdAdd />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {table.length > 0 &&
                table.map((item, index) => (
                  <tr key={item._id}>
                    <th className="align-middle">{index + 1}</th>
                    <td className="align-middle">{item.hotelName}</td>
                    <td className="align-middle">{item.amenity}</td>
                    <td className="align-middle">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => openModal(item._id, "UPDATE")}
                      >
                        <MdEdit />
                      </Button>
                    </td>
                    <td className="align-middle">
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => openModal(item._id, "DELETE")}
                      >
                        <MdDelete />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <FormModal
            id={id}
            show={modalShow}
            operationType={operationType}
            onHide={() => setModalShow(false)}
          />
        </>
      )}
    </>
  );
};

export default AmenityTable;
