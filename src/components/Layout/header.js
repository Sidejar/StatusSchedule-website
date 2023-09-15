import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="max-w-[1440px] mx-auto md:px-[180px] pt-[32px] md:mb-[140px] flex justify-between items-center">
    <Link to={"#"}>
      <img src={siteTitle} alt="site title" />
    </Link>
    <ul className="flex justify-between items-center gap-[24px]">
      <li>
        <a id="" className="no-underline p-medium !font-medium text-Black">
          Pricing
        </a>
      </li>
      <li>
        <a className="no-underline p-medium !font-medium text-Black">FAQ</a>
      </li>
      <li>
        <a className="no-underline p-medium !font-medium text-Black">
          Contact Us
        </a>
      </li>
    </ul>
  </header>
)

export default Header
