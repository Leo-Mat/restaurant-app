import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="w-screen flex justify-between items-center bg-[#0C0C0C] py-4 px-8">
    <div className="flex justify-start items-center">
      <img src={images.gericht} alt="App Logo" className="w-[150px]" />
    </div>

    <ul className="text-white flex-1 flex justify-center items-center p__opensans">
      <li className="mx-4 cursor-pointer hover:text-[#545454]">
        <a href="#home">Home</a>
      </li>
      <li className="mx-4 cursor-pointer hover:text-[#545454]">
        <a href="#about">About</a>
      </li>
      <li className="mx-4 cursor-pointer hover:text-[#545454]">
        <a href="#menu">Menu</a>
      </li>
      <li className="mx-4 cursor-pointer hover:text-[#545454]">
        <a href="#awards">Awards</a>
      </li>
      <li className="mx-4 cursor-pointer hover:text-[#545454] ">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="p__opensans flex justify-end items-center">
      <a
        href="#login"
        className="mx-4  ease-linear hover:border-b border-solid border-[var(--color-golden)] duration-[0.5s]">
        Log In / Register
      </a>
      <div className=" w-[1px] h-[30px] bg-[var(--color-gray)]"></div>
      <a
        href="/"
        className="mx-4  ease-linear hover:border-b border-solid border-[var(--color-golden)] duration-[0.5s]">
        Book Table
      </a>
    </div>
  </nav>
);

export default Navbar;
