import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import Footer from "../Components/SharedComponents/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="w-full mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>   
        </div>
    );
};

export default MainLayout;