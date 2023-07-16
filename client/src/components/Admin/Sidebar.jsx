import { Nav } from "react-bootstrap";

const Sidebar = ({ pageName }) => {
  const tabList = [
    "amenity",
    "answer",
    "hotel",
    "location",
    "log",
    "ownership",
    "picture",
    "question",
    "reservation",
    "review",
    "room",
    "user",
    "userRole",
  ];
  return (
    <Nav className="col-md-12 d-none d-md-block bg-white" activeKey={pageName}>
      {tabList.map((value, index) => {
        const title = value.charAt(0).toUpperCase() + value.slice(1);
        return (
          <Nav.Item key={index}>
            <Nav.Link
              className="text-dark"
              eventKey={value}
              href={"/admin/" + value}
            >
              {title}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

export default Sidebar;
