import React, {useState} from "react";

// utils styles
import utils from "../../Utils";

// icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {

  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onSubmitSubscribe = async (event)=> {
    event.preventDefault()
    setResult("Submitting....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8029480-bb2e-4808-b81f-7625dcd2c250");



    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    console.log(data)

    if (data.success) {
      data.data = {
        email: inputValue
      }
      setResult("Thank you for subscribing!");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  }

  return (
    <footer className="w-full toastshadow px-5 425px:px-10 py-8 bg-secondary shadow-shadowColor">
      <div className="w-full flex 640px:flex-row flex-col 640px:gap-0 gap-8 justify-between items-start">
        <div className="w-full 640px:w-[30%]">
          <img src="/footer_logo.png" alt="logo" className="w-[150px] 640px:w-[180px] my-3"/>

          <p className="text-gray-500 text-[1rem]">
            Elevate your project with free UI components, customizable icons, and a color palette. No dependencies required.
          </p>

          <div className="flex items-center gap-4 mt-5">
            {/*<a href="">*/}
            {/*  <FaGithub className="text-[#9caebc] text-[1.5rem]" />*/}
            {/*</a>*/}

            <a href="https://web.facebook.com/zenuilibrary" target='_blank'>
              <FaFacebook className="text-[#9caebc] text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
            </a>

            <a href="https://www.linkedin.com/company/zenui/" target='_blank'>
              <FaLinkedin className="text-[#9caebc] text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
            </a>

            <a href="https://x.com/zenuilibrary" target='_blank'>
              <FaXTwitter className="text-[#9caebc] text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
            </a>

            <a href="mailto:zenuilibrary@gmail.com">
              <SiGmail className="text-[#9caebc] text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
            </a>
          </div>

        </div>

        <div className=" flex 640px:flex-row flex-col gap-8 640px:gap-20">
          <div className="flex gap-2 flex-col mt-4">
            <h3 className="font-[600] text-gray-600 text-[20px] capitalize">
              resources
            </h3>
            <ul className="footer font-[400] text-[#9caebc] text-[0.9rem] flex flex-col gap-2">
              <li>
                <p><a href='/getting-started/templates'>Free templates</a></p>
                <span><a href='/getting-started/templates'>Free templates</a></span>
              </li>
              <li>
                <p><a href='/components/all-components'>Components</a></p>
                <span><a href='/components/all-components'>Components</a></span>
              </li>
              <li>
                <p><a href='/opacity-palette'>Colors Palette</a></p>
                <span><a href='/opacity-palette'>Colors Palette</a></span>
              </li>
              <li>
                <p><a href='/blocks/all-blocks'>Blocks</a></p>
                <span><a href='/blocks/all-blocks'>Blocks</a></span>
              </li>
              <li>
                <p><a href='/icons'>Icons</a></p>
                <span><a href='/icons'>Icons</a></span>
              </li>
            </ul>
          </div>

          <div className="flex gap-2 flex-col mt-4">
            <h3 className="font-[600] text-gray-600 text-[20px] capitalize">
              Company
            </h3>
            <ul className="footer font-[400] text-[0.9rem] text-[#9caebc] flex flex-col gap-2">
              <li>
                <p><a href='/about-us'>About Us</a></p>
                <span><a href='/about-us'>About Us</a></span>
              </li>
              {/*<li>*/}
              {/*  <p>Support</p>*/}
              {/*  <span>Support</span>*/}
              {/*</li>*/}
              <li>
                <p><a href='/privacy-policy'>Privacy policy</a></p>
                <span><a href='/privacy-policy'>Privacy policy</a></span>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 flex-col mt-4">
            <h3 className="font-[600] text-gray-600 text-[20px] capitalize">
              Join our newsletter
            </h3>

            <form className="" onSubmit={onSubmitSubscribe}>
              <label
                  htmlFor="email"
                  className="text-[#9caebc] text-[0.9rem] mb-2"
              >
                Your Email
              </label>
              <input type="hidden" name="access_key" value="e8029480-bb2e-4808-b81f-7625dcd2c250"/>
              <div className="relative mt-1">
                <input
                    type="email"
                    name=""
                    id=""
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="example@gmail.com"
                    className="py-3 pl-4 pr-[120px] border w-full bg-transparent border-gray-200 rounded-md focus:ring-0 outline-none"
                />
                <button type="submit"
                        className={`absolute top-0 h-full right-0 px-4 bg-gray-300 hover:text-white text-gray-600 hover:bg-[#0FABCA] rounded-r-md transition-all duration-300`}>
                  Subscribe
                </button>
              </div>
            </form>

            <a href='https://web.facebook.com/share/g/D8DbMaprfWPksSGF/' target='_blank' className='p-3 cursor-pointer bg-gray-100 rounded-md mt-2 flex hover:bg-gray-200 items-center gap-[14px]'>
              <img src='https://cdn.doplac.site/doplac-media/doplac/54/kkclZyRXclMgFEfFJfBd1716725266.png' alt='facebook' className='w-[30px]'/>

              <div>
                <h4 className='text-[1rem] font-[600] text-gray-700'>Join Community</h4>
                <p className='text-[0.9rem] font-[300] text-gray-700'>60+ Members</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
          className="w-full border-t border-gray-100 flex items-center 425px:flex-row flex-col 425px:gap-0 gap-5 justify-center mt-12 pt-6">
        <p className="text-gray-400 text-center text-[0.9rem]">
          Copyright &copy; 2024 by ZenUI Library.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
