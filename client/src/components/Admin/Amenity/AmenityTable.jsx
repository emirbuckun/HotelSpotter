import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import FormModal from "/src/components/Admin/Amenity/FormModal";

const AmenityTable = () => {
  const [id, setId] = useState("");
  const [page, setPage] = useState(0);
  const [table, setTable] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [operationType, setOperationType] = useState("Create");
  const { data, loading } = useFetch(serverURL + "/amenity?page=" + page);

  useEffect(() => {
    if (data.list) {
      parseAmenityData();
      setTotalPages(data.totalPages);
      setTable(data.list);
    }
  }, [data.totalPages, data.list]);

  const parseAmenityData = () => {
    data.list.length > 0 &&
      data.list.forEach(function (obj) {
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
      {loading ? (
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
                    onClick={() => openModal("", "Create")}
                  >
                    <MdAdd />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {table.length > 0 &&
                table.map((item, index) => (
                  <tr key={index}>
                    <th className="align-middle">{index + 1}</th>
                    <td className="align-middle">{item.hotelName}</td>
                    <td className="align-middle">{item.amenity}</td>
                    <td className="align-middle">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => openModal(item._id, "Update")}
                      >
                        <MdEdit />
                      </Button>
                    </td>
                    <td className="align-middle">
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => openModal(item._id, "Delete")}
                      >
                        <MdDelete />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Pagination>
            <Pagination.Prev
              disabled={page == 0}
              onClick={() => setPage(page - 1)}
            />
            {totalPages > 0 &&
              [...Array(totalPages)].map((_, index) => (
                <Pagination.Item key={index} onClick={() => setPage(index)}>
                  {index + 1}
                </Pagination.Item>
              ))}
            <Pagination.Next
              disabled={page == totalPages - 1}
              onClick={() => setPage(page + 1)}
            />
          </Pagination>
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
