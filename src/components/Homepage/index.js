import React, { useState } from "react"
import { TextTag } from "../../utils/Typography/index"
import { Link } from "gatsby"
import { Formik } from "formik"
import UserStatus from "../../utils/UserStatus"
import PringOption from ".././../utils/PricingCard"
import FAQcard from "../../utils/FAQcard"

import Ahmad from "../../assets/images/ahmad.png"
import James from "../../assets/images/james.png"
import Jaydon from "../../assets/images/jaydon.png"
import Emerson from "../../assets/images/emerson.png"
import Alena from "../../assets/images/alena.png"
import JamesCurtis from "../../assets/images/jamesCurtis.png"
import Abram from "../../assets/images/abram.png"
import Martin from "../../assets/images/martin.png"
import CheyenneBator from "../../assets/images/cheyenneBator.png"
import CheyenneAminoff from "../../assets/images/cheyenneAminoff.png"
import DavisLevin from "../../assets/images/davisLevin.png"
import Tatiana from "../../assets/images/tatiana.png"
import Cristofer from "../../assets/images/cristofer.png"
import CrisTalan from "../../assets/images/crisTalan.png"
import Randy from "../../assets/images/randy.png"
import Carter from "../../assets/images/carter.png"

import AddSlack from "../../assets/images/icons/addSlack.svg"
import AhmadEmojie from "../../assets/images/icons/ahmadEmojie.svg"
import Eating from "../../assets/images/icons/eating.svg"
import Bus from "../../assets/images/icons/bus.svg"
import Yoga from "../../assets/images/icons/yoga.svg"
import NapIcon from "../../assets/images/icons/napIcon.svg"
import Mike from "../../assets/images/icons/mike.svg"
import TreeIcon from "../../assets/images/icons/treeIcon.svg"
import SwimmingIcon from "../../assets/images/icons/swimming.svg"
import ShoppingIcon from "../../assets/images/icons/shoppingIcon.svg"
import BowlingIcon from "../../assets/images/icons/bowling.svg"
import RunningIcon from "../../assets/images/icons/runningIcon.svg"
import MailIcon from "../../assets/images/icons/mailIcon.svg"
import CelebrationIcon from "../../assets/images/icons/celebrationIcon.svg"

import HouseIcon from "../../assets/images/icons/houseIcon.svg"
import PlusIcon from "../../assets/images/icons/plusIcon.svg"
import BusIcon from "../../assets/images/icons/busIcon.svg"
import MikeIcon from "../../assets/images/icons/mikeIcon.svg"
import LunchIcon from "../../assets/images/icons/lunchIcon.svg"
import MeetingIcon from "../../assets/images/icons/meetingIcon.svg"
import CalendarIcon from "../../assets/images/icons/calendarIcon.svg"
import LineVector1 from "../../assets/images/icons/lineVector1.svg"
import siteTitle from "../../assets/images/icons/siteTitle.svg"

const userData = [
  {
    userIcon: Ahmad,
    userTitle: "Ahmad Westervelt",
    status_Emojie: AhmadEmojie,
    userStatus: "Day off",
  },
  {
    userIcon: James,
    userTitle: "James Septimus",
    status_Emojie: Eating,
    userStatus: "Eating",
  },
  {
    userIcon: Jaydon,
    userTitle: "Jaydon Bator",
    status_Emojie: Bus,
    userStatus: "Commuting",
  },
  {
    userIcon: Emerson,
    userTitle: "Emerson Press",
    status_Emojie: Yoga,
    userStatus: "Daily Yoga",
  },
  {
    userIcon: Alena,
    userTitle: "Alena Lipshutz",
    status_Emojie: MeetingIcon,
    userStatus: "In a meeting",
  },
  {
    userIcon: JamesCurtis,
    userTitle: "James Curtis",
    status_Emojie: NapIcon,
    userStatus: "Nap time",
  },
  {
    userIcon: Abram,
    userTitle: "Abram Bothman",
    status_Emojie: Mike,
    userStatus: "Weekly Q&A",
  },
  {
    userIcon: Martin,
    userTitle: "Martin Torff",
    status_Emojie: TreeIcon,
    userStatus: "Vacation",
  },
  {
    userIcon: CheyenneBator,
    userTitle: "Cheyenne Bator",
    status_Emojie: SwimmingIcon,
    userStatus: "Pool time",
  },
  {
    userIcon: CheyenneAminoff,
    userTitle: "Cheyenne Aminoff",
    status_Emojie: ShoppingIcon,
    userStatus: "Shopping",
  },
  {
    userIcon: DavisLevin,
    userTitle: "Davis Levin",
    status_Emojie: BowlingIcon,
    userStatus: "Friday Bowling",
  },
  {
    userIcon: Tatiana,
    userTitle: "Tatiana Workman",
    status_Emojie: HouseIcon,
    userStatus: "Doing housework",
  },
  {
    userIcon: Cristofer,
    userTitle: "Cristofer George",
    status_Emojie: RunningIcon,
    userStatus: "Running",
  },
  {
    userIcon: CrisTalan,
    userTitle: "CrisTalan Saris",
    status_Emojie: MikeIcon,
    userStatus: "Weekly Q&A",
  },
  {
    userIcon: Randy,
    userTitle: "Randy Vetrovs",
    status_Emojie: MailIcon,
    userStatus: "Daily mail",
  },
  {
    userIcon: Carter,
    userTitle: "Carter Press",
    status_Emojie: CelebrationIcon,
    userStatus: "Birthday",
  },
]

const Index = () => {
  const [showUserStatus, setShowUserStatus] = useState(false)

  const toggleUserStatus = () => {
    setShowUserStatus(!showUserStatus)
  }
  const [isToggled, setIsToggled] = useState(false)

  const toggleButton = () => {
    setIsToggled(!isToggled)
  }

  return (
    <div>
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
          {userData?.map((data, index) => (
            <div key={index}>
              <UserStatus
                className="max-w-[257px] !pr-8"
                userInfoStyle="!gap-4"
                UserIcon={data.userIcon}
                onlineStatus={true}
                OnlineStatusStyle=""
                UserTitle={data.userTitle}
                statusEmojie={true}
                StatusEmojie={data.status_Emojie}
                UserStatus={data.userStatus}
                menuIcon={false}
              />
            </div>
          ))}
        </div>
        {/* Build Schedule */}
        <div className="flex !items-center gap-[116px] mb-[106px]">
          <div className="w-[436px] max-h-[470px] py-10 px-7 rounded-[24px] border border-solid border-Grey-300">
            <div className="flex mb-10 justify-between">
              <TextTag
                as="h4"
                text={"Here’s your Statuses for today"}
                className={"h4 w-[236px]"}
              />
              <div
                className="group  relative object-contain cursor-pointer"
                onClick={toggleUserStatus}
              >
                <div className="w-[166px] p-medium1 text-White absolute z-50 top-[-52px] left-[-116.25px] hidden group-hover:inline-block py-[7px] pl-[12px] pr-[10px] transition-opacity duration-300 bg-Black rounded-[4px]">
                  Create New Status
                </div>
                <img
                  src={PlusIcon}
                  alt="info"
                  className="w-5 h-5 object-contain cursor-pointer"
                />
              </div>
            </div>
            {showUserStatus && (
              <div className="flex flex-col gap-3 ">
                <UserStatus
                  className="max-w-[380px] bg-White"
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
                  className="max-w-[380px]  bg-White"
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
                  className="max-w-[380px]  bg-White"
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
                  className="max-w-[380px]  bg-White"
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
            )}
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
              className="max-w-[380px] !pr-8 mb-[42px]  bg-White"
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
              className="max-w-[380px] !pr-8 mb-3 bg-White"
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
              className="max-w-[380px] !pr-8 mb-3 bg-White"
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
          <div className="flex items-center gap-8 mb-16">
            <TextTag
              as="p"
              text={"Monthly"}
              className={`p-medium mb-0 ${
                isToggled ? "text-Grey-400 !font-normal" : "text-Black"
              }`}
            />
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={toggleButton}
                />
                <div className="w-16 h-8 bg-PrimaryPurple rounded-full shadow-inner"></div>
                <div
                  className={`toggle__dot absolute w-6 h-6 bg-Purple rounded-full shadow inset-y-0 top-1 left-[10px] ${
                    isToggled ? "translate-x-full bg-Purple" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            </label>
            <TextTag
              as="p"
              text={"Annual"}
              className={`p-medium mb-0 ${
                isToggled ? "text-Black" : "text-Grey-400 !font-normal"
              }`}
              color={""}
            />
          </div>
          {isToggled ? (
            <div className="flex gap-6">
              <PringOption
                className=""
                title="Free Plan"
                duration="Per year"
                price="0"
                description1="1 active autostatus"
                description2=""
              />
              <PringOption
                className=""
                title="Pro Plan"
                duration="Per year"
                price="29"
                description1="Unlimited autostatuses"
                description2="Google Calendar Integration"
              />
              <PringOption
                className=""
                title="Business Plan"
                duration="Per year"
                price="499"
                description1="Pro plans for your entire Slack workspace with unlimited users "
                description2=""
              />
            </div>
          ) : (
            <div className="flex gap-6">
              <PringOption
                className=""
                title="Free Plan"
                duration="Per Month"
                price="0"
                description1="1 active autostatus"
                description2=""
              />
              <PringOption
                className=""
                title="Pro Plan"
                duration="Per Month"
                price="3.99"
                description1="Unlimited autostatuses"
                description2="Google Calendar Integration"
              />
              <PringOption
                className=""
                title="Business Plan"
                duration="Per Month"
                price="49"
                description1="Pro plans for your entire Slack workspace with unlimited users "
                description2=""
              />
            </div>
          )}
        </div>
        {/* FAQ */}
        <div className="mb-[60px] px-[92px]">
          <TextTag
            as="h3"
            text={"FAQ"}
            className={
              "h3 !leading-normal !tracking-[-1.08px] text-center mb-[60px]"
            }
            color={""}
          />
          <div className="flex flex-col gap-4">
            <FAQcard
              question='What is an "active autostatus"?'
              description='If you have a status set up that is automatically updating, then that is considered an "active autostatus".'
              link={false}
              linkText=""
            />
            <FAQcard
              question="Is this a subscription?"
              description="Yes, SlackedStatus is a subscription-based Slack app. You'll be charged on a monthly or yearly basis depending on your plan. We will also offer a free plan as well."
              link={false}
              linkText=""
            />
            <FAQcard
              question="How can I provide this to my team?"
              description="A Business Plan will allow you to offer Slackedstatus to your entire Slack Workspace, no matter how many users. Every member of your team will enjoy a Pro Plan of Slackedstatus."
              link={false}
              linkText=""
            />
            <FAQcard
              question="How can i connect my calendar?"
              description="First, you'll need a Pro Plan to utilize the calendar integrations. You can integrate your calendar directly inside of the Slack app. For more information on how to set it up, check out"
              link={true}
              linkText="this article."
            />
          </div>
        </div>
        {/* Start making Slack */}
        <div className="py-[296px] flex justify-center">
          <div className="max-w-[576px] flex flex-col items-center">
            <img src={LineVector1} alt="lineImg" className="mb-[41.9px]" />
            <TextTag
              as="h3"
              text={"Start making slack work for you"}
              className={"h3 !leading-[52px] mb-8"}
              color={""}
            />
            <button className="border-2 border-solid border-Blue-400 rounded-[3px] flex gap-2 p-2 mb-[60px]">
              <img src={AddSlack} alt="add_Slack_icon" className="mb-0" />
              <p className="p-medium !font-normal mb-0 gap-2">
                Add to <span className="!font-semibold">Slack</span>
              </p>
            </button>
          </div>
        </div>
        {/* Contact Us */}
      </div>
      <div className="bg-Black pt-16 px-[180px] pb-[90px]">
        <div className="flex justify-between">
          <Link to={"#"}>
            <img src={siteTitle} alt="site title" />
          </Link>
          <ul className="flex justify-between items-center gap-[24px]">
            <li>
              <a
                id="#"
                className="no-underline p-medium !font-medium text-White"
              >
                Pricing
              </a>
            </li>
            <li>
              <a className="no-underline p-medium !font-medium text-White">
                FAQ
              </a>
            </li>
            <li>
              <a className="no-underline p-medium !font-medium text-White">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <TextTag
          as="h3"
          text={"Contatct us"}
          className={"h3 !leading-[52px] text-center mb-8"}
          color={"text-White"}
        />
        <Formik
          initialValues={{ email: "", text: "" }}
          validate={values => {
            const errors = {}
            if (!values.email) {
              errors.email = "Required"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address"
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 items-center"
            >
              <input
                type="text"
                name="text"
                placeholder="Your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
                className="p-[14px] border border-solid border-Grey-500 rounded-xl w-[344px] p-medium1 !font-semibold bg-transparent text-White"
              />
              {errors.text && touched.text && errors.text}
              <input
                type="email"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="p-[14px] border border-solid border-Grey-500 rounded-xl w-[344px] p-medium1 !font-semibold bg-transparent"
              />
              {errors.email && touched.email && errors.email}
              <textarea
                placeholder="Your Message"
                className="min-h-[144px] p-[14px] border border-solid border-Grey-500 rounded-xl w-[344px] p-medium1 !font-semibold bg-transparent text-White"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[344px] bg-Purple text-center py-[14px] rounded-xl border-none p-medium1 text-White"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Index
