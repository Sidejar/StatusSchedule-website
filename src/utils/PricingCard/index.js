import React from "react"
import { TextTag } from "../Typography"

import RightArrowIcon from "../../assets/images/icons/rightArrowIcon.svg"
import { Link } from "gatsby"

const Index = ({
  className,
  title,
  duration,
  price,
  description1,
  description2,
}) => {
  return (
    <div
      className={`md:w-[344px] w-full h-[543px] p-[44px] rounded-3xl border hover:border-none border-solid border-Grey-300 hover:bg-Purple hover:text-White transition-all ease-in-out duration-300 md:mt-[42px] md:hover:mt-0 mt-0 hover:bg-[url('../../assets/images/icons/spiderPattern.svg')] bg-cover bg-center ${className}`}
    >
      <div className="flex flex-col items-center">
        <TextTag
          as="h4"
          text={title}
          className={
            "h4 !font-medium !leading-normal !tracking-[-0.72px] text-ceter mb-12"
          }
          color={""}
        />
        <div className="flex items-start justify-center w-full">
          <TextTag
            as="h4"
            text={"$"}
            className={"h4 !leading-[24px] !tracking-[-0.72px]"}
            color={"text-Grey-300"}
          />
          <div className="mt-5 flex flex-col items-center">
            <TextTag as="h1" text={price} className={"h1 mb-6"} color={""} />
            <TextTag
              as="p"
              text={duration}
              className={
                "p-large !font-normal !leading-[28px] !tracking-[-0.54px] mb-[42px]"
              }
              color={""}
            />
          </div>
        </div>
        <div className="bg-Grey-300 hover:bg-Blue-400 h-[1px] w-full mb-6"></div>
      </div>
      <div className="flex flex-col justify-between min-h-[166px]">
        <div>
          <TextTag
            as="p"
            text={description1}
            className={
              "p-medium !font-normal !tracking-[-0.48px] mb-4 !items-start inter"
            }
            color={""}
          />
          <TextTag
            as="p"
            text={description2}
            className={"p-medium !font-normal !tracking-[-0.48px] inter"}
            color={""}
          />
        </div>
        <div className="py-[14px] pr-[10px] pl-5 bg-White rounded-xl flex items-center justify-between mx-auto w-[173px] border hover:border-none border-solid border-Grey-300">
          <TextTag
            as="p"
            text={"Get Started"}
            className={"p-medium !leading-[24px] mb-0 inter"}
            color={"text-Purple"}
          />
          <Link to={"#"}>
            <img
              src={RightArrowIcon}
              alt="rightArrowIcon"
              className="p-[6px] border border-solid border-Purple rounded-full mb-0"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index
