import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Tick(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M64.5 32.5c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32z"
        fill="#3D5CFF"
      />
      <Path
        d="M18.45 32.774l9.238 9.237L46.55 23.152"
        stroke="#fff"
        strokeWidth={4.401}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Tick
