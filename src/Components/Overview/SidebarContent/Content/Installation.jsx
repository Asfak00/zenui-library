import React from 'react';
import {Helmet} from "react-helmet";
import BlocksFooter from "../../../../Shared/BlocksFooter.jsx";

const Installation = () => {
    return (
        <div className='w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
            <h1 className='text-[2rem] 425px:text-[2.7rem] font-[600] bg-clip-text text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#1A1674]'>Installation
                Guide</h1>
            <div className='mt-3 w-full 1024px:w-[80%]'>
                <p className='text-[1rem] text-gray-900'>
                    ZenUI Library is designed to be <b>easy to use</b> with <b>no installation process required</b>.
                    Unlike many libraries that need to be installed via npm or similar package managers, ZenUI
                    components can be <b>directly copied and pasted</b> into your existing project. This means there
                    is <b>no need</b> to install ZenUI itself.
                </p>

                <p className='mt-3 text-[1rem] text-gray-900'>
                    However, for ZenUI components to work correctly, your project needs to be set up with specific tools
                    and frameworks like <b>Tailwind CSS</b>, <b>React</b>, or <b>Next.js</b>. These are the fundamental
                    technologies that power the ZenUI components, as they are built using Tailwind CSS for styling and
                    compatible with popular frameworks like React.
                </p>
            </div>

            <div data-ea-publisher="zenuinet" data-ea-manual="true" className="horizontal w-full" data-ea-type="image"></div>

            <div className='w-full 1024px:w-[80%] mt-6'>
                <h3 className='text-[1.5rem] font-[600]'>Why Doesn’t ZenUI Require Installation?</h3>
                <p className='mt-3 text-[1rem] text-gray-900'>
                    ZenUI is a library of pre-built components and blocks that can be directly inserted into your
                    project’s code. It doesn’t function as a JavaScript package that needs installation. Instead, you
                    can copy the component’s HTML and Tailwind CSS classes from ZenUI and immediately use them in your
                    application, making it incredibly flexible and easy to integrate.
                </p>
            </div>

            <div
                className='mt-6 w-full 1024px:w-[80%]  text-[1rem] text-gray-900 bg-orange-50 p-[15px] rounded-[8px] border-l-[5px] border-orange-400'>
                Some ZenUI components may include icons. To ensure these components display correctly, you will need to install the <b>react-icons</b> package if you're using React. This package provides a wide range of icons that can be easily integrated into your components. You can install it via npm <span className='py-1 px-3 bg-orange-100 rounded-md text-[0.9rem] font-mono'>npm install react-icons</span>
            </div>

            <div className='mt-6 w-full 1024px:w-[80%]'>
                <h3 className='text-[1.5rem] font-[600]'>Project Requirements:</h3>
                <p className='mt-3'>
                    While ZenUI doesn’t have its own installation, you’ll need to ensure that <b>your project is already
                    configured</b> with the necessary tools, depending on the type of project you're working on. Below
                    are the common setups you’ll need for ZenUI components:
                </p>
                <ul className='list-disc ml-8 mt-4 flex flex-col gap-[15px]'>
                    <li>
                        <b>Tailwind CSS Project:</b>
                        <span> If you're building a project with plain HTML or any framework, ensure that you have Tailwind CSS installed for styling. ZenUI components are styled using Tailwind CSS, so having it set up is essential.</span>
                    </li>
                    <li>
                        <b>React Project with Tailwind CSS:</b>
                        <span> If you're using React, Tailwind CSS should be installed and configured in your React project. ZenUI components can be used directly in your JSX files once Tailwind is set up.</span>
                    </li>
                    <li>
                        <b>Next.js with Tailwind CSS:</b>
                        <span> ZenUI components can also be used in a Next.js project, but again, Tailwind CSS needs to be configured first.</span>
                    </li>
                </ul>
            </div>

            <div className='mt-6 w-full 1024px:w-[80%]'>
                <h3 className='text-[1.5rem] font-[600]'>Basic Project Setup:</h3>
                <p className='mt-3 text-[1rem] text-gray-900'>
                    Since ZenUI doesn’t need any installation, we can help by providing guidance on how to set up a
                    basic project environment that will allow you to use ZenUI components.
                </p>
                <ul className='list-disc ml-8 mt-4 flex flex-col gap-[15px]'>
                    <li>
                        <b>Tailwind CSS Project:</b>
                        <span> Tailwind CSS is the main styling framework used by ZenUI components. You’ll need to add Tailwind to your project by following these steps:</span>
                        <br/>
                        <a href='https://tailwindcss.com/docs/installation' className='text-[#3b7ac6] hover:underline'>Tailwind
                            CSS Installation Guide</a>
                    </li>
                    <li>
                        <b>React Project with Tailwind CSS:</b>
                        <span> If you're using React and want to integrate ZenUI, make sure your project has Tailwind CSS installed:</span>
                        <br/>
                        <a href='https://tailwindcss.com/docs/guides/create-react-app'
                           className='text-[#3b7ac6] hover:underline'>React + Tailwind CSS Setup
                            Guide</a>
                    </li>
                    <li>
                        <b>Next.js with Tailwind CSS:</b>
                        <span> If you're building a Next.js project, you can easily integrate Tailwind CSS by following the guide below:</span>
                        <br/>
                        <a href='https://tailwindcss.com/docs/guides/nextjs' className='text-[#3b7ac6] hover:underline'>Next.js
                            + Tailwind CSS Setup Guide</a>
                    </li>
                </ul>
            </div>

            <div
                className='mt-6 w-full 1024px:w-[80%]  text-[1rem] text-gray-900 bg-blue-50 p-[15px] rounded-[8px] border-l-[5px] border-blue-500'>
                By following the setup guides for Tailwind CSS, React, or Next.js, you'll be ready to use ZenUI
                components right away! If you need help setting up your project, refer to the links provided above for
                detailed instructions.
            </div>

            <div className='w-full 1024px:w-[80%]'>
                <BlocksFooter backUrl='/getting-started/overview' backName='overview'
                              forwardUrl='/getting-started/resources' forwardName='resources'/>
            </div>

            <Helmet>
                <title>Get-Started - Installation</title>
            </Helmet>
        </div>
    );
};

export default Installation;
