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
      <Path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380zM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160zm320-352z" />
    </Svg>
  )
}

export default SvgComponent
