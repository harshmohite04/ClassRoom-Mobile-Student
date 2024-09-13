import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MessageLight(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.5 18.939c-.247 0-.488-.073-.693-.21L7.2 16.989H3.5a3 3 0 01-3-3v-10a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3h-3.7l-2.609 1.74c-.205.136-.445.21-.691.21zM14 7.989a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill="#F4F3FD"
      />
    </Svg>
  )
}

export default MessageLight
