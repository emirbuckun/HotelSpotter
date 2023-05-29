import React, { useEffect } from "react";
import useFetch from "/src/hooks/useFetch";

const Table = (name) => {
  const pageName = name.name;
  const { data, loading, error } = useFetch(serverURL + "/" + pageName);

  return (
    <>
      <div className="table"></div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((data, index) => (
              <tr key={index}>
                {Object.values(data).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
