import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
import Modal from "/src/components/Admin/Amenity/Modal";
import Table from "/src/components/Admin/Amenity/Table";
import Pagination from "/src/components/Admin/Amenity/Pagination";

const Index = () => {
  const limit = 10;
  const [id, setId] = useState("");
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState({ sort: "_id", order: "asc" });
  const [tableData, setTableData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [operationType, setOperationType] = useState("Create");
  const { data, loading } = useFetch(
    `${serverURL}/amenity?page=${page}&limit=${limit}&sort=${sort.sort},${sort.order}`
  );

  const columns = [
    { label: "Hotel Name", accessor: "hotelName", sortable: true },
    { label: "Amenities", accessor: "amenity", sortable: true },
  ];

  useEffect(() => {
    parseAmenityData();
  }, [data]);

  const parseAmenityData = () => {
    data.list &&
      data.list.length > 0 &&
      data.list.forEach(function (obj) {
        obj.amenity = Array.isArray(obj.amenity) && obj.amenity.join(", ");
      });
    setTableData(data.list);
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
          <Table {...{ sort, setSort, columns, openModal, tableData }} />
          <Pagination
            {...{ page, limit }}
            total={data.total ? data.total : 0}
            setPage={(page) => setPage(page)}
          />
          <Modal
            {...{ id, modalShow, operationType }}
            onHide={() => setModalShow(false)}
          />
        </>
      )}
    </>
  );
};

export default Index;
