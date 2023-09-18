import React from "react"
import { Link } from "gatsby"

import LinkedIn from "../../assets/images/icons/linkedIn.svg"
import Facebook from "../../assets/images/icons/facebook.svg"
import Twitter from "../../assets/images/icons/twitter.svg"
import Instagram from "../../assets/images/icons/instagram.svg"
import Heart from "../../assets/images/icons/heart.svg"
import Pin from "../../assets/images/icons/pin.svg"

const Footer = () => {
  return (
    <div className="bg-Black pt-[61px] px-[180px] pb-[90px] flex items-center justify-between">
      <span className="p-medium !font-normal text-White">
        Copyright © {new Date().getFullYear()} Slackedstatus
      </span>
      <div className="flex gap-6 justify-between ">
        <Link to={"linkedIn.com"}>
          <img src={LinkedIn} alt="LinkedIn-logo" className="mb-0" />
        </Link>
        <Link to={"facebook.com"}>
          <img src={Facebook} alt="Facebook-logo" className="mb-0" />
        </Link>
        <Link to={"twitter.com"}>
          <img src={Twitter} alt="Twitter-logo" className="mb-0" />
        </Link>
        <Link to={"instagram.com"}>
          <img src={Instagram} alt="Instagram-logo" className="mb-0" />
        </Link>
      </div>
      <span className="p-samll text-White flex items-center ">
        built with <img src={Heart} alt="heart's-emojie" className="mb-0" /> by
        <img src={Pin} alt="pin-logo" className="mb-0" /> SideJar
      </span>
    </div>
  )
}

export default Footer
