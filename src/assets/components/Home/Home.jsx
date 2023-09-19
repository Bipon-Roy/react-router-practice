import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    // console.log(location);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="my-4">
                <Header />
            </div>
            {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
            <div className="my-4">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
