import HotelPhoto from "/src/components/Details/Hotel/HotelPhoto";
import HotelInfo from "/src/components/Details/Hotel/HotelInfo";
import HotelMap from "/src/components/Details/Hotel/HotelMap";
import HotelComment from "/src/components/Details/Hotel/HotelComment";
import { useParams } from "react-router-dom";
import useFetch from "/src/hooks/useFetch";

const HotelDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    serverURL + "/hotel/getHotelDetails/" + id
  );
  return (
    <>
      {loading || data.length <= 0 ? (
        <div>Hotel details are loading..</div>
      ) : (
        <>
          <HotelPhoto hotelData={data} />
          <HotelInfo hotelData={data} />
          <HotelMap hotelData={data} />
          <HotelComment hotelData={data} />
        </>
      )}
    </>
  );
};

export default HotelDetails;
