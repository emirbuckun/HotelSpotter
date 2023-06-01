import HotelPhoto from "/src/components/Details/Hotel/HotelPhoto";
import HotelInfo from "/src/components/Details/Hotel/HotelInfo";
import HotelMap from "/src/components/Details/Hotel/HotelMap";
import HotelComment from "/src/components/Details/Hotel/HotelComment";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  return (
    <>
      <HotelPhoto id={id} />
      <HotelInfo id={id} />
      <HotelMap id={id} />
      <HotelComment id={id} />
    </>
  );
};

export default HotelDetails;
