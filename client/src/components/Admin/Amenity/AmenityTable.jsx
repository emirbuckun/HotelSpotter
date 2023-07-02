import Table from "react-bootstrap/Table";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const AmenityTable = ({ openModal, tableData }) => {
  const columns = [
    { label: "Hotel Name", accessor: "hotelName" },
    { label: "Amenities", accessor: "amenity" },
  ];

  return (
    <Table striped bordered hover>
      <TableHead columns={columns} openModal={openModal} />
      <TableBody
        columns={columns}
        openModal={openModal}
        tableData={tableData}
      />
    </Table>
  );
};

export default AmenityTable;
