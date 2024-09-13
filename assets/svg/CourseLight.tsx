import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CourseLight(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.5 20.46h-12a3 3 0 01-3-3v-14a3 3 0 013-3h11a2 2 0 012 2v12.99c0 .164-.038.326-.113.472l-.545 1.091a1.008 1.008 0 000 .895l.544 1.087a1 1 0 01-.886 1.465zm-12-4a1 1 0 000 2h10.407a3.01 3.01 0 010-2H3.5zm3-11a1 1 0 000 2h4a1 1 0 100-2h-4z"
        fill="#F4F3FD"
      />
    </Svg>
  )
}

export default CourseLight
