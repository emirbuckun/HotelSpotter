import ButtonBuilder from "./ButtonBuilder";

const TableHead = ({ columns, openModal }) => {
  return (
    <thead>
      <tr>
        <th className="text-center">#</th>
        {columns.map(({ label, accessor }) => {
          return <th key={accessor}>{label}</th>;
        })}
        <th className="text-center" colSpan={2}>
          <ButtonBuilder id={""} openModal={openModal} type={"Create"} />
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
