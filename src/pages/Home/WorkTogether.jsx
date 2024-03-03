
import { IoIosArrowRoundForward } from "react-icons/io";
import Images from '../../assets/3Image.png'


const WorkTogether = () => {


    return (
        <div className="lg:flex gap-4 px-4 lg:px-6  lg:mt-32">
            <div className="lg:flex-1  lg:py-36 py-8 lg:px-8  ">
                <h1 className=" text-[#050038] text-5xl font-bold">Work together, <br /> wherever you work</h1>
                <p className="text-[#050038] mt-2 lg:mt-4">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <div className="flex items-center "><button className="text-[#4262FF] underline">Learn more</button>
                    <span><IoIosArrowRoundForward></IoIosArrowRoundForward></span></div>
            </div>

            <div className="flex-1 lg:px-4 ">
                <img className="" src={Images} alt="" />
            </div>
        </div>
    );
};

export default WorkTogether;
