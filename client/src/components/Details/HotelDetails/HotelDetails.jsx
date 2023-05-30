import HotelDetailsPhoto from "/src/components/Details/HotelDetails/HotelDetailsPhoto";
import HotelDetailsInformations from "/src/components/Details/HotelDetails/HotelDetailsInformations";
import MapComponent from "/src/components/Details/HotelDetails/MapComponent";
import Comment from "/src/components/Details/HotelDetails/CommentComponent";

const HotelDetails = () => {
  return (
    <>
      <HotelDetailsPhoto />
      <HotelDetailsInformations />
      <MapComponent />
      <Comment />
    </>
  );
};

export default HotelDetails;
