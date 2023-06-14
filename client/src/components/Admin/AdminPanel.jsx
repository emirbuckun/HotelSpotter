import React from "react";
import Sidebar from "/src/components/Admin/Sidebar";
import AmenityTable from "/src/components/Admin/AmenityTable";
import { useParams } from "react-router-dom";

const AdminPanel = () => {
  const { name } = useParams();
  const pageName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <h3 className="text-center">Admin Panel - {pageName}</h3>
          <AmenityTable />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
