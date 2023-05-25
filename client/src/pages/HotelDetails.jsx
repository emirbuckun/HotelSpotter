import Layout from "../layout/Layout";
import HotelDetailsPhoto from "../components/HotelDetailsPhoto";
import HotelDetailsInformations from "../components/HotelDetailsInformations";
import MapComponent from "../components/MapComponent";

const HotelDetails = () => {
  return (
    <Layout>
      <HotelDetailsPhoto />
      <HotelDetailsInformations />
      <MapComponent />
    </Layout>
  );
};

export default HotelDetails;
