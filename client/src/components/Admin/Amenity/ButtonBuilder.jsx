import Button from "react-bootstrap/Button";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";

const ButtonBuilder = ({ id, openModal, type }) => {
  const buttonIcon =
    (type == "Create" && <MdAdd />) ||
    (type == "Update" && <MdEdit />) ||
    (type == "Delete" && <MdDelete />);
  const buttonVariant =
    (type == "Create" && "success") ||
    (type == "Update" && "primary") ||
    (type == "Delete" && "danger");

  return (
    <Button
      size="sm"
      variant={buttonVariant}
      onClick={() => openModal(id, type)}
    >
      {buttonIcon}
    </Button>
  );
};

export default ButtonBuilder;
