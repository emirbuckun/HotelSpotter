import BootstrapTable from "react-bootstrap/Table";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ openModal, tableData }) => {
  const columns = [
    { label: "Hotel Name", accessor: "hotelName" },
    { label: "Amenities", accessor: "amenity" },
  ];

  return (
    <BootstrapTable striped bordered hover>
      <TableHead columns={columns} openModal={openModal} />
      <TableBody
        columns={columns}
        openModal={openModal}
        tableData={tableData}
      />
    </BootstrapTable>
  );
};

export default Table;
