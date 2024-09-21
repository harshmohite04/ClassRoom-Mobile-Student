import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.size}
      viewBox="0 -960 960 960"
      width={props.size}
      fill="#000"
      {...props}
    >
      <Path d="M522-480L333-669l51-51 240 240-240 240-51-51 189-189z" />
    </Svg>
  )
}

export default SvgComponent
