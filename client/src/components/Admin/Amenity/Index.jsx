import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
import Modal from "/src/components/Admin/Amenity/AmenityModal";
import Table from "/src/components/Admin/Amenity/AmenityTable";
import Pagination from "/src/components/Admin/Amenity/AmenityPagination";

const Index = () => {
  const limit = 10;
  const [id, setId] = useState("");
  const [page, setPage] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [operationType, setOperationType] = useState("Create");
  const { data, loading } = useFetch(
    `${serverURL}/amenity?page=${page}&limit=${limit}`
  );

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
          <Table openModal={openModal} tableData={tableData ? tableData : []} />
          <Pagination
            page={page}
            limit={limit}
            total={data.total ? data.total : 0}
            setPage={(page) => setPage(page)}
          />
          <Modal
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

export default Index;
