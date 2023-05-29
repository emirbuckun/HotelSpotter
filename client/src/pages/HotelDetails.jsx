import Layout from "../layout/Layout";
import HotelDetailsPhoto from "../components/HotelDetailsPhoto";
import HotelDetailsInformations from "../components/HotelDetailsInformations";
import MapComponent from "../components/MapComponent";
import Comment from "/src/components/CommentComponent";

const HotelDetails = () => {
  return (
    <Layout>
      <HotelDetailsPhoto />

      <HotelDetailsInformations />
      <MapComponent />
      <Comment />
    </Layout>
  );
};

export default HotelDetails;
