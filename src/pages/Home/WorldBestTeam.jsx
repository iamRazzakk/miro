

const WorldBestTeam = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-2 md:mb-4 text-center'>Loved by the world's best teams</h1>
            <div className="flex justify-center">
                <button className="mt-8 px-10 py-4 border border-blue-500 rounded-full">See all customer stories →</button>
            </div>
            <div className="grid md:mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* First one */}
                <div className="md:h-96 p-10">
                    <h1 className='text-3xl font-bold text-[#050038]'>VMWare</h1>
                    <p>
                        “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
                        Roxanne Mustafa
                        Design Team Lead at VMware
                    </p>
                    <div className="flex gap-4 items-center">
                        <img className="h-16 w-16 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTes1d_M4k4Hmwp1JAPkXRRJspNFwVmq_Rb7NmWuybnksQZgaiKy1HASvn7gDDT9JBV7B8&usqp=CAU" alt="" />
                        <div>
                            <h1>Roxanne Mustafa</h1>
                            <p>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
                {/* Secound One one */}
                <div className="md:h-96 p-10">
                    <h1 className='text-3xl font-bold text-[#050038]'>DocuSign</h1>
                    <p className="mt-10">
                    “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
                    </p>
                    <div className="flex mt-16 gap-4 items-center">
                        <div>
                            <h1 >Jane Ashley</h1>
                            <p>Head of Design at DocuSign</p>
                        </div>
                        <img className="h-16 w-16 rounded-full" src="https://img.freepik.com/free-photo/beautiful-young-woman-with-glasses-gray-background-3d-rendering_1142-55126.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707523200&semt=ais" alt="" />
                    </div>
                </div>
                {/* Third one */}
                <div className="md:h-96 p-10">
                    <h1 className='text-3xl font-bold text-[#050038]'>Frog</h1>
                    <p className="mt-10">
                    “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
                    </p>
                    <div className="flex mt-16 gap-4 items-center">
                        <img className="h-16 w-16 rounded-full" src="data:image/jpeg;base64,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" alt="" />
                        <div>
                            <h1>Laura Baird</h1>
                            <p>Associate Design Director at frog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldBestTeam;