
import { IoIosArrowRoundForward } from 'react-icons/io';
import bgImg from '../../assets/bg-img.jpeg'
const Connect = () => {
    return (
        <div className="flex gap-4 md:mt-32">
            <div className='flex-1 p-6'>
                <img className='h-96 w-full object-cover rounded-2xl' src={bgImg} alt="" />
            </div>
            <div className='flex-1 p-6 mt-2 md:mt-14 md:ml-10'>
                <h1 className='md:w-[200px] text-4xl font-bold text-[#050038]'>Connect
                    your tools,
                    close your tabs</h1>
                <p className='text-xl md:w-[450px] text-[#050038] mt-4 md:mt-6 mb-4 md:mb-6'>
                    Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.
                </p>
                <div className="flex text-xl items-center "><button className="text-[#4262FF] underline">Learn more</button>
                    <span><IoIosArrowRoundForward></IoIosArrowRoundForward></span>
                </div>
            </div>
        </div>
    );
};

export default Connect;