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
            <Header></Header>
            <TrustedUser></TrustedUser>
            <Collaborate></Collaborate>

            <WorkTogether></WorkTogether>

            <Connect></Connect>
            <WeWork></WeWork>
            <WayYouWork></WayYouWork>
            <BuiltForAllKinds></BuiltForAllKinds>
            <WorldBestTeam></WorldBestTeam>
        </div>

    );
};

export default Home;