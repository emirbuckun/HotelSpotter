import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";
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
  const { data, loading } = useFetch(
    `${serverURL}/${pageName}?page=${page}&limit=${limit}
    &sort=${sort.sort},${sort.order}`
  );

  const allColumns = {
    amenity: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    answer: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    hotel: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    location: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    log: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    ownership: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    picture: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    question: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    reservation: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    review: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    room: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    user: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
    userrole: [
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Amenities",
        accessor: "amenity",
        sortable: true,
        searchable: true,
      },
    ],
  };

  const columns = allColumns.amenity;

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
            {...{ id, modalShow, operationType }}
            onHide={() => setModalShow(false)}
          />
        </>
      )}
    </>
  );
};

export default Index;
