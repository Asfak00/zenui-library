import React from "react";

// utils styles
import utils from "../../Utils";

// icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {

  const containerStyle = {
    backgroundImage: 'url(/footerImg.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  };

  return (
    <footer className="w-full px-5 425px:px-10 py-8 bg-secondary shadow-shadowColor" style={containerStyle}>
      <div className="w-full flex 640px:flex-row flex-col 640px:gap-0 gap-8 justify-between items-start">
        <div className="w-full 640px:w-[33%]">
          <img src="/footer_logo.png" alt="logo" className="w-[150px] 640px:w-[200px] my-3" />

          <p className="text-[#9caebc] text-[1rem]">
            Keep up to date Join our newsletter for regular updates. No spam
            ever.
          </p>

          <form className="mt-4">
            <label
              htmlFor="email"
              className="text-[#9caebc] text-[0.9rem] mb-2"
            >
              Your Email
            </label>
            <div className="flex items-center gap-3 mt-1">
              <input
                type="email"
                name=""
                id=""
                placeholder="zenuilibrary@gmail.com"
                className="py-2 px-3 border bg-[#0471d6] rounded border-[#024C92] text-[#024C92] placeholder:text-[#024C92] focus:outline-none"
              />
              <button type="submit" className={`${utils.buttonSecondary} !px-5 425px:px-20 425px:min-w-[100px] pl-3.5`}>
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className=" flex 640px:flex-row flex-col gap-8 640px:gap-20">
          <div className="flex gap-2 flex-col mt-4">
            <h3 className="font-[600] text-[#0471d6] text-[20px] capitalize">
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
            </ul>
          </div>

          {/*<div className="flex gap-2 flex-col mt-4">*/}
          {/*  <h3 className="font-[600]  text-[#0471d6] text-[20px] capitalize">*/}
          {/*    Explore*/}
          {/*  </h3>*/}
          {/*  <ul className="footer font-[400] text-[0.9rem] text-[#9caebc] flex flex-col gap-2">*/}
          {/*    <li>*/}
          {/*      <p>Documentation</p>*/}
          {/*      <span>Documentation</span>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <p>Store</p>*/}
          {/*      <span>Store</span>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <p>Blog</p>*/}
          {/*      <span>Blog</span>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <p>Showcase</p>*/}
          {/*      <span>Showcase</span>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          <div className="flex gap-2 flex-col mt-4">
            <h3 className="font-[600] text-[#0471d6] text-[20px] capitalize">
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
        </div>
      </div>

      <div className="w-full border-t border-[#9caebc] flex items-center 425px:flex-row flex-col 425px:gap-0 gap-5 justify-between mt-12 pt-6">
        <p className="text-[#9caebc] text-[0.9rem]">
          Copyright &copy; 2024 by ZenUI Library.
        </p>
        <div className="flex items-center gap-4">
          {/*<a href="">*/}
          {/*  <FaGithub className="text-[#9caebc] text-[1.5rem]" />*/}
          {/*</a>*/}

          <a href="https://web.facebook.com/zenuilibrary" target='_blank'>
            <FaFacebook className="text-[#9caebc] text-[1.4rem] hover:text-primary transition-colors duration-300" />
          </a>

          <a href="https://www.linkedin.com/company/zenui/" target='_blank'>
            <FaLinkedin className="text-[#9caebc] text-[1.4rem] hover:text-primary transition-colors duration-300" />
          </a>

          <a href="https://x.com/zenuilibrary" target='_blank'>
            <FaXTwitter className="text-[#9caebc] text-[1.4rem] hover:text-primary transition-colors duration-300" />
          </a>

          <a href="mailto:zenuilibrary@gmail.com" >
            <SiGmail className="text-[#9caebc] text-[1.4rem] hover:text-primary transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
