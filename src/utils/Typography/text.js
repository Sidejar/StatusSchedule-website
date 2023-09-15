import React from "react"

export const TextTag = ({
  text,
  className,
  color,
  as = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label",
}) => {
  const Tag = as
  return <Tag className={`${className} ${color} `}>{text}</Tag>
}
