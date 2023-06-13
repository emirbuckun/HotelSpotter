import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";

const Table = (name) => {
  const pageName = name.name;
  const [table, setTable] = useState([]);
  const { data } = useFetch(serverURL + "/" + pageName);

  useEffect(() => {
    if (data.length > 0) {
      clearData();
      parseData();
      setTable(data);
    }
  }, [data]);

  // Clear "__v" column in every table
  // Clear "password" column if table is user table
  const clearData = () => {
    data.length > 0 &&
      data.forEach(function (obj) {
        delete obj.__v;
        pageName == "user" && delete obj.password;
      });
  };

  const parseData = () => {
    console.log(pageName);
    switch (pageName) {
      case "amenity":
        parseAmenityData();
        break;

      default:
        break;
    }
  };

  const parseAmenityData = () => {
    console.log("parseAmenityData");
    data.length > 0 &&
      data.forEach(function (obj) {
        obj.amenity = obj.amenity.join(" - ");
      });
  };

  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {table.length > 0 &&
              Object.keys(table[0]).map(
                (key, index) => key != "_id" && <th key={index}>{key}</th>
              )}
          </tr>
        </thead>
        <tbody>
          {table.length > 0 &&
            table.map((table, index) => (
              <tr key={index}>
                {Object.values(table).map(
                  (value, index) => index != 0 && <td key={index}>{value}</td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
