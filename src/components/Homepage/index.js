import React, { useState } from "react"
import { TextTag } from "../../utils/Typography/index"
import UserStatus from "../../utils/UserStatus"

import AddSlack from "../../assets/images/icons/addSlack.svg"
import AhmadEmojie from "../../assets/images/icons/ahmadEmojie.svg"
import PlusIcon from "../../assets/images/icons/plusIcon.svg"
import Ahmad from "../../assets/images/ahmad.png"
import BusIcon from "../../assets/images/icons/busIcon.svg"
import MikeIcon from "../../assets/images/icons/mikeIcon.svg"
import LunchIcon from "../../assets/images/icons/lunchIcon.svg"
import MeetingIcon from "../../assets/images/icons/meetingIcon.svg"
import CalendarIcon from "../../assets/images/icons/calendarIcon.svg"

const Index = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggleButton = () => {
    setIsToggled(!isToggled)
  }

  return (
    <div className="max-w-[1440px] mx-auto md:px-[180px]">
      {/* Hero section */}
      <div className="flex flex-col items-center ">
        <h2 className="h2 mb-[29px]">
          Automate your slack
          <TextTag
            as="span"
            text={" status."}
            className="h2"
            color="text-Purple"
          />
        </h2>
        <TextTag
          as="p"
          text={"No more forgetting to set a Slack status when you’re away."}
          className="p-medium !font-normal mb-0"
          color="text-Grey-400"
        />
        <TextTag
          as="p"
          text={
            "Create daily schedules or import from your calendar to keep you teamates updated at all times."
          }
          className="p-medium !font-normal mb-[32px]"
          color="text-Grey-400"
        />
        <button className="border-2 border-solid border-Blue-400 rounded-[3px] flex gap-2 p-2 mb-[60px]">
          <img src={AddSlack} alt="add_Slack_icon" className="mb-0" />
          <p className="p-medium !font-normal mb-0 gap-2">
            Add to <span className="!font-semibold">Slack</span>
          </p>
        </button>
      </div>
      {/* User Status */}
      <div className="md:pt-124px md:pb-[130px] mb-[60px]">
        <UserStatus
          className="max-w-[257px] !pr-8"
          userInfoStyle="!gap-4"
          UserIcon={Ahmad}
          onlineStatus={true}
          OnlineStatusStyle=""
          UserTitle="Ahmad Westervelt"
          statusEmojie={true}
          StatusEmojie={AhmadEmojie}
          UserStatus="Day off"
          menuIcon={false}
        />
      </div>
      {/* Build Schedule */}
      <div className="flex !items-center gap-[116px] mb-[106px]">
        <div className="w-[436px] h-[470px] py-10 px-7 rounded-[24px] border border-solid border-Grey-300">
          <div className="flex mb-10 justify-between">
            <TextTag
              as="h4"
              text={"Here’s your Statuses for today"}
              className={"h4 w-[236px]"}
            />
            <div className="group  relative object-contain cursor-pointer">
              <div className="w-[166px] p-medium1 text-White absolute z-50 top-[-52px] left-[-116.25px] hidden group-hover:inline-block py-[7px] pl-[12px] pr-[10px] transition-opacity duration-300 bg-Black rounded-[4px]">
                {/* <TextTag
                  as="p"
                  text={""}
                  className={"h4 w-[236px]"}
                /> */}
                Create New Status
              </div>
              <img
                src={PlusIcon}
                alt="info"
                className="w-5 h-5 object-contain cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <UserStatus
              className="max-w-[380px]"
              userInfoStyle="!gap-4"
              UserIcon={BusIcon}
              onlineStatus={false}
              OnlineStatusStyle="!w-[24px]"
              UserTitle="Commuting"
              statusEmojie={false}
              StatusEmojie=""
              UserStatus="08:00 AM - 09:00 AM"
              menuIcon={true}
            />
            <UserStatus
              className="max-w-[380px]"
              userInfoStyle="!gap-4"
              UserIcon={MikeIcon}
              onlineStatus={false}
              OnlineStatusStyle="!w-[24px]"
              UserTitle="Weekly Q&A"
              statusEmojie={false}
              StatusEmojie=""
              UserStatus="10:00 AM - 11:30 AM"
              menuIcon={true}
            />
            <UserStatus
              className="max-w-[380px]"
              userInfoStyle="!gap-4"
              UserIcon={LunchIcon}
              onlineStatus={false}
              OnlineStatusStyle="!w-[24px]"
              UserTitle="Lunch time"
              statusEmojie={false}
              StatusEmojie=""
              UserStatus="02:00 PM - 03:00 PM"
              menuIcon={true}
            />
            <UserStatus
              className="max-w-[380px]"
              userInfoStyle="!gap-4"
              UserIcon={MeetingIcon}
              onlineStatus={false}
              OnlineStatusStyle="!w-[24px]"
              UserTitle="In a meeting"
              statusEmojie={false}
              StatusEmojie=""
              UserStatus="04:00 PM - 04:30 PM"
              menuIcon={true}
            />
          </div>
        </div>
        <div className="">
          <TextTag
            as="h3"
            text={"Build out your schedule"}
            className={"h3 mb-4 md:max-w-[252px]"}
            color={""}
          />
          <TextTag
            as="p"
            text={
              "No more forgetting to set a Slack status when you’re away. Create daily schedules or import from your calendar to keep you teamates updated at all times."
            }
            className={"p-medium !font-normal mb-0 md:max-w-[344px]"}
            color={"Grey-400"}
          />
        </div>
      </div>
      {/* Connect Calender */}
      <div className="flex !items-center gap-[116px] mb-[218px]">
        <div className="">
          <TextTag
            as="h3"
            text={"Connect your calendar"}
            className={"h3 mb-4 md:max-w-[252px]"}
            color={""}
          />
          <TextTag
            as="p"
            text={
              "Connect your Google Calendar to automatically start importing your scheudle. You can customize the statuses you want for specific calendar events."
            }
            className={"p-medium !font-normal mb-0 md:max-w-[344px]"}
            color={"Grey-400"}
          />
        </div>
        <div className="w-[436px] h-[475px] py-10 px-7 rounded-[24px] border border-solid border-Grey-300">
          <div className="flex mb-[35px] gap-4">
            <TextTag as="h4" text={"Google Calendar"} className={"h4"} />
            <button className="p-xsmall rounded-[8px] py-[2px] px-2 text-Green-500 bg-Green-400">
              Connected
            </button>
          </div>
          <TextTag
            as="p"
            text={"Today"}
            className="p-large !leading-[40px] !tracking-[-0.36px] mb-3"
          />
          <UserStatus
            className="max-w-[380px] !pr-8 mb-[42px]"
            userInfoStyle="!gap-4"
            UserIcon={CalendarIcon}
            onlineStatus={false}
            OnlineStatusStyle="!w-10"
            UserTitle="Meeting with James"
            statusEmojie={false}
            StatusEmojie=""
            UserStatus="01:00 PM - 01:30 PM"
            menuIcon={false}
          />
          <TextTag
            as="p"
            text={"Tomorrow"}
            className="p-large !leading-[40px] !tracking-[-0.36px] mb-3"
          />
          <UserStatus
            className="max-w-[380px] !pr-8 mb-3"
            userInfoStyle="!gap-4"
            UserIcon={CalendarIcon}
            onlineStatus={false}
            OnlineStatusStyle="!w-10"
            UserTitle="Meeting with James"
            statusEmojie={false}
            StatusEmojie=""
            UserStatus="01:00 PM - 01:30 PM"
            menuIcon={false}
          />
          <UserStatus
            className="max-w-[380px] !pr-8 mb-3"
            userInfoStyle="!gap-4"
            UserIcon={CalendarIcon}
            onlineStatus={false}
            OnlineStatusStyle="!w-10"
            UserTitle="Quick call with Anna"
            statusEmojie={false}
            StatusEmojie=""
            UserStatus="04:15 PM - 04:30 PM"
            menuIcon={false}
          />
          {/* <div className="flex flex-col gap-3">
            <UserStatus
              className="max-w-[380px]"
              userInfoStyle="!gap-4"
              UserIcon={BusIcon}
              onlineStatus={false}
              UserTitle="Commuting"
              statusEmojie={false}
              StatusEmojie=""
              UserStatus="08:00 AM - 09:00 AM"
              menuIcon={true}
            />
            <UserStatus
              className="max-w-[380px]"
              userInfoStyle="!gap-4"
              UserIcon={MikeIcon}
              onlineStatus={false}
              UserTitle="Weekly Q&A"
              statusEmojie={false}
              StatusEmojie=""
              UserStatus="10:00 AM - 11:30 AM"
              menuIcon={true}
            />
            <UserStatus
              className="max-w-[380px]"
              userInfoStyle="!gap-4"
              UserIcon={LunchIcon}
              onlineStatus={false}
              UserTitle="Lunch time"
              statusEmojie={false}
              StatusEmojie=""
              UserStatus="02:00 PM - 03:00 PM"
              menuIcon={true}
            />
            <UserStatus
              className="max-w-[380px]"
              userInfoStyle="!gap-4"
              UserIcon={MeetingIcon}
              onlineStatus={false}
              UserTitle="In a meeting"
              statusEmojie={false}
              StatusEmojie=""
              UserStatus="04:00 PM - 04:30 PM"
              menuIcon={true}
            />
          </div> */}
        </div>
      </div>
      {/* Pricing */}
      <div className="flex flex-col items-center mb-[180px]">
        <TextTag
          as="h3"
          text={"Pricing options"}
          className={"h3 !leading-normal !tracking-[-1.08px] mb-8"}
          color={""}
        />
        <div className="flex items-center">
          <TextTag
            as="p"
            text={"Monthly"}
            className={`p-medium mb-0 ${
              isToggled ? "text-Grey-400" : "text-Black"
            }`}
          />
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                onChange={toggleButton}
              />
              <div className=" w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 ${
                  isToggled ? "translate-x-full bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </label>
          <TextTag
            as="p"
            text={"Annual"}
            className={`p-medium mb-0 ${
              isToggled ? "text-Black" : "text-Grey-400"
            }`}
            color={""}
          />
        </div>
        <div className="flex gap-8"></div>
      </div>
    </div>
  )
}

export default Index
