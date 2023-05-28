import Layout from "../../layout/Layout";
import SearchBar from "../components/SearchBar";
import HotelList from "../components/HotelList";

const Home = () => {
  return (
    <Layout>
      <SearchBar />
      <HotelList />
    </Layout>
  );
};

export default Home;
