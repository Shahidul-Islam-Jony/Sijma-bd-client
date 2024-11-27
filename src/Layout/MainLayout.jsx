import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <h2>This is navbar</h2>
            <Outlet></Outlet>
            <h3>This is Footer</h3>
            
        </div>
    );
};

export default MainLayout;