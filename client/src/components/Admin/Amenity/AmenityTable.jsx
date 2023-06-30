import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";

const AmenityTable = ({ openModal, amenities }) => {
  return (
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
        {amenities.map((item, index) => (
          <tr key={index}>
            <th className="align-middle">{index + 1}</th>
            <td className="align-middle">{item.hotelName}</td>
            <td className="align-middle">
              {item.amenity.map((amenity, index) =>
                index == 0 ? amenity : ", " + amenity
              )}
            </td>
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
  );
};

export default AmenityTable;
