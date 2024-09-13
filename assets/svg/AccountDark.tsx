import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AccountDark(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.5 20.989h-14a2 2 0 01-2-2v-1a5.006 5.006 0 015-5h8a5.006 5.006 0 015 5v1a2 2 0 01-2 2zm-7-10a5 5 0 115-5 5.006 5.006 0 01-5 5z"
        fill="#3D5CFF"
      />
    </Svg>
  )
}

export default AccountDark
