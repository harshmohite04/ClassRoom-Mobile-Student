import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuLight(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 2H1a1 1 0 010-2h18a1 1 0 110 2zM19 10H1a1 1 0 010-2h18a1 1 0 110 2zM19 18H1a1 1 0 010-2h18a1 1 0 010 2z"
        fill="#000"
      />
    </Svg>
  )
}

export default MenuLight
