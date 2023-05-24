import Layout from "../layout/Layout";
import HotelDetailsPhoto from "../components/HotelDetailsPhoto";
import HotelDetailsInformations from "../components/HotelDetailsInformations";

const HotelDetails = () => {
  return (
    <Layout>
      <div className="col">
        <div className="row">
          <HotelDetailsPhoto />
        </div>
        <div className="row">
          <HotelDetailsInformations />
        </div>
      </div>
    </Layout>
  );
};

export default HotelDetails;
