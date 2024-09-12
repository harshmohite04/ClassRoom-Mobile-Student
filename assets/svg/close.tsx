import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Close = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#1F1F39"
      d="m2 .586 5 5 5-5A1 1 0 1 1 13.414 2l-5 5 5 5A1.001 1.001 0 1 1 12 13.414l-5-5-5 5A1 1 0 1 1 .586 12l5-5-5-5A1 1 0 0 1 2 .586Z"
    />
  </Svg>
)
export default Close