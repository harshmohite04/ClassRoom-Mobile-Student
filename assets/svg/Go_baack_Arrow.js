import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.size}
      viewBox="0 -960 960 960"
      width={props.size}
      fill="#e8eaed"
      {...props}
    >
      <Path d="M330-444l201 201-51 51-288-288 288-288 51 51-201 201h438v72H330z" />
    </Svg>
  )
}

export default SvgComponent
