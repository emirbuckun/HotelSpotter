import React from "react";
import Sidebar from "/src/components/Admin/Sidebar";
import Table from "/src/components/Admin/Index";
import { useParams } from "react-router-dom";

const AdminPanel = () => {
  const { name } = useParams();
  const pageName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Sidebar pageName={name} />
        </div>
        <div className="col-md-10">
          <h3 className="text-center">Admin Panel - {pageName}</h3>
          <Table pageName={name} />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
