import Collaborate from "./Collaborate";
import Connect from "./Connect";
import TrustedUser from "./TrustedUser";
import WeWork from "./WeWork";
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
            <Connect></Connect>
            <WeWork></WeWork>
        </div>

    );
};

export default Home;