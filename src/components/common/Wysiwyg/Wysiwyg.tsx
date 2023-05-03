import React, { useEffect, useRef } from "react"
import { useRouter } from "next/router"
import classNames from  "classnames/bind"

export const Wysiwyg = ({ children }:{children: string}) => {
  const wysiwygRef = useRef(null)
  return <div ref={wysiwygRef} className="content" dangerouslySetInnerHTML={{ __html: children }} />
}
