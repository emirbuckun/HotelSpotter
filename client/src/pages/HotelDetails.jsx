import Layout from "../layout/Layout";
import HotelDetailsPhoto from "../components/HotelDetailsPhoto";
import HotelDetailsInformations from "../components/HotelDetailsInformations";
import MapComponent from "../components/MapComponent";
import HotelDetailsAddComment from "../components/HotelDetailsAddComment";

const HotelDetails = () => {
  return (
    <Layout>
      <HotelDetailsPhoto />
      <HotelDetailsInformations />
      <HotelDetailsAddComment />
      <MapComponent />
    </Layout>
  );
};

export default HotelDetails;
