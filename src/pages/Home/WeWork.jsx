import weWorkImg from '../../assets/woman-working-on-laptop.jpg';

const WeWork = () => {
    return (
        <div className="lg:mt-32 px-4 lg:px-6">
            <div className='  relative'>
                <img className="h-[450px] w-full object-cover rounded-2xl" src={weWorkImg} alt="" />
            </div>
            <div className='absolute -mt-72 ml-28 lg:-mt-64 lg:ml-[750px] text-center'>
                <h1 className='text-[#050038] text-xl lg:text-3xl font-bold lg:mb-2'>The Ways We Work</h1>
                <p className='text-base lg:text-xl text-[#050038] lg:mb-2'>
                    How has our relationship with work changed?
                </p>
                <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium  transition duration-300 ease-out border-2 bg-[#4262FF] text-white rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#4262FF]  group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">View the report</span>
                    <span className="relative invisible">View the report</span>
                </button>
            </div>
        </div>
    );
};

export default WeWork;
