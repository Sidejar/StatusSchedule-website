import React from "react"
import { TextTag } from "../Typography"

const Index = ({ question, description, link, linkText }) => {
  return (
    <div className="w-full p-8 border border-solid border-Grey-300 rounded-3xl">
      <TextTag
        as="p"
        text={question}
        className={
          "p-large  !font-medium !leading-[32px] !tracking-[-0.36px] mb-2"
        }
        color={""}
      />
      <p className="p-medium !font-normal text-Grey-400 mb-0 inter">
        {description} {link && <a className="text-Misty-500">{linkText}</a>}
      </p>
    </div>
  )
}

export default Index
