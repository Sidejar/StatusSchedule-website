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

import StatusUnderline from "../../assets/images/icons/statusUnderline.svg"
import HouseIcon from "../../assets/images/icons/houseIcon.svg"
import PlusIcon from "../../assets/images/icons/plusIcon.svg"
import BusIcon from "../../assets/images/icons/busIcon.svg"
import MikeIcon from "../../assets/images/icons/mikeIcon.svg"
import LunchIcon from "../../assets/images/icons/lunchIcon.svg"
import MeetingIcon from "../../assets/images/icons/meetingIcon.svg"
import CalendarIcon from "../../assets/images/icons/calendarIcon.svg"
import LineVector1 from "../../assets/images/icons/lineVector1.svg"
import siteTitle from "../../assets/images/icons/siteTitle.svg"
import UserStatusVector from "../../assets/images/icons/userStatusVector.svg"
import ScheduleVector from "../../assets/images/icons/scheduleVector.svg"
import CalendarVector from "../../assets/images/icons/calendarVector.svg"

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
  const userStatus = {
    backgroundImage: `url("../../assets/images/icons/userStatusVector.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
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
      <div className="max-w-[1440px] mx-auto lg:px-[180px] md:px-[120px] sm:px-[80px] px-[16px]">
        {/* Hero section */}
        <div className="flex flex-col items-center text-center">
          <div className="md:h2 h2-res mb-[29px] flex items-baseline justify-center flex-wrap">
            <div>Automate your slack</div>
            <span className="flex flex-col items-baseline">
              <h2 className="ml-3 h2 text-Purple"> status.</h2>
              <img
                src={StatusUnderline}
                alt="StatusUnderline"
                className="mb-0"
              />
            </span>
          </div>
          <TextTag
            as="p"
            text={"No more forgetting to set a Slack status when you’re away."}
            className="p-medium !font-normal mb-0 inter"
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
        <div className="md:pt-124px md:mb-[203px] md:mt-[60px] mb-[166px] flex flex-wrap gap-[33px] justify-around bg-[url('../../assets/images/icons/userStatusVector.svg')] bg-cover bg-center">
          {userData?.map((data, index) => (
            <div key={index}>
              <UserStatus
                className="max-w-[257px] !pr-8 bg-White"
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
        <div className="flex !items-center md:flex-nowrap flex-wrap lg:gap-[116px] md:gap-[50px] gap-[88px] md:mb-[106px] mb-[135px]">
          <div className="md:w-[436px] w-full max-h-[470px] pt-10 px-7 rounded-[24px] border border-solid border-Grey-300 relative">
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
                <div className="w-[166px] p-medium1 text-White absolute z-50 top-[-52px] left-[-116.25px] hidden group-hover:inline-block py-[7px] pl-[12px] pr-[10px] transition-opacity duration-300 bg-Black rounded-[4px] inter">
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
                  className="w-full bg-White"
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
                  className="w-full  bg-White"
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
                  className="w-full  bg-White"
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
                  className="w-full  bg-White"
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
            <img
              src={ScheduleVector}
              alt="ScheduleVector"
              className="absolute md:w-[106px] w-[115px] md:h-[96px] h-12 md:top-[25%] top-[-22px] md:left-[-92px] left-[-36px]"
            />
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
        <div className="flex !items-center md:flex-nowrap flex-wrap-reverse md:gap-[116px] xsm:gap-[80px] gap-[180px] md:mb-[218px] mb-[180px]">
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
          <div className="md:w-[436px] w-full h-[475px] py-10 md:px-7 pr-[19px] pl-[28px] rounded-[24px] border border-solid border-Grey-300 relative">
            <div className="flex flex-wrap mb-[35px] gap-4">
              <TextTag as="h4" text={"Google Calendar"} className={"h4"} />
              <button className="p-xsmall rounded-[8px] py-[2px] px-2 text-Green-500 bg-Green-400 inter">
                Connected
              </button>
            </div>
            <TextTag
              as="p"
              text={"Today"}
              className="p-large !leading-[40px] !tracking-[-0.36px] mb-3"
            />
            <UserStatus
              className="w-full !pr-8 mb-[42px]  bg-White"
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
              className="w-full !pr-8 mb-3 bg-White"
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
              className="w-full !pr-8 mb-3 bg-White"
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
            <img
              src={CalendarVector}
              alt="CalendarVector"
              className="absolute md:w-[106px] w-[115px] md:h-[96px] h-12 md:top-[73px] top-[-22px] md:right-[-63px] right-[42%]"
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
          <div className="flex items-center gap-8 md:mb-16 mb-[60px]">
            <TextTag
              as="p"
              text={"Monthly"}
              className={`p-medium mb-0 inter ${
                isToggled ? "text-Grey-400 !font-normal " : "text-Black"
              }`}
            />
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={toggleButton}
                />
                <div
                  className={
                    isToggled
                      ? "w-16 h-8 bg-PrimaryPurple rounded-full "
                      : "w-16 h-8 bg-White rounded-full border border-solid border-Grey-300"
                  }
                ></div>
                <div
                  className={`toggle__dot absolute w-6 h-6 bg-Purple rounded-full shadow inset-y-0 top-1 left-[8px] ${
                    isToggled ? "translate-x-full bg-Purple" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            </label>
            <TextTag
              as="p"
              text={"Annual"}
              className={`p-medium mb-0 inter ${
                isToggled ? "text-Black" : "text-Grey-400 !font-normal"
              }`}
              color={""}
            />
          </div>
          <div className="flex gap-6 flex-wrap">
            <PringOption
              className=""
              title="Free Plan"
              duration={isToggled ? "Per year" : "Per month"}
              price="0"
              description1="1 active autostatus"
              description2=""
            />
            <PringOption
              className=""
              title="Pro Plan"
              duration={isToggled ? "Per year" : "Per month"}
              price={isToggled ? "29" : "3.99"}
              description1="Unlimited autostatuses"
              description2="Google Calendar Integration"
            />
            <PringOption
              className=""
              title="Business Plan"
              duration={isToggled ? "Per year" : "Per month"}
              price={isToggled ? "499" : "49"}
              description1="Pro plans for your entire Slack workspace with unlimited users "
              description2=""
            />
          </div>
        </div>
        {/* FAQ */}
        <div className="mb-[60px] xl:px-[92px]">
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
        <div className="md:py-[296px] py-[129px] flex justify-center">
          <div className="max-w-[576px] flex flex-col items-center">
            <img src={LineVector1} alt="lineImg" className="mb-[41.9px]" />
            <TextTag
              as="h3"
              text={"Start making slack work for you"}
              className={"h3 !leading-[52px] mb-8 text-center"}
              color={""}
            />
            <button className="border-2 border-solid border-Blue-400 rounded-[3px] flex gap-2 p-2 md:mb-[60px]">
              <img src={AddSlack} alt="add_Slack_icon" className="mb-0" />
              <p className="p-medium !font-normal mb-0 gap-2">
                Add to <span className="!font-semibold">Slack</span>
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className="bg-Black pt-16 lg:px-[180px] md:px-[150px] pb-[90px]">
        <div className="flex md:justify-between justify-center items-center">
          <Link to={"#"}>
            <img src={siteTitle} alt="site title" />
          </Link>
          <ul className="md:flex justify-between items-center md:gap-[24px] hidden">
            <li>
              <a
                id="#"
                className="no-underline p-medium !font-medium text-White inter"
              >
                Pricing
              </a>
            </li>
            <li>
              <a className="no-underline p-medium !font-medium text-White inter">
                FAQ
              </a>
            </li>
            <li>
              <a className="no-underline p-medium !font-medium text-White inter">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <TextTag
          as="h3"
          text={"Contatct us"}
          className={
            "h3 !leading-[52px] text-center md:mb-8 mb-[42px] md:mt-0 mt-[88px]"
          }
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
              className="flex flex-col gap-4 items-center md:px-0 px-4"
            >
              <input
                type="text"
                name="text"
                placeholder="Your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
                className="inter p-[14px] border border-solid border-Grey-500 rounded-xl md:w-[344px] w-full p-medium1 !font-semibold bg-transparent text-White"
              />
              {errors.text && touched.text && errors.text}
              <input
                type="email"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="inter p-[14px] border border-solid border-Grey-500 rounded-xl md:w-[344px] w-full p-medium1 !font-semibold bg-transparent"
              />
              {errors.email && touched.email && errors.email}
              <textarea
                placeholder="Your Message"
                className="inter min-h-[144px] p-[14px] border border-solid border-Grey-500 rounded-xl md:w-[344px] w-full p-medium1 !font-semibold bg-transparent text-White"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inter md:w-[344px] w-full bg-Purple text-center py-[14px] rounded-xl border-none p-medium1 text-White"
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
