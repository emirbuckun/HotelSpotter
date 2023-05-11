import React from "react";

const HotelListingFooter = () => {
  return (
    <div>
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-body">&copy; 2023 HotelSpotter</p>
        </footer>
      </div>

      <div class="b-example-divider"></div>
    </div>
  );
};

export default HotelListingFooter;
