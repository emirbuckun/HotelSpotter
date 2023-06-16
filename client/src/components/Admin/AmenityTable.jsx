import React, { useEffect, useState } from "react";
import useFetch from "/src/hooks/useFetch";

const AmenityTable = () => {
  const [table, setTable] = useState([]);
  const { data, loading } = useFetch(serverURL + "/amenity");

  useEffect(() => {
    if (data.length > 0) {
      parseAmenityData();
      setTable(data);
    }
  }, [data]);

  const parseAmenityData = () => {
    data.length > 0 &&
      data.forEach(function (obj) {
        obj.amenity = Array.isArray(obj.amenity) && obj.amenity.join(", ");
      });
  };

  return (
    <>
      {loading || table.length <= 0 ? (
        <div className="text-center">Loading</div>
      ) : (
        <>
          <button type="button" className="btn btn-success float-end">
            Create New
          </button>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Amenities</th>
                <th>Hotel Name</th>
              </tr>
            </thead>
            <tbody>
              {table.length > 0 &&
                table.map((table, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    {Object.values(table).map(
                      (value, index) =>
                        index > 1 && <td key={index}>{value}</td>
                    )}

                    <td>
                      <button type="button" className="btn btn-primary">
                        Edit
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default AmenityTable;
