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
        label: "User Name",
        accessor: "userName",
        sortable: true,
        searchable: true,
      },
      {
        label: "User Mail",
        accessor: "userMail",
        sortable: true,
        searchable: true,
      },
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Question",
        accessor: "question",
        sortable: true,
        searchable: true,
      },
      {
        label: "Answer",
        accessor: "answer",
        sortable: true,
        searchable: true,
      },
      {
        label: "Create Date",
        accessor: "createDate",
        sortable: true,
        searchable: true,
      },
    ],
    hotel: [
      {
        label: "Hotel Name",
        accessor: "name",
        sortable: true,
        searchable: true,
      },
      {
        label: "Hotel Star",
        accessor: "star",
        sortable: true,
        searchable: true,
      },
      {
        label: "Hotel Rating",
        accessor: "rating",
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
        label: "Country",
        accessor: "country",
        sortable: true,
        searchable: true,
      },
      {
        label: "City",
        accessor: "city",
        sortable: true,
        searchable: true,
      },
      {
        label: "Street",
        accessor: "street",
        sortable: true,
        searchable: true,
      },
      {
        label: "Number",
        accessor: "number",
        sortable: true,
        searchable: true,
      },
      {
        label: "Zip",
        accessor: "zip",
        sortable: true,
        searchable: true,
      },
      {
        label: "Latitude",
        accessor: "latitude",
        sortable: true,
        searchable: true,
      },
      {
        label: "Longitude",
        accessor: "longitude",
        sortable: true,
        searchable: true,
      },
    ],
    log: [
      {
        label: "Log Type",
        accessor: "logType",
        sortable: true,
        searchable: true,
      },
      {
        label: "Description",
        accessor: "description",
        sortable: true,
        searchable: true,
      },
      {
        label: "Date",
        accessor: "logDate",
        sortable: true,
        searchable: true,
      },
    ],
    ownership: [
      {
        label: "User Name",
        accessor: "userName",
        sortable: true,
        searchable: true,
      },
      {
        label: "User Mail",
        accessor: "userMail",
        sortable: true,
        searchable: true,
      },
      {
        label: "Hotel Name",
        accessor: "hotelName",
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
        label: "Picture",
        accessor: "picture",
        sortable: true,
        searchable: true,
      },
    ],
    question: [
      {
        label: "User Name",
        accessor: "userName",
        sortable: true,
        searchable: true,
      },
      {
        label: "User Mail",
        accessor: "userMail",
        sortable: true,
        searchable: true,
      },
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Question",
        accessor: "question",
        sortable: true,
        searchable: true,
      },
      {
        label: "Create Date",
        accessor: "createDate",
        sortable: true,
        searchable: true,
      },
    ],
    reservation: [
      {
        label: "User Name",
        accessor: "userName",
        sortable: true,
        searchable: true,
      },
      {
        label: "User Mail",
        accessor: "userMail",
        sortable: true,
        searchable: true,
      },
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Check In",
        accessor: "checkIn",
        sortable: true,
        searchable: true,
      },
      {
        label: "Check Out",
        accessor: "checkOut",
        sortable: true,
        searchable: true,
      },
      {
        label: "Guest Count",
        accessor: "guestCount",
        sortable: true,
        searchable: true,
      },
      {
        label: "Room Type",
        accessor: "roomType",
        sortable: true,
        searchable: true,
      },
      {
        label: "Create Date",
        accessor: "createDate",
        sortable: true,
        searchable: true,
      },
    ],
    review: [
      {
        label: "User Name",
        accessor: "userName",
        sortable: true,
        searchable: true,
      },
      {
        label: "User Mail",
        accessor: "userMail",
        sortable: true,
        searchable: true,
      },
      {
        label: "Hotel Name",
        accessor: "hotelName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Rating",
        accessor: "rating",
        sortable: true,
        searchable: true,
      },
      {
        label: "Description",
        accessor: "description",
        sortable: true,
        searchable: true,
      },
      {
        label: "Create Date",
        accessor: "createDate",
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
        label: "Room Type",
        accessor: "roomType",
        sortable: true,
        searchable: true,
      },
      {
        label: "Price",
        accessor: "price",
        sortable: true,
        searchable: true,
      },
      {
        label: "Count",
        accessor: "count",
        sortable: true,
        searchable: true,
      },
      {
        label: "Person Capacity",
        accessor: "personCapacity",
        sortable: true,
        searchable: true,
      },
      {
        label: "Total Bed",
        accessor: "totalBed",
        sortable: true,
        searchable: true,
      },
      {
        label: "Total Bath",
        accessor: "totalBath",
        sortable: true,
        searchable: true,
      },
      {
        label: "Create Date",
        accessor: "createDate",
        sortable: true,
        searchable: true,
      },
    ],
    user: [
      {
        label: "Mail",
        accessor: "mail",
        sortable: true,
        searchable: true,
      },
      {
        label: "First Name",
        accessor: "firstName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Last Name",
        accessor: "lastName",
        sortable: true,
        searchable: true,
      },
      {
        label: "Phone Number",
        accessor: "phoneNumber",
        sortable: true,
        searchable: true,
      },
      {
        label: "Create Date",
        accessor: "createDate",
        sortable: true,
        searchable: true,
      },
      {
        label: "Update Date",
        accessor: "updateDate",
        sortable: true,
        searchable: true,
      },
    ],
    userrole: [
      {
        label: "Mail",
        accessor: "mail",
        sortable: true,
        searchable: true,
      },
      {
        label: "Name",
        accessor: "name",
        sortable: true,
        searchable: true,
      },
      {
        label: "Role",
        accessor: "role",
        sortable: true,
        searchable: true,
      },
    ],
  };

  const columns = allColumns[pageName];

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
