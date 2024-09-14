import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Plus(props) {
  const handleSubmit=()=>{
    const [seeTodo,setSeeTodo]=React.useState(false)
  }
  return (
    <Svg
    onPress={handleSubmit}
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 45.402 45.402"
      xmlSpace="preserve"
      stroke="#fff"
      {...props}
    >
      <Path d="M41.267 18.557H26.832V4.134A4.127 4.127 0 0022.707 0a4.126 4.126 0 00-4.124 4.135v14.432H4.141a4.137 4.137 0 00-4.138 4.135 4.143 4.143 0 001.207 2.934 4.122 4.122 0 002.92 1.222h14.453V41.27c0 1.142.453 2.176 1.201 2.922a4.11 4.11 0 002.919 1.211 4.13 4.13 0 004.129-4.133V26.857h14.435c2.283 0 4.134-1.867 4.133-4.15-.001-2.282-1.852-4.15-4.133-4.15z" />
    </Svg>
  )
}

export default Plus
