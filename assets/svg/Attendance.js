import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.size}
      viewBox="0 -960 960 960"
      width={props.size}
      fill="#FFF"
      {...props}
    >
      <Path d="M620-160.33L456.67-323.67 504-371l116 116 234.67-234.67L902-442.33l-282 282zm220-408.34h-66.67v-204.66h-66.66v100H253.33v-100h-66.66v586.66H434V-120H186.67q-28.34 0-47.5-19.17Q120-158.33 120-186.67v-586.66q0-28.34 19.17-47.5Q158.33-840 186.67-840H377q8.33-35 37.33-57.5T480-920q37.33 0 66.17 22.5Q575-875 583.33-840h190q28.34 0 47.5 19.17Q840-801.67 840-773.33v204.66zM480-773.33q17 0 28.5-11.5t11.5-28.5q0-17-11.5-28.5t-28.5-11.5q-17 0-28.5 11.5t-11.5 28.5q0 17 11.5 28.5t28.5 11.5z" />
    </Svg>
  )
}

export default SvgComponent