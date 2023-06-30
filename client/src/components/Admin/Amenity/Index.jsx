import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
import Modal from "/src/components/Admin/Amenity/AmenityModal";
import Table from "/src/components/Admin/Amenity/AmenityTable";
import Pagination from "/src/components/Admin/Amenity/AmenityPagination";

const Index = () => {
  const limit = 10;
  const [id, setId] = useState("");
  const [page, setPage] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [operationType, setOperationType] = useState("Create");
  const { data, loading } = useFetch(
    `${serverURL}/amenity?page=${page}&limit=${limit}`
  );

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
          <Table openModal={openModal} amenities={data.list ? data.list : []} />
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
