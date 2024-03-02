import { useState } from 'react';
import '../../components/Css/WayYouWork.css'
import { IoIosArrowRoundForward } from 'react-icons/io';
import img from "../../assets/image.png"
const WayYouWork = () => {
    const [activeItem, setActiveItem] = useState(1);

    const handleMouseEnter = (index) => {
        setActiveItem(index);
    };

    const handleMouseLeave = () => {
        setActiveItem(1);
    };

    return (
        <div className='md:mt-32 text-[#050038]'>
            <h1 className='text-3xl font-bold mb-2 md:mb-4'>Built for the way you work</h1>
            <ul className="flex justify-between px-4">
                <li
                    className={`button  ${activeItem === 1 ? 'active px-10 py-4' : ''}`}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    Brainstorming
                </li>
                <li
                    className={`button ${activeItem === 2 ? 'active px-10 py-4' : ''}`}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    Diagramming
                </li>
                <li
                    className={`button ${activeItem === 3 ? 'active px-10 py-4' : ''}`}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                >
                    Meetings & Workshops
                </li>
                <li
                    className={`button ${activeItem === 4 ? 'active px-10 py-4' : ''}`}
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                >
                    Scrum Events
                </li>
                <li
                    className={`button ${activeItem === 5 ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                >
                    Mapping
                </li>
                <li
                    className={`button ${activeItem === 6 ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(6)}
                    onMouseLeave={handleMouseLeave}
                >
                    Research & Design
                </li>
                <li
                    className={`button ${activeItem === 7 ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(7)}
                    onMouseLeave={handleMouseLeave}
                >
                    Strategic Planning
                </li>
            </ul>
            <div className='md:mt-4 md:flex justify-center gap-4'>
                <div className='flex-1 p-10'>
                    <h1 className='text-3xl font-bold text-[#050038] md:mb-10'>Brainstorming</h1>
                    <p className='text-xl md:mb-10'> Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.
                    </p>
                    <div className="flex text-xl items-center "><button className="text-[#4262FF] underline">Learn more</button>
                        <span><IoIosArrowRoundForward></IoIosArrowRoundForward></span>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WayYouWork;