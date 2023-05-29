import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="d-lg-block sidebar collapse bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a
            href="/admin/amenity"
            className="list-group-item list-group-item-action py-2 ripple active"
            aria-current="true"
          >
            Amenity
          </a>
          <a
            href="/admin/answer"
            className="list-group-item list-group-item-action py-2 ripple "
          >
            Answer
          </a>
          <a
            href="/admin/hotel"
            className="list-group-item list-group-item-action py-2 "
          >
            Hotel
          </a>
          <a
            href="/admin/location"
            className="list-group-item list-group-item-action py-2 "
          >
            Location
          </a>
          <a
            href="/admin/log"
            className="list-group-item list-group-item-action py-2 "
          >
            Log
          </a>
          <a
            href="/admin/ownership"
            className="list-group-item list-group-item-action py-2 "
          >
            Ownership
          </a>
          <a
            href="/admin/picture"
            className="list-group-item list-group-item-action py-2 "
          >
            Picture
          </a>
          <a
            href="/admin/question"
            className="list-group-item list-group-item-action py-2 "
          >
            Question
          </a>
          <a
            href="/admin/reservation"
            className="list-group-item list-group-item-action py-2 "
          >
            Reservation
          </a>
          <a
            href="/admin/review"
            className="list-group-item list-group-item-action py-2 "
          >
            Review
          </a>
          <a
            href="/admin/room"
            className="list-group-item list-group-item-action py-2 "
          >
            Room
          </a>
          <a
            href="/admin/user"
            className="list-group-item list-group-item-action py-2 "
          >
            User
          </a>
          <a
            href="/admin/user-role"
            className="list-group-item list-group-item-action py-2 "
          >
            User Role
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
