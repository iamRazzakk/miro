import { IoIosArrowRoundForward } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
export default function WorkTogether() {
    return (
        <div className="flex">
            <div className="flex-1">
                <h1 className="text-[#050038] text-5xl font-bold">Work together, wherever you work</h1>
                <p className="text-[#050038]">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <div className="flex items-center "><button className="text-[#4262FF]">Learn more</button>
                    <span><IoIosArrowRoundForward></IoIosArrowRoundForward></span></div>
            </div>
            <div className="flex-1">

            </div>
        </div>
    )
}
