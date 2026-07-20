import { Outlet } from "react-router-dom";
import TopBar from "../components/common/TopBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import BackToTop from "../components/common/BackToTop";

const MainLayout = () => {
    return (
        <>
            <TopBar />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
        </>
    );
};

export default MainLayout;