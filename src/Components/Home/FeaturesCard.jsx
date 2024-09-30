import React from 'react';

const FeaturesCard = () => {
    return (
        <>
            <div
                className="grid grid-cols-1 425px:grid-cols-2 1024px:grid-cols-4 gap-5 px-8 425px:px-10 pt-[5rem] 425px:pt-[5rem] pb-10 425px:pb-20 relative max-w-[1700px] mx-auto">

                <div className='absolute top-[60px] right-8 opacity-40 rotate-[-40deg] w-[550px]'>
                    <img src='https://i.ibb.co/VxXFnSz/abstract-wavy-line-removebg-preview.png' alt='vector' className='animation-bounce'/>
                </div>

                <div data-aos="fade-up" data-aos-duration="700" className="p-5 rounded-md border hover:border-[#0FABCA] hover:shadow-md transition-all duration-500 cursor-pointer border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                        <div className='w-[42px] h-[42px] bg-[#e7f6fa] rounded-full flex items-center justify-center'>
                            <img src="https://i.ibb.co/N9qLnWJ/Dashboard-Layout.png" alt="Verified-Account" border="0" className='w-[65%]'/>
                        </div>
                        <h4 className="text-text  font-[600] text-[1.2rem] ">
                            Full Customized
                        </h4>
                    </div>
                    <p className="text-[0.9rem] text-gray-500 pt-1">
                        Our Customized Component service offers tailored solutions for unique design needs. Whether it's
                        adapting
                        existing components or crafting entirely new ones, our team works closely with clients to bring
                        their
                        vision to life.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="p-5 rounded-md border border-gray-200 hover:border-[#0FABCA] hover:shadow-md transition-all cursor-pointer duration-500">
                    <div className="flex items-center gap-3 mb-3">
                        <div className='w-[42px] h-[42px] bg-[#e7f6fa] rounded-full flex items-center justify-center'>
                            <img src="https://i.ibb.co/V2W3Wqm/Windows-10-Personalization.png" alt="Verified-Account" border="0"/>
                        </div>
                        <h4 className="text-text font-[600] text-[1.2rem] ">
                            Modern Design
                        </h4>
                    </div>
                    <p className="text-[0.9rem] text-gray-500">
                    Our Modern Design collection brings a fresh and contemporary aesthetic to UI development.
                        Featuring sleek
                        lines, intuitive layouts, and vibrant visuals, our designs are tailored to elevate user
                        experiences across
                        digital platforms.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1300" className="p-5 rounded-md border border-gray-200 hover:border-[#0FABCA] hover:shadow-md transition-all cursor-pointer duration-500">
                    <div className="flex items-center gap-3 mb-3">
                        <div className='w-[42px] h-[42px] bg-[#e7f6fa] rounded-full flex items-center justify-center'>
                            <img src="https://i.ibb.co/K0phtxs/Stack.png" alt="Verified-Account" border="0"/>
                        </div>
                        <h4 className="text-text font-[600] text-[1.2rem] ">
                            Stactured Code
                        </h4>
                    </div>
                    <p className="text-[0.9rem] text-gray-500">
                    Our UI Component Library offers meticulously crafted, structured code for seamless integration
                        into any
                        project. Each component is designed with clarity and versatility in mind, empowering developers
                        to
                        effortlessly build visually stunning user interfaces.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1600" className="p-5 rounded-md border border-gray-200 hover:border-[#0FABCA] hover:shadow-md transition-all cursor-pointer duration-500">
                    <div className="flex items-center gap-3 mb-3">
                        <div className='w-[42px] h-[42px] bg-[#e7f6fa] rounded-full flex items-center justify-center'>
                            <img src="https://i.ibb.co/kDyDhB6/Verified-Account.png" alt="Verified-Account" border="0"/>
                        </div>
                        <h4 className="text-text font-[600] text-[1.2rem] ">
                        Easy To Use
                        </h4>
                    </div>
                    <p className="text-[0.9rem] text-gray-500">
                        Our UI components are designed for simplicity and ease of use, enabling developers to
                        effortlessly
                        integrate them into their projects. With intuitive APIs and clear documentation, our components
                        streamline
                        the development process, allowing for rapid implementation without sacrificing quality.
                    </p>
                </div>
            </div>
        </>
    );
};

export default FeaturesCard;
