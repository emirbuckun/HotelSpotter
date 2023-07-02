import Button from "./Button";

const TableHead = ({ columns, openModal }) => {
  return (
    <thead>
      <tr>
        <th className="text-center">#</th>
        {columns.map(({ label, accessor }) => {
          return <th key={accessor}>{label}</th>;
        })}
        <th className="text-center" colSpan={2}>
          <Button id={""} openModal={openModal} type={"Create"} />
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
