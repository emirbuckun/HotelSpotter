import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import FormModal from "/src/components/Admin/Amenity/FormModal";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";

const AmenityTable = () => {
  const [table, setTable] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");
  const [operationType, setOperationType] = useState("Create");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { data, loading } = useFetch(serverURL + "/amenity?page=" + page);

  useEffect(() => {
    if (data.amenityList && data.amenityList.length > 0) {
      parseAmenityData();
      setTotalPages(data.totalPages);
      setTable(data.amenityList);
    }
  }, [data]);

  const parseAmenityData = () => {
    data.amenityList.length > 0 &&
      data.amenityList.forEach(function (obj) {
        obj.amenity = Array.isArray(obj.amenity) && obj.amenity.join(", ");
      });
  };

  const openModal = (id, operationType) => {
    setId(id);
    setOperationType(operationType);
    setModalShow(true);
  };

  const paginationItems = [];
  for (let i = 0; i < totalPages; i++)
    paginationItems.push(
      <Pagination.Item key={i} onClick={() => setPage(i)}>
        {i + 1}
      </Pagination.Item>
    );

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
                  <tr key={item._id}>
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
            {paginationItems}
            <Pagination.Next onClick={() => setPage(page + 1)} />
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
