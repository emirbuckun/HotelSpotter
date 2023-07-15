import Button from "./Button";
import { FaSort } from "react-icons/fa";

const TableHead = ({ sort, setSort, columns, openModal }) => {
  const handleSort = (accessor) => {
    const sortOrder =
      accessor === sort.sort && sort.order === "asc" ? "desc" : "asc";
    setSort({ sort: accessor, order: sortOrder });
  };

  return (
    <thead>
      <tr>
        <th className="text-center">#</th>
        {columns.map(({ label, accessor, sortable }) => {
          return (
            <th
              key={accessor}
              onClick={sortable ? () => handleSort(accessor) : null}
            >
              <div className="d-flex justify-content-between">
                {label}
                <FaSort />
              </div>
            </th>
          );
        })}
        <th className="text-center" colSpan={2}>
          <Button id={""} openModal={openModal} type={"Create"} />
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
