import BootstrapButton from "react-bootstrap/Button";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";

const Button = ({ id, openModal, type }) => {
  const buttonIcon =
    (type == "Create" && <MdAdd />) ||
    (type == "Update" && <MdEdit />) ||
    (type == "Delete" && <MdDelete />);
  const buttonVariant =
    (type == "Create" && "success") ||
    (type == "Update" && "primary") ||
    (type == "Delete" && "danger");

  return (
    <BootstrapButton
      size="sm"
      variant={buttonVariant}
      onClick={() => openModal(id, type)}
    >
      {buttonIcon}
    </BootstrapButton>
  );
};

export default Button;
