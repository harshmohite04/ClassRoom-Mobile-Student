import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Examination(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.size}
      viewBox="0 -960 960 960"
      width={props.size}
      fill="#FFF"
      {...props}
    >
      <Path d="M362-413.33h203.33V-480H362v66.67zm0-100h370V-580H362v66.67zm0-100h370V-680H362v66.67zm-82 400q-27 0-46.83-19.84Q213.33-253 213.33-280v-533.33q0-27 19.84-46.84Q253-880 280-880h533.33q27 0 46.84 19.83Q880-840.33 880-813.33V-280q0 27-19.83 46.83-19.84 19.84-46.84 19.84H280zm0-66.67h533.33v-533.33H280V-280zM146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-600h66.67v600h600V-80h-600zM280-813.33V-280v-533.33z" />
    </Svg>
  )
}

export default Examination
