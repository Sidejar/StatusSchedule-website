import React from "react"
import { Link } from "gatsby"
import { TextTag } from "../Typography"

import MenuIcon from "../../assets/images/icons/menuIcon.svg"
import OnlineStatus from "../../assets/images/icons/onlineStatusIcon.svg"

const Index = ({
  className,
  userInfoStyle,
  UserIcon,
  onlineStatus,
  OnlineStatusStyle,
  UserTitle,
  statusEmojie,
  StatusEmojie,
  UserStatus,
  menuIcon,
}) => {
  return (
    <div
      className={`w-full flex justify-between items-center py-4 pr-7 pl-4 shadow-small-shadow rounded-2xl ${className}`}
    >
      <div className={`flex items-start gap-2 ${userInfoStyle}`}>
        <div className={`w-12 ${OnlineStatusStyle}`}>
          <img src={UserIcon} alt="userIcon" className="mb-0 absolute" />
          {onlineStatus && (
            <img
              src={OnlineStatus}
              alt="OnlineStatusIcon"
              className="relative top-[34px] left-[34px] rounded-full pt-[2px] pl-[2px] m-0"
            />
          )}
        </div>
        <div>
          <TextTag
            as="p"
            text={UserTitle}
            className="p-medium1 mb-2"
            color=""
          />
          <div className="flex gap-2">
            {statusEmojie && (
              <div>
                <img src={StatusEmojie} alt="StatusEmojie" className="mb-0" />
              </div>
            )}
            <TextTag
              as="p"
              text={UserStatus}
              className="p-small mb-0"
              color="text-Grey-400"
            />
          </div>
        </div>
      </div>
      {menuIcon && (
        <Link to={"#"}>
          <img src={MenuIcon} alt="icon" className="!mb-0" />
        </Link>
      )}
    </div>
  )
}

export default Index
