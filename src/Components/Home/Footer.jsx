import React from "react";

// utils styles
import utils from "../../Utils";

// icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-8 bg-secondary shadow-primary">
      <div className="w-full flex justify-between items-start">
        <div className="w-[33%]">
          <img src="/footerlogo.png" alt="logo" className="w-[200px] my-3" />

          <p className="text-text text-[1rem]">
            Keep up to date Join our newsletter for regular updates. No spam
            ever.
          </p>

          <form className="mt-4">
            <label htmlFor="email" className="text-text text-[0.9rem] mb-2">
              Your Email
            </label>
            <div className="flex items-center gap-3">
              <input
                type="email"
                name=""
                id=""
                placeholder="example@gmail.com"
                className="py-2 px-3 border rounded border-primary focus:outline-none"
              />
              <button type="submit" className={utils.buttonSecondary}>
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className=" flex gap-32">
          <div className="flex gap-2 flex-col mt-4">
            <h3 className="font-[600] text-text text-[20px] capitalize">
              resources
            </h3>
            <ul className="footer font-[400] text-[0.9rem] flex flex-col gap-2">
              <li>
                <p>Free templates</p>
                <span>Free templates</span>
              </li>
              <li>
                <p>Components</p>
                <span>Components</span>
              </li>
              <li>
                <p>Customization</p>
                <span>Customization</span>
              </li>
              <li>
                <p>Theming</p>
                <span>Theming</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-2 flex-col mt-4">
            <h3 className="font-[600] text-text text-[20px] capitalize">
              Explore
            </h3>
            <ul className="footer font-[400] text-[0.9rem] flex flex-col gap-2">
              <li>
                <p>Documentation</p>
                <span>Documentation</span>
              </li>
              <li>
                <p>Store</p>
                <span>Store</span>
              </li>
              <li>
                <p>Blog</p>
                <span>Blog</span>
              </li>
              <li>
                <p>Showcase</p>
                <span>Showcase</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-2 flex-col mt-4">
            <h3 className="font-[600] text-text text-[20px] capitalize">
              Company
            </h3>
            <ul className="footer font-[400] text-[0.9rem] flex flex-col gap-2">
              <li>
                <p>About</p>
                <span>About</span>
              </li>
              <li>
                <p>Support</p>
                <span>Support</span>
              </li>
              <li>
                <p>Privacy</p>
                <span>Privacy</span>
              </li>
              <li>
                <p>policy</p>
                <span>policy</span>
              </li>
              <li>
                <p>Contact us</p>
                <span>Contact us</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[#d3d3d3] flex items-center justify-between mt-12 pt-6">
        <p className="text-text text-[0.9rem]">
          Copyright &copy; 2024 by Asfak Ahmed.
        </p>
        <div className="flex items-center gap-4">
          <a href="">
            <FaGithub className="text-text text-[1.5rem]" />
          </a>

          <a href="">
            <FaFacebook className="text-text text-[1.4rem]" />
          </a>

          <a href="">
            <FaLinkedin className="text-text text-[1.4rem]" />
          </a>

          <a href="">
            <FaXTwitter className="text-text text-[1.4rem]" />
          </a>

          <a href="mailto:asfakahmed680@gmail.com">
            <SiGmail className="text-text text-[1.4rem]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
