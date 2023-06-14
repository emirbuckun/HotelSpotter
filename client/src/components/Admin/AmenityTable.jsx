import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";

const AmenityTable = (name) => {
  const [table, setTable] = useState([]);
  const { data } = useFetch(serverURL + "/amenity");

  useEffect(() => {
    if (data.length > 0) {
      parseAmenityData();
      setTable(data);
    }
  }, [data]);

  const parseAmenityData = () => {
    data.length > 0 &&
      data.forEach(function (obj) {
        obj.amenity = obj.amenity.join(" - ");
      });
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {table.length > 0 &&
            Object.keys(table[0]).map(
              (key, index) => index > 1 && <th key={index}>{key}</th>
            )}
        </tr>
      </thead>
      <tbody>
        {table.length > 0 &&
          table.map((table, index) => (
            <tr key={index}>
              {Object.values(table).map(
                (value, index) => index > 1 && <td key={index}>{value}</td>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default AmenityTable;
