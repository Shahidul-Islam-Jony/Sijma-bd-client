import Banner from "../../Components/HomeComponent/Banner/Banner";
import SeasonalProducts from "../../Components/HomeComponent/SeasonalProducts/SeasonalProducts";
import TopSelling from "../../Components/HomeComponent/TopSelling/TopSelling";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <SeasonalProducts></SeasonalProducts>
            <TopSelling></TopSelling>
        </div>
    );
};

export default Home;