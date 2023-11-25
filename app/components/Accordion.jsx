import React, { useState, useRef } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"

export default function Accordion ({ title, title_icon=null, content='', ExtraCSS4Div='', ExtraCSS4Title='', ExtraCSS4Content='', children })  {
  const [isOpened, setOpened] = useState(false)
  const [height, setHeight] = useState("0px")
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
  }
  return (
    <div onClick={HandleOpening} className= {"border " + ExtraCSS4Div || "border-indigo-400"}>
      <div className= {"p-1 flex justify-between " + ExtraCSS4Title }>
        <div className="px-3 flex gap-3 items-center"><span>{title_icon}</span> <h4 className="font-semibold">{title}</h4></div>
        {isOpened ? <FaChevronDown /> : <FaChevronUp />}
      </div>

      <div
        ref={contentElement}
        style={{ height: height }}
        className={" overflow-hidden transition-all duration-200 " + ExtraCSS4Content||"bg-gray-200"}
      >
        {/* <p className="p-4">{content}</p> */}
        {children}
      </div>
    </div>
  )
}


