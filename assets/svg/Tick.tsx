import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <Path
      fill="#3D5CFF"
      d="M64.5 32.5c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.401}
      d="m18.45 32.774 9.238 9.237L46.55 23.152"
    />
  </Svg>
)
export default SvgComponent