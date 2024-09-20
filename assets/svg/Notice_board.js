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
      <Path d="M192-216v-72h48v-240q0-87 53.5-153T432-763v-53q0-20 14-34t34-14q20 0 34 14t14 34v53q85 16 138.5 82T720-528v240h48v72H192zm288-276zm-.21 396Q450-96 429-117.15T408-168h144q0 30-21.21 51t-51 21zM312-288h336v-240q0-70-49-119t-119-49q-70 0-119 49t-49 119v240z" />
    </Svg>
  )
}

export default SvgComponent
