import BuiltForAllKinds from "./BuiltForAllKinds";
import Collaborate from "./Collaborate";
import Connect from "./Connect";
import Header from "./Header";
import TrustedUser from "./TrustedUser";
import WayYouWork from "./WayYouWork";
import WeWork from "./WeWork";
import WorkTogether from "./WorkTogether";
import WorldBestTeam from "./WorldBestTeam";


const Home = () => {
    return (
        <div>
            {/* <h1 className="text-5xl font-bold">This is from home</h1>
             */}
            <Header></Header>
            <TrustedUser></TrustedUser>
            <Collaborate></Collaborate>
            <div className="md:w-[1020px]">
                <WorkTogether></WorkTogether>
            </div>
            <Connect></Connect>
            <WeWork></WeWork>
            <WayYouWork></WayYouWork>
            <BuiltForAllKinds></BuiltForAllKinds>
            <WorldBestTeam></WorldBestTeam>
        </div>

    );
};

export default Home;