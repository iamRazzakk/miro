import Collaborate from "./Collaborate";
import TrustedUser from "./TrustedUser";
import WorkTogether from "./WorkTogether";


const Home = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold">This is from home</h1>
            <TrustedUser></TrustedUser>
            <Collaborate></Collaborate>
            <div className="md:w-[1020px]">
                <WorkTogether></WorkTogether>
            </div>
        </div>

    );
};

export default Home;