import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="w-[98%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h3>This is Footer</h3>
            
        </div>
    );
};

export default MainLayout;