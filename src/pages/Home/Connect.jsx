
import { IoIosArrowRoundForward } from 'react-icons/io';
import bgImg from '../../assets/bg-img.jpeg'
const Connect = () => {
    return (
        <div className="px-4 lg:px-6 lg:flex gap-4 lg:mt-32">
            <div className='flex-1 p-6'>
                <img className='h-96 w-full object-cover rounded-2xl' src={bgImg} alt="" />
            </div>
            <div className='text-center lg:text-left flex-1 p-6 mt-2 lg:mt-14 lg:ml-10'>
                <h1 className=' text-2xl lg:text-4xl font-bold text-[#050038]'>Connect <br />
                    your tools,<br />
                    close your tabs</h1>
                <p className='text-xl lg:w-[450px] text-[#050038] mt-4 lg:mt-6 mb-4 lg:mb-6'>
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