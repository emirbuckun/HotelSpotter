import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import FormModal from "/src/components/Admin/FormModal";

const AmenityTable = () => {
  const [table, setTable] = useState([]);
  const { data, loading } = useFetch(serverURL + "/amenity");
  const [modalShow, setModalShow] = useState(false);

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
                <th>Amenities</th>
                <th>Hotel Name</th>
                <th className="text-center" colSpan={2}>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => setModalShow(true)}
                  >
                    Create New
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {table.length > 0 &&
                table.map((table, index) => (
                  <tr key={index}>
                    <td className="align-middle">{index + 1}</td>

                    {Object.values(table).map(
                      (value, index) =>
                        index > 1 && (
                          <td className="align-middle" key={index}>
                            {value}
                          </td>
                        )
                    )}

                    <td className="align-middle">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => setModalShow(true)}
                      >
                        Edit
                      </Button>
                    </td>
                    <td className="align-middle">
                      <Button size="sm" variant="danger">
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <FormModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
      )}
    </>
  );
};

export default AmenityTable;
