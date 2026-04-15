import Banner from "../Components/Pages/Banner/Banner";
import Review from "../Components/Pages/Review/Review";
import TopItems from "../Components/Pages/Top Review/TopItems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopItems></TopItems>
      <Review></Review>
    </div>
  );
};

export default Home;