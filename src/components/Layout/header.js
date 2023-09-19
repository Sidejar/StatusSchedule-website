// src/components/Header.js
import React, { useState } from "react"
import { Link } from "gatsby"
import MenuIcon from "../../assets/images/icons/menu.svg"
import CrossIcon from "../../assets/images/icons/crossIcon.svg"
import AddSlack from "../../assets/images/icons/addSlack.svg"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="max-w-[1440px] mx-auto lg:px-[180px] md:px-[120px] sm:px-[80px] px-[16px] pt-[32px] md:mb-[140px] mb-[60px] md:flex justify-between items-center">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={siteTitle} alt="site title" className="mb-0" />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-Black hover:text-Gray inter focus:outline-none focus:text-Gray md:hidden"
        >
          {!isMenuOpen ? (
            <img src={MenuIcon} alt="menuIcon" className="mb-0" />
          ) : (
            <img src={CrossIcon} alt="crossIcon" className="mb-0" />
          )}
        </button>
      </div>
      <div className={isMenuOpen ? "absolute bg-White w-full" : ""}>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex md:flex-row flex-col md:justify-between md:items-center md:gap-[24px] gap-[52px] mb-0 md:mt-0 mt-[57px] ml-0 h-full`}
        >
          <li className="mb-0">
            <a
              href="#"
              className="no-underline p-medium !font-medium text-Black inter"
            >
              Pricing
            </a>
          </li>
          <li className="mb-0">
            <a
              href="#"
              className="no-underline p-medium !font-medium text-Black inter"
            >
              FAQ
            </a>
          </li>
          <li className="mb-0">
            <a
              href="#"
              className="no-underline p-medium !font-medium text-Black inter"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {isMenuOpen && (
          <button className="border-2 border-solid border-Blue-400 rounded-[3px] flex gap-2 p-2 mb-[60px] mt-[42px]">
            <img src={AddSlack} alt="add_Slack_icon" className="mb-0" />
            <p className="p-medium !font-normal mb-0 gap-2">
              Add to <span className="!font-semibold">Slack</span>
            </p>
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
