

const Collaborate = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold text-[#050038]">
                Collaborate without <br />
                constraints
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-10">
                <div className="p-10 rounded bg-gray-300">
                    <h1 className="text-xl font-bold mb-4 text-[#050038]">Free forever</h1>
                    <p className="text-[#050038] text-base">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <span className="text-[#4262FF] cursor-pointer ">pricing plans</span> for more features.</p>
                </div>
                <div className="p-10 rounded bg-gray-300">
                    <h1 className="text-xl font-bold mb-4 text-[#050038]">Easy integrations</h1>
                    <p className="text-[#050038] text-base">
                        Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our. for more features. <span className=" cursor-pointer text-[#4262FF]">Marketplace</span></p>
                </div>
                <div className="p-10 rounded bg-gray-300">
                    <h1 className="text-xl font-bold mb-4 text-[#050038]">Security first</h1>
                    <p className="text-[#050038] text-base">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more
                        at our <span className=" cursor-pointer text-[#4262FF]">Trust Center .</span></p>
                </div>
            </div>
            {/* Button  */}
            <div className="flex items-center justify-center mt-4 md:mt-8">
                <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium  transition duration-300 ease-out border-2 bg-[#4262FF] text-white rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#4262FF]  group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Sing up free</span>
                    <span className="relative invisible">Sing up free</span>
                </button>
            </div>
        </div>
    );
};

export default Collaborate;