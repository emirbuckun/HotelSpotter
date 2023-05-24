import Layout from "../layout/Layout";
import HotelDetailsPhoto from "../components/HotelDetailsPhoto";
import HotelDetailsInformations from "../components/HotelDetailsInformations";

const HotelDetails = () => {
  return (
    <Layout>
      <HotelDetailsPhoto />
      <HotelDetailsInformations />
    </Layout>
  );
};

export default HotelDetails;
