import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
import useTableColumns from "/src/hooks/useTableColumns";
import Modal from "/src/components/Admin/Modal";
import Table from "/src/components/Admin/Table";
import Pagination from "/src/components/Admin/Pagination";
import Search from "./Search";

const Index = ({ pageName }) => {
  const limit = 10;
  const [id, setId] = useState("");
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState({ hotelName: "", amenity: "" });
  const [tableData, setTableData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [operationType, setOperationType] = useState("Create");
  const [sort, setSort] = useState({ sort: "_id", order: "asc" });
  const allColumns = useTableColumns();
  const columns = allColumns[pageName];
  const { data, loading } = useFetch(
    `${serverURL}/${pageName}?page=${page}&limit=${limit}
    &sort=${sort.sort},${sort.order}`
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
          <Search {...{ setSearch, columns }} />
          <Table {...{ sort, setSort, columns, openModal, tableData }} />
          <Pagination
            {...{ page, limit }}
            total={data.total ? data.total : 0}
            setPage={(page) => setPage(page)}
          />
          <Modal
            {...{ id, modalShow, operationType, pageName }}
            onHide={() => setModalShow(false)}
          />
        </>
      )}
    </>
  );
};

export default Index;
