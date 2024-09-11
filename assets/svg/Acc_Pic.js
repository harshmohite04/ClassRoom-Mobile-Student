import * as React from "react"
import Svg, { Path, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 64 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32z"
        fill="#EAEAFF"
      />
      <Path d="M32 64a32 32 0 110-64 32 32 0 010 64z" fill="#FFEBF0" />
      <Path
        d="M35.91 24.906a2.986 2.986 0 011.826-.286c.586.042 1.15.24 1.634.571M30.357 24.906a2.986 2.986 0 00-1.824-.286 3.313 3.313 0 00-1.635.571"
        fill="#fff"
      />
      <Path
        d="M48.068 71.64l4.681 12.5A49.263 49.263 0 0064 76.797c-.825-2.412-1.539-4.237-1.539-4.237l-14.393-.92zM11.3 84.383l4.886-13.076-14.393.92c-.016.016-.873 2.222-1.793 4.98a48.899 48.899 0 0011.3 7.176z"
        fill="#DA5742"
      />
      <Path
        d="M48.068 71.64l1.62 4.253 14.28.889c-.777-2.242-1.507-4.222-1.507-4.222l-14.393-.92zM16.33 70.847L14.705 75.1l-14.5 1.412c.778-2.221 1.73-4.745 1.73-4.745l14.393-.92z"
        fill="#C43D28"
      />
      <Path
        d="M15.726 52.058C9.442 54.914 2.556 63.737.016 74.084h11.235l-1.856 9.394a49.034 49.034 0 0022.36 5.364 48.9 48.9 0 0022.438-5.411l-1.968-8.141 11.362-1.016c-.016 0-2.634-14.6-14.615-21.5-9.6-5.524-24.39-4.699-33.246-.716z"
        fill="#3D5CFF"
      />
      <Path
        d="M14.315 63.436L7.634 74.084l3.793-.016 2.888-10.632zM52.226 75.29l3.38-.286-7.538-12.901 4.158 13.187z"
        fill="#224BF4"
      />
      <Path
        d="M11.393 74.242a.163.163 0 01-.114-.19l3.177-11.775a.163.163 0 01.19-.114.163.163 0 01.111.19L11.58 74.131a.152.152 0 01-.143.111h-.043zM51.923 75.29l-4.062-13.188a.15.15 0 01.01-.116.148.148 0 01.09-.074.147.147 0 01.163.047.148.148 0 01.027.053l4.074 13.182a.147.147 0 01-.047.163.149.149 0 01-.053.027c-.032 0-.048.016-.063.016a.153.153 0 01-.139-.11zM20.639 26.16s-3.715 0-4.715-1.619a2.116 2.116 0 01.46-2.777s-2.014-2.666-.95-5.11a3.806 3.806 0 014.19-2.269s-2.143-3.792.475-6.633c3.206-3.491 8.569 0 8.569 0a2.7 2.7 0 012.682-2.27c2.317 0 2.317 1.4 2.317 1.4a5.342 5.342 0 015.713-1.749c5.348 1.571 4.427 7.506 4.427 7.506a2.4 2.4 0 012.856 1.92 2.674 2.674 0 01-1.6 3.317s2.158-.349 2.7 1.4a3.544 3.544 0 01-1.428 4.015l-1.258 6.102-23.93.984-.508-4.217z"
        fill="#1F1F39"
      />
      <Path
        d="M16.496 25.62c-2.583 1.19-2.857 4.776-.905 7.03 1.952 2.254 6.871 1.73 6.871 1.73l-.714-8.062s-2.666-1.892-5.252-.698zM47.505 25.62c2.587 1.19 2.856 4.777.9 7.03s-6.867 1.73-6.867 1.73l1.317-8.17a4.499 4.499 0 014.65-.59z"
        fill="#C43D28"
      />
      <Path
        d="M42.934 32.713a5.441 5.441 0 011.063-2.618 5.965 5.965 0 013.095-2.206.188.188 0 01.242.143.189.189 0 01-.143.238 5.642 5.642 0 00-2.876 2.031 5.125 5.125 0 00-1 2.412.194.194 0 01-.19.19.193.193 0 01-.19-.19zM21.56 32.714a5.188 5.188 0 00-1-2.412 5.531 5.531 0 00-2.873-2.032.208.208 0 01-.146-.238.214.214 0 01.241-.145 5.86 5.86 0 013.094 2.208 5.29 5.29 0 011.065 2.619.19.19 0 01-.38 0h-.002z"
        fill="#1F1F39"
      />
      <Path
        d="M26.605 41.649l-.65 9.014s.9 1.984 5.7 1.984c5.188 0 6.616-1.984 6.616-1.984l-.254-8.871s3.237-.524 4.792-6.363c.936-3.587 1.2-7.317.778-11 0 0-7.65 1.191-10.238-1.98-2.587-3.171-5.189-6.366-8.949-4.779-3.76 1.587-3.286 11.822-2.3 16.694a12.785 12.785 0 004.505 7.285z"
        fill="#DA5742"
      />
      <Path
        d="M28.287 29.492a1.3 1.3 0 01-1.174-1.393 1.3 1.3 0 011.174-1.4 1.3 1.3 0 011.175 1.4 1.3 1.3 0 01-1.175 1.393zM36.841 29.492a1.3 1.3 0 01-1.174-1.393 1.3 1.3 0 011.174-1.4 1.3 1.3 0 011.175 1.4 1.3 1.3 0 01-1.175 1.393zM31.667 30.016c.4.793 1.428.4 1.428.4s-1.03-.274-1.03-1.067l-.08-3.507s-.715 3.38-.318 4.174z"
        fill="#1F1F39"
      />
      <Path
        d="M26.24 48.218c.08-.016 8.585-3.317 10.188-4.824 0-.92.032-1.6.032-1.6s-1.556.917-5.32.79a11.218 11.218 0 01-4.535-.936c.016.809-.286 6.252-.365 6.57zM38.982 32.936c-1.393 0-2.523-.711-2.523-1.587s1.13-1.587 2.523-1.587c1.393 0 2.523.71 2.523 1.587s-1.129 1.587-2.523 1.587zM25.637 32.936c-1.393 0-2.523-.711-2.523-1.587s1.13-1.587 2.523-1.587c1.393 0 2.523.71 2.523 1.587s-1.129 1.587-2.523 1.587z"
        fill="#C43D28"
      />
      <Path
        d="M32.54 33.3a8.497 8.497 0 001.903-1.11s.317-.159.476 0a3.504 3.504 0 01-1.746 2.221 2.1 2.1 0 01-2.38-.792c-.477-.636.16-.477.16-.477.51.172 1.052.226 1.586.158z"
        fill="#fff"
      />
      <Path
        d="M26.507 38.379c2.38.635 1.936 1.746 2.968 1.27 1.049-.477 1.332-1.429 3.432-1.112 2.079.317 1.635 1.428 2.968 1.27 1.333-.158 3.571-1.746 4.6-2.7 1.046-.95 2.522-2.537 2.522-2.537s-.952 6.665-6.252 8.252c-3.983 1.19-9.632.635-12.156-3.015-2.524-3.65-2.682-5.713-2.682-5.713s2.222 3.65 4.6 4.285z"
        fill="#1F1F39"
      />
      <Path
        d="M28.937 37.586a.184.184 0 01-.048-.27l.635-.952a.183.183 0 01.124-.084.187.187 0 01.146.036.184.184 0 01.08.201.185.185 0 01-.033.069l-.635.952a.201.201 0 01-.155.079.294.294 0 01-.114-.031zM25.557 36.918a.2.2 0 01.047-.269l.953-.635a.2.2 0 01.266.047.2.2 0 01-.048.27l-.952.635a.229.229 0 01-.11.032.202.202 0 01-.156-.08zM32.35 37.744v-.794a.193.193 0 01.19-.19.2.2 0 01.19.19v.794a.183.183 0 01-.19.19.193.193 0 01-.19-.19zM35.365 37.332l-.318-.794a.193.193 0 01.111-.254.194.194 0 01.254.111l.32.794a.193.193 0 01-.112.254c-.017.015-.033.015-.065.015a.206.206 0 01-.19-.126zM38.95 37.11l-1.113-.635a.2.2 0 01.041-.365.2.2 0 01.151.016l1.108.635a.2.2 0 01-.1.381.225.225 0 01-.088-.032z"
        fill="#1F1F39"
      />
      <G opacity={0.592} fill="#BFE3C6">
        <G opacity={0.592}>
          <Path
            opacity={0.592}
            d="M23.09 60.247a1.28 1.28 0 001 .079c.413-.111.841-.317 1.254-.1a.907.907 0 01.444 1.016c-.032.143.19.206.222.063a1.13 1.13 0 00-1.238-1.391c-.404.124-.818.21-1.238.254-.46-.032-.576-.446-.651-.846a.116.116 0 10-.225.052c.027.336.182.648.432.873zM20.852 68.133c.185.352.473.64.825.825.365.222.746.508.65.984-.11.508-.602.794-1.015 1.032a.12.12 0 10.127.206 2.346 2.346 0 001.047-.952.989.989 0 00-.161-1.095c-.286-.3-.7-.444-.984-.73a1.243 1.243 0 01-.251-1.381c.035-.122-.206-.174-.254-.047a1.469 1.469 0 00.016 1.158zM8.442 63.992a.74.74 0 01.318-.778c.6-.381 1.206.175 1.793.222.54.048.889-.428 1.03-.9a1.765 1.765 0 00-.205-1.416.12.12 0 10-.206.127 1.482 1.482 0 01.032 1.555.653.653 0 01-.81.349 7.756 7.756 0 00-.857-.287 1.1 1.1 0 00-1.238.508c-.09.243-.117.505-.08.762.016.316.064.63.144.936.032.143.254.079.222-.063a4.476 4.476 0 01-.143-1.015zM16.473 80.242a.445.445 0 01.4.048c.23.152.442.328.635.524.41.344.907.569 1.436.65a1.544 1.544 0 001.782-1.65c-.032-.143-.254-.081-.222.063a1.229 1.229 0 01-.841 1.27 1.953 1.953 0 01-1.666-.27 4.67 4.67 0 01-.7-.555 1.2 1.2 0 00-.6-.333c-.383-.049-.795.332-.605.713.063.131.27.016.206-.127-.064-.143.064-.27.175-.333zM32.61 77.131a1.386 1.386 0 00.667 1.095c.4.3.968.571 1.063 1.111.1.6-.6.73-1.047.682-.16-.016-.143.222 0 .238a1.2 1.2 0 001.174-.413 1.013 1.013 0 00-.285-1.234c-.365-.368-.89-.543-1.171-.987a1.384 1.384 0 01.362-1.619c.095-.094-.08-.269-.175-.158a1.979 1.979 0 00-.587 1.285zM45.91 79.924a1.27 1.27 0 00.048 1.317c.159.23.272.489.333.762.03.266-.043.533-.206.746a.972.972 0 01-1.445.079.124.124 0 00-.175.175 1.27 1.27 0 001.365.237 1.24 1.24 0 00.7-1.174c-.032-.555-.555-.952-.555-1.523a1.053 1.053 0 01.982-1.032.119.119 0 100-.238 1.267 1.267 0 00-1.047.651zM38.911 58.057c.204.423.483.804.825 1.126.19.206.349.508.048.7a1.522 1.522 0 01-.873.175.119.119 0 100 .238c.4.016 1.095-.063 1.254-.492.159-.413-.254-.778-.508-1.047a2.051 2.051 0 01-.635-1.43 1.152 1.152 0 01.762-1.079.123.123 0 00.087-.151.123.123 0 00-.151-.087 1.515 1.515 0 00-.809 2.047zM38.72 67.308c.476.254.571.841.73 1.3a1.5 1.5 0 00.889 1.016c.467.167.977.167 1.444 0a2.2 2.2 0 001.158-1.253c.063-.143-.175-.206-.222-.063a1.936 1.936 0 01-1.143 1.143 1.693 1.693 0 01-1.523-.286c-.381-.349-.413-.92-.6-1.381a1.355 1.355 0 00-.892-.825 1.394 1.394 0 00-1.317.361c-.127.143.032.3.143.19a1.108 1.108 0 011.333-.202zM53.336 62.817c-.131.403-.128.837.01 1.238.08.413.1.889-.316 1.127a.829.829 0 01-1.06-.286c-.078-.127-.285 0-.205.127a1.094 1.094 0 00.968.508 1 1 0 00.857-.651 3 3 0 00-.1-1.349.944.944 0 01.116-.682.46.46 0 01.507-.206c.143.018.207-.207.064-.254a.739.739 0 00-.841.428z"
          />
        </G>
        <Path
          opacity={0.592}
          d="M62.994 72.05l.017.158-11.57 1.205-.016-.158 11.57-1.205zM12.01 71.409l.004.159-11.455.246-.003-.159 11.454-.246z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
