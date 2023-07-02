import ButtonBuilder from "./ButtonBuilder";

const TableBody = ({ columns, openModal, tableData }) => {
  return (
    <tbody>
      {tableData &&
        tableData.map((data, index) => {
          return (
            <tr className="align-middle" key={data._id}>
              <th className="text-center">{index + 1}</th>
              {columns.map(({ accessor }) => {
                return <td key={accessor}>{data[accessor]}</td>;
              })}
              <td>
                <div className="d-flex justify-content-between">
                  <div className="m-1">
                    <ButtonBuilder
                      id={data._id}
                      openModal={openModal}
                      type={"Update"}
                    />
                  </div>
                  <div className="m-1">
                    <ButtonBuilder
                      id={data._id}
                      openModal={openModal}
                      type={"Delete"}
                    />
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default TableBody;
