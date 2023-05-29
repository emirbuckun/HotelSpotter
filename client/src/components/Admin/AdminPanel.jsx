import React from "react";
import Sidebar from "/src/components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";

const AdminPanel = () => {
  const { name } = useParams();
  const pageName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>
      <h3 className="text-center">Admin Panel - {pageName}</h3>
      <div className="row">
        <div className="col-md-6">
          <Sidebar />
        </div>
        <div className="col-md-6">Table</div>
      </div>
    </>
  );
};

export default AdminPanel;
