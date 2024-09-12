import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeLight(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.2.4l7 5.25a2 2 0 01.8 1.6v9.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-9.5a2 2 0 01.8-1.6L7.8.4a2 2 0 012.4 0z"
        fill="#F4F3FD"
      />
    </Svg>
  )
}

export default HomeLight
