import BootstrapTable from "react-bootstrap/Table";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ sort, setSort, columns, openModal, tableData }) => {
  return (
    <BootstrapTable striped bordered hover>
      <TableHead {...{ sort, setSort, columns, openModal }} />
      <TableBody {...{ columns, openModal, tableData }} />
    </BootstrapTable>
  );
};

export default Table;
