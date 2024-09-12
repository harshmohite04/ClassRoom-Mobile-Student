import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchLight(props) {
  return (
    <Svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.05}
        d="M26.5 52.989c14.36 0 26-11.64 26-26s-11.64-26-26-26-26 11.64-26 26 11.64 26 26 26z"
        fill="#3D5CFF"
      />
      <Path
        d="M33.878 35.2a.83.83 0 01-.59-.244l-3.06-3.061a7.917 7.917 0 111.178-1.18l3.061 3.062a.833.833 0 01-.589 1.423zM25.25 19.489a6.25 6.25 0 106.25 6.25 6.257 6.257 0 00-6.25-6.25z"
        fill="#3D5CFF"
      />
    </Svg>
  )
}

export default SearchLight
