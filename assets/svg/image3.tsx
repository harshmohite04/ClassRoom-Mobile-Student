import * as React from "react"
import Svg, { SvgProps, Path, G } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={260}
    height={260}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M200 0a59.999 59.999 0 0 1 60 60v140a59.996 59.996 0 0 1-17.574 42.426A59.996 59.996 0 0 1 200 260H60a59.997 59.997 0 0 1-60-60V60A60 60 0 0 1 60 0h140Z"
    />
    <Path
      fill="#EAEAFF"
      d="M184.281 102.7h-2.971a.508.508 0 1 1 0-1.015h3.021a.467.467 0 0 1 .37.174.38.38 0 0 1 .062.334.452.452 0 0 1-.118.349.492.492 0 0 1-.364.158Zm-5.992 0h-3.021a.508.508 0 1 1 0-1.015h3.024a.508.508 0 1 1 0 1.015h-.003Zm-6.069 0h-3.021a.512.512 0 0 1-.345-.156.512.512 0 0 1 0-.703.512.512 0 0 1 .345-.156h3.021a.512.512 0 0 1 .345.156.512.512 0 0 1 0 .703.512.512 0 0 1-.345.156Zm-6.068 0h-3.022a.512.512 0 0 1-.345-.156.512.512 0 0 1 0-.703.512.512 0 0 1 .345-.156h3.022a.512.512 0 0 1 .345.156.512.512 0 0 1 0 .703.512.512 0 0 1-.345.156Zm-6.069 0h-3.02a.508.508 0 1 1 0-1.015h3.021a.508.508 0 1 1 0 1.015h-.001Zm-6.043 0h-3.021a.512.512 0 0 1-.345-.156.512.512 0 0 1 0-.703.512.512 0 0 1 .345-.156h3.022a.512.512 0 0 1 .345.156.512.512 0 0 1 0 .703.512.512 0 0 1-.345.156h-.001Zm-6.069 0h-3.02a.512.512 0 0 1-.345-.156.512.512 0 0 1 0-.703.512.512 0 0 1 .345-.156h3.021a.512.512 0 0 1 .345.156.512.512 0 0 1 0 .703.512.512 0 0 1-.345.156h-.001Zm-6.069 0h-3.019a.508.508 0 1 1 0-1.015h3.021a.508.508 0 1 1 0 1.015h-.002Zm-6.068 0h-3.019a.508.508 0 1 1 0-1.015h3.021a.512.512 0 0 1 .345.156.512.512 0 0 1 0 .703.512.512 0 0 1-.345.156h-.002Zm-6.044 0h-3.019a.508.508 0 1 1 0-1.015h3.021a.508.508 0 1 1 0 1.015h-.002Zm-6.068 0h-3.02a.512.512 0 0 1-.345-.156.512.512 0 0 1 0-.703.512.512 0 0 1 .345-.156h3.022a.512.512 0 0 1 .345.156.512.512 0 0 1 0 .703.512.512 0 0 1-.345.156h-.002Zm-6.069 0h-3.018a.512.512 0 0 1-.345-.156.512.512 0 0 1 0-.703.512.512 0 0 1 .345-.156h3.021a.512.512 0 0 1 .345.156.512.512 0 0 1 0 .703.512.512 0 0 1-.345.156h-.003Zm-6.069 0h-3.018a.508.508 0 1 1 0-1.015h3.026a.508.508 0 1 1 0 1.015h-.008Zm-6.043 0h-3.018a.512.512 0 0 1-.345-.156.512.512 0 0 1 0-.703.512.512 0 0 1 .345-.156h3.021c.133.004.26.059.355.153a.528.528 0 0 1 .153.355.507.507 0 0 1-.507.507h-.004Zm-6.069 0h-3.017a.51.51 0 0 1-.485-.508.51.51 0 0 1 .485-.507h3.021a.51.51 0 0 1 .531.507.508.508 0 0 1-.531.508h-.004Zm-6.068 0h-3.017a.511.511 0 0 1-.49-.308.507.507 0 0 1 .49-.707h3.021a.51.51 0 0 1 .486.507.51.51 0 0 1-.486.508h-.004Zm-6.2 0h-2.073c-.127-.013-.262-.019-.393-.025a8.241 8.241 0 0 1-.394-.025h-.026a.511.511 0 0 1-.457-.559.52.52 0 0 1 .45-.454H84.268h.068-.025c.276.023.6.048.9.048h2.006a.51.51 0 0 1 .486.507.51.51 0 0 1-.486.508h-.013Zm99.963-.431a.491.491 0 0 1-.482-.355.48.48 0 0 1 .149-.547.477.477 0 0 1 .181-.088 9.173 9.173 0 0 0 2.488-1.142.586.586 0 0 1 .28-.077.263.263 0 0 1 .226.085.325.325 0 0 1 0 .3c.07.111.093.246.064.374a.494.494 0 0 1-.217.312c-.077.052-.163.1-.245.155-.082.055-.163.1-.237.15h-.1c-.622.338-1.278.61-1.956.812a.31.31 0 0 1-.142.016l-.009.005Zm-106.632-.996a.427.427 0 0 1-.177-.025 8.82 8.82 0 0 1-1.219-.559h-.1l-.025-.025-.026-.025a1.327 1.327 0 0 0-.216-.17l-.012-.008a.527.527 0 0 1-.205-.349.488.488 0 0 1 .1-.362.527.527 0 0 1 .406-.2h.022c.019 0 .038 0 .042-.011.004-.011-.017-.052-.234-.214.578.388 1.197.71 1.846.961a.512.512 0 0 1 .279.661.548.548 0 0 1-.481.326ZM78.858 99.3c-.17-.114-.34-.236-.507-.362.249.173.4.281.508.361l-.001.001Zm113.116-.134a.532.532 0 0 1-.33-.127.473.473 0 0 1-.176-.324.524.524 0 0 1 .126-.387 10.052 10.052 0 0 0 1.524-2.285.51.51 0 0 1 .571-.267.691.691 0 0 0 .114.013.508.508 0 0 1 .229.685 12.054 12.054 0 0 1-1.676 2.514.462.462 0 0 1-.382.178ZM75.863 96.474a.528.528 0 0 1-.406-.2c-.003 0-.007 0-.01-.002a.026.026 0 0 1-.014-.014.026.026 0 0 1-.001-.01l-.025-.025-.027-.023v-.076a3.884 3.884 0 0 1-.2-.482.539.539 0 0 1 .3-.66.44.44 0 0 1 .178-.025h.071a.133.133 0 0 0 .049-.007c-.33-.54-.608-1.109-.831-1.7.76 1.273.89 1.576.859 1.668a.046.046 0 0 1-.028.029c.15.244.315.485.489.715a.49.49 0 0 1 .1.375.526.526 0 0 1-.2.336.484.484 0 0 1-.304.101Zm118.575-2.437h-.076a.513.513 0 0 1-.406-.584c.08-.538.122-1.081.127-1.625v-1.244a.51.51 0 0 1 .508-.508.409.409 0 0 1 .306.127.93.93 0 0 1 .176.686v1.346c-.004.46-.047.918-.127 1.371a.516.516 0 0 1-.508.431ZM75.076 92.59h-.051a.52.52 0 0 1-.508-.457.702.702 0 0 1-.025-.233v-2.23a.508.508 0 0 1 .508-.508c.09.003.179.02.264.05a.572.572 0 0 0 .146.032c.069 0 .1-.047.1-.158v2.184c-.005.263.004.525.026.787a.492.492 0 0 1-.46.533Zm119.516-4.52a.506.506 0 0 1-.508-.508v-3.021a.511.511 0 0 1 .308-.49.51.51 0 0 1 .707.49v3.021a.508.508 0 0 1-.507.508ZM75 87.131a.508.508 0 0 1-.508-.508V83.6a.508.508 0 0 1 1.015 0v3.021a.506.506 0 0 1-.507.51ZM194.592 82a.508.508 0 0 1-.508-.509v-3.018a.511.511 0 0 1 .308-.49.51.51 0 0 1 .707.49v3.021a.51.51 0 0 1-.507.506ZM75 81.063a.509.509 0 0 1-.508-.509v-3.021a.51.51 0 0 1 .983-.201.507.507 0 0 1 .032.201v3.021a.51.51 0 0 1-.507.509Zm119.592-5.129a.506.506 0 0 1-.508-.508V72.4a.511.511 0 0 1 .308-.49.51.51 0 0 1 .707.49v3.022a.503.503 0 0 1-.312.473.509.509 0 0 1-.195.039ZM75 75.019a.508.508 0 0 1-.508-.507V71.49a.508.508 0 0 1 .508-.508.5.5 0 0 1 .508.482v3.046a.508.508 0 0 1-.508.509Zm119.592-5.154a.501.501 0 0 1-.359-.149.503.503 0 0 1-.149-.359v-3.021a.511.511 0 0 1 .308-.49.51.51 0 0 1 .707.49v3.021a.508.508 0 0 1-.507.508ZM75 68.951a.51.51 0 0 1-.508-.508v-3.021a.508.508 0 0 1 1.015 0v3.021a.509.509 0 0 1-.507.508Zm119.592-5.129a.506.506 0 0 1-.508-.508v-3.021a.511.511 0 0 1 .308-.49.51.51 0 0 1 .707.49v3.022a.507.507 0 0 1-.507.507ZM75 62.883a.507.507 0 0 1-.508-.508v-3.021a.51.51 0 0 1 .983-.201.507.507 0 0 1 .032.201v3.021a.508.508 0 0 1-.507.508Zm119.592-5.129a.506.506 0 0 1-.508-.508v-3.021a.511.511 0 0 1 .308-.49.51.51 0 0 1 .707.49v3.021a.508.508 0 0 1-.507.508ZM75 56.814a.508.508 0 0 1-.508-.508v-3.021a.51.51 0 0 1 .983-.201.507.507 0 0 1 .032.201v3.021a.508.508 0 0 1-.507.508Zm119.592-5.128a.508.508 0 0 1-.508-.508v-3.022a.511.511 0 0 1 .308-.49.51.51 0 0 1 .707.49v3.021a.509.509 0 0 1-.507.509ZM75 50.771a.508.508 0 0 1-.508-.507v-3.021a.51.51 0 0 1 .508-.509.492.492 0 0 1 .508.509v3.021a.508.508 0 0 1-.508.507Zm119.592-5.154a.506.506 0 0 1-.508-.508v-3.021a.511.511 0 0 1 .308-.49.51.51 0 0 1 .707.49v3.022a.507.507 0 0 1-.507.507ZM75 44.7a.508.508 0 0 1-.508-.5v-3.026a.508.508 0 0 1 1.015 0V44.2a.508.508 0 0 1-.507.5Zm119.592-5.125a.508.508 0 0 1-.508-.509v-3.021a.511.511 0 0 1 .308-.49.51.51 0 0 1 .707.49v3.021a.509.509 0 0 1-.507.509ZM75.025 38.406a.508.508 0 0 1-.508-.506v-2.82a.52.52 0 0 1 .508-.457s.027 0 .076-.229a.509.509 0 0 1 .457.534c-.02.228-.03.457-.025.686V37.9a.51.51 0 0 1-.508.506Zm119.209-4.723a.485.485 0 0 1-.482-.381 9.991 9.991 0 0 0-1.092-2.514.525.525 0 0 1 .177-.685.423.423 0 0 1 .254-.076c.161 0 .343.055.584.457v.05c.33.567.611 1.162.838 1.777.025.025.025.025.025.05v.129c.059.147.108.297.147.45l.031.108a.474.474 0 0 1-.173.52.508.508 0 0 1-.182.089.231.231 0 0 1-.127.026ZM76.016 32.287a.44.44 0 0 1-.178-.025.548.548 0 0 1-.336-.465.483.483 0 0 1 .031-.197l.043-.117c.062-.176.134-.348.216-.516v-.28c.242-.42.504-.826.787-1.219a.53.53 0 0 1 .407-.2h.055c.1 0 .255-.053.656-.434a.517.517 0 0 1 .1.711 9.552 9.552 0 0 0-1.3 2.412.522.522 0 0 1-.481.33Zm115.276-3.503a.468.468 0 0 1-.356-.128 9.085 9.085 0 0 0-2.234-1.574.508.508 0 0 1-.229-.685.538.538 0 0 1 .457-.28c.077 0 .159.031 1.294.762l.077.038.076.037h.127l.025.026.025.025.025.025.026.025.025.025c.356.258.695.537 1.015.838a.458.458 0 0 1 .155.325.534.534 0 0 1-.13.386.56.56 0 0 1-.378.155Zm-112.28-.559a.53.53 0 0 1-.52-.574.5.5 0 0 1 .19-.341 10.36 10.36 0 0 1 2.61-1.523.42.42 0 0 1 .182-.026.506.506 0 0 1 .482.33.514.514 0 0 1-.279.66 9.907 9.907 0 0 0-2.361 1.372.449.449 0 0 1-.304.102Zm107.174-2.032h-.1a9.005 9.005 0 0 0-1.854-.178h-3.021a.51.51 0 0 1-.345-.859.51.51 0 0 1 .345-.156h3.021c.026 0 .026 0 .305.025h.177c.53.019 1.057.077 1.578.175a.496.496 0 0 1 .403.387.5.5 0 0 1 .003.197.544.544 0 0 1-.512.409Zm-101.259-.152h-.05a.522.522 0 0 1-.508-.457.51.51 0 0 1 .457-.559.703.703 0 0 0 .114-.013.704.704 0 0 1 .114-.012h2.183c.186.02.365.085.52.189.202.11.41.208.623.294a.508.508 0 0 1-.508.508h-1.9c-.365-.001-.73.025-1.045.05Zm93.26-.026h-3.021a.505.505 0 0 1-.49-.308.507.507 0 0 1 .49-.707h3.026a.51.51 0 0 1 .345.859.51.51 0 0 1-.345.156h-.005Zm-6.069 0h-3.021a.51.51 0 0 1-.345-.859.51.51 0 0 1 .345-.156h3.021a.505.505 0 0 1 .49.308.507.507 0 0 1-.49.707Zm-6.068 0h-3.021a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.021a.51.51 0 0 1 .345.859.51.51 0 0 1-.345.156Zm-6.069 0h-3.02a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.021a.505.505 0 0 1 .49.308.507.507 0 0 1-.49.707h-.001Zm-6.043 0h-3.02a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.021a.527.527 0 0 1 .508.508.507.507 0 0 1-.507.507h-.002Zm-6.069 0h-3.045a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.047a.51.51 0 0 1 .345.859.51.51 0 0 1-.345.156h-.002Zm-6.069 0h-3.019a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.021a.505.505 0 0 1 .49.308.507.507 0 0 1-.49.707h-.002Zm-6.068 0h-3.019a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.021a.51.51 0 0 1 .345.859.51.51 0 0 1-.345.156h-.002Zm-6.044 0h-3.018a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.022a.525.525 0 0 1 .508.508.507.507 0 0 1-.508.507h-.004Zm-6.068 0h-3.018a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.021a.51.51 0 0 1 .345.859.51.51 0 0 1-.345.156h-.003Zm-6.069 0h-3.018a.51.51 0 0 1-.345-.859.51.51 0 0 1 .345-.156h3.021a.51.51 0 0 1 .345.859.51.51 0 0 1-.345.156h-.003Zm-6.068 0h-3.019a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.022a.51.51 0 0 1 .345.859.51.51 0 0 1-.345.156h-.003Zm-6.043 0h-3.018a.505.505 0 0 1-.49-.308.506.506 0 0 1 0-.4.517.517 0 0 1 .289-.275.505.505 0 0 1 .201-.032h3.021a.546.546 0 0 1 .508.508.508.508 0 0 1-.508.507h-.003Zm-6.068 0h-3.044a.508.508 0 1 1 0-1.015h3.047a.508.508 0 1 1 0 1.015h-.003Zm-6.069 0h-3.018a.508.508 0 1 1 0-1.015h3.021a.508.508 0 0 1 0 1.015h-.003Z"
    />
    <Path fill="#fff" d="M195.097 36.984v.432H74.492v-.432h120.605Z" />
    <Path
      fill="#EAEAFF"
      d="M86.045 91.777a2.6 2.6 0 0 1-2.59-2.59v-38.06a2.6 2.6 0 0 1 2.59-2.59h1.371a2.6 2.6 0 0 1 2.59 2.59v38.035a2.606 2.606 0 0 1-2.59 2.615h-1.37ZM98.055 91.777a2.146 2.146 0 0 1-2.133-2.133V64.787a2.146 2.146 0 0 1 2.133-2.133h2.285a2.144 2.144 0 0 1 2.133 2.133v24.857a2.166 2.166 0 0 1-2.133 2.133h-2.285ZM110.953 91.777a2.599 2.599 0 0 1-2.59-2.59v-38.06a2.603 2.603 0 0 1 2.59-2.59h1.371a2.601 2.601 0 0 1 2.59 2.59v38.035a2.605 2.605 0 0 1-2.59 2.615h-1.371ZM123.927 91.78a2.238 2.238 0 0 1-2.234-2.238V61.714a2.24 2.24 0 0 1 2.234-2.234h2.057a2.236 2.236 0 0 1 2.234 2.234v27.828a2.216 2.216 0 0 1-.649 1.586 2.223 2.223 0 0 1-1.585.652h-2.057ZM135.989 91.777a1.863 1.863 0 0 1-1.854-1.853V71.846a1.866 1.866 0 0 1 1.854-1.854h2.869a1.865 1.865 0 0 1 1.853 1.854v18.078a1.881 1.881 0 0 1-1.854 1.854l-2.868-.001ZM148.835 91.78a2.238 2.238 0 0 1-2.234-2.238V61.714a2.237 2.237 0 0 1 2.234-2.234h2.057a2.24 2.24 0 0 1 2.234 2.234v27.828a2.228 2.228 0 0 1-1.376 2.071 2.223 2.223 0 0 1-.858.167h-2.057ZM85.461 25a10.876 10.876 0 0 0-10.969 10.74v1.447h120.605V35.74A10.875 10.875 0 0 0 184.129 25H85.461Z"
    />
    <Path
      fill="#FF8870"
      d="M168.538 32.694a1.625 1.625 0 0 1-1.65-1.6 1.628 1.628 0 0 1 1.65-1.6 1.625 1.625 0 0 1 1.65 1.6 1.624 1.624 0 0 1-1.65 1.6Z"
    />
    <Path
      fill="#FFD301"
      d="M175.978 32.694a1.625 1.625 0 0 1-1.65-1.6 1.628 1.628 0 0 1 1.65-1.6 1.625 1.625 0 0 1 1.65 1.6 1.624 1.624 0 0 1-1.65 1.6Z"
    />
    <Path
      fill="#54CDA2"
      d="M183.417 32.694a1.625 1.625 0 0 1-1.65-1.6 1.628 1.628 0 0 1 1.65-1.6 1.625 1.625 0 0 1 1.65 1.6 1.624 1.624 0 0 1-1.65 1.6Z"
    />
    <Path
      fill="#EAEAFF"
      d="M190.883 118.691a6.456 6.456 0 0 1-6.449-6.449V73.597a6.457 6.457 0 0 1 6.449-6.449h51.34a6.459 6.459 0 0 1 6.449 6.449v38.645a6.46 6.46 0 0 1-6.449 6.449h-51.34Z"
    />
    <Path fill="#fff" d="M248.672 80.123v.457h-64.238v-.457h64.238Z" />
    <Path
      fill="#FF8870"
      d="M223.658 75.781a1.899 1.899 0 0 1-.37-3.764 1.898 1.898 0 0 1 2.27 1.864 1.9 1.9 0 0 1-1.9 1.9Z"
    />
    <Path
      fill="#FFD301"
      d="M232.291 75.781a1.896 1.896 0 0 1-1.755-1.173 1.896 1.896 0 0 1 1.384-2.59 1.9 1.9 0 1 1 .371 3.763Z"
    />
    <Path
      fill="#54CDA2"
      d="M240.924 75.781a1.902 1.902 0 0 1-1.864-2.27 1.904 1.904 0 0 1 2.591-1.385 1.903 1.903 0 0 1 1.173 1.755 1.898 1.898 0 0 1-1.9 1.9Z"
    />
    <Path
      fill="#fff"
      d="M220.261 98.379a.843.843 0 0 1-.711-1.295l5.204-8.15a.405.405 0 0 0-.127-.584 11.674 11.674 0 0 0-17.493 8.658 11.686 11.686 0 1 0 23.283 1.828.473.473 0 0 0-.457-.457h-9.699Z"
    />
    <Path
      fill="#F9D2DD"
      d="M73.705 175.643c9.699-17.012 20.237-28.057 26.711-32.932a94.648 94.648 0 0 1 13.178-8.15l-5.611 49.715-15.641 49.461-31.586.203s3.25-41.285 12.949-58.297Z"
    />
    <Path
      fill="#F9ACC0"
      d="m104.199 196.209 3.781-11.933 3.607-31.815-4.341-14.32c-.097.054-.19.113-.279.178.051 4.215-.432 18.307-8.125 30.316-6.755 10.537-20.846 12.442-27.778 12.695-.2.457-.406.939-.584 1.4l33.719 13.479Z"
    />
    <Path
      fill="#3D5CFF"
      d="M94.78 188.871s7.82-4.6 12.137-24.832c2.488-11.68 0-26.178 0-26.178s16.452-9.724 33.464-8.912a128.217 128.217 0 0 1 29.682 4.852s-1.092 8.354-1.092 25.645 7.566 35.9 7.566 35.9l-1.219 38.594H89.346l5.434-45.069Z"
    />
    <Path
      fill="#224BF4"
      d="m132.941 178.359-3.631 36.436 46.313-12.264-25.8-3.936-16.882-20.236Z"
    />
    <Path
      fill="#fff"
      d="M113.924 134.612v97.17h-.533v-97.17h.533ZM125.654 130.549v101.232h-.533V130.549h.533ZM137.409 134.612v97.17h-.533v-97.17h.533ZM149.14 134.612v97.17h-.533v-97.17h.533ZM160.87 131.641v100.141h-.533V131.641h.533Z"
    />
    <Path
      fill="#1F1F39"
      d="M169.047 31.119a6.115 6.115 0 0 0-2.031 5.159 11.16 11.16 0 0 0-10.436 1.671c-3.859 2.92-3.4 7.439-2.92 9.572-5.129-.406-10.537 1.5-12.594 5.586a18.564 18.564 0 0 0-1.65 8.557c-13.152-.965-24.2 7.338-25.848 19.3-1.648 11.962 4.469 18.814 4.469 18.814l24.908 7.338s10.816.736 16.453-4.393c5.637-5.129 9.166-17.113 4.926-26.889a20.212 20.212 0 0 0-5.687-7.16c1.565-1.565 3-3.255 4.291-5.053a10.37 10.37 0 0 0 1.193-9.191 14.876 14.876 0 0 0 5.154-1.8c3.656-1.98 4.6-6.119 3.707-9.7a16.02 16.02 0 0 0 3.58-.3c3.529-.762 4.951-5.154 2.59-9.547-2.361-4.393-7.287-4.173-10.105-1.964Z"
    />
    <Path
      fill="#F9ACC0"
      d="M115.549 93.352c-4.316 1.879-4.037 10.258 2.158 12.949 6.195 2.691 9.725.533 9.725.533l-4.875-13.482s-2.692-1.879-7.008 0Z"
    />
    <Path
      fill="#1F1F39"
      d="m122.886 105.869-2.082-4.316c-2.005-4.164-4.722-5.536-4.748-5.536a.247.247 0 0 1-.131-.139.248.248 0 0 1 .143-.323.253.253 0 0 1 .192.005c.127.051 2.92 1.422 5 5.789l2.082 4.316a.252.252 0 0 1-.127.33c-.025 0-.076.025-.1.025a.242.242 0 0 1-.229-.151Z"
    />
    <Path
      fill="#F9D2DD"
      d="M118.543 91.066c.127 2.666.762 12.289 3.758 17.367a17.754 17.754 0 0 0 8.176 7.389c.135.054.25.149.328.272a.695.695 0 0 1 .104.414c-.076 1.9-.381 8.607-1.066 11.35-.609 2.463-1.219 4.443-1.5 5.256a.729.729 0 0 0 .178.736c1.092 1.092 5.281 3.174 12.111 3.174 6.754 0 10.41-1.676 11.705-2.438a.754.754 0 0 0 .355-.762c-.381-1.98-1.8-9.547-1.8-13.279 0-3.555.355-8.557.482-10.232a.728.728 0 0 1 .584-.66c2.209-.406 10.461-2.412 9.979-9.9-.457-7.516-7.262-6.855-9.014-6.551a.722.722 0 0 0-.559.482c-.3.863-1.066 3.047-1.473 4.748a.711.711 0 0 1-1.4-.076 18.916 18.916 0 0 1-.2-2.615 9.09 9.09 0 0 1 .279-2.539.698.698 0 0 0 .012-.28.693.693 0 0 0-.289-.469.706.706 0 0 0-.256-.114c-1.93-.457-6.881-2.031-9.445-6.322a29.72 29.72 0 0 1-2.741-5.64.718.718 0 0 0-.635-.485.71.71 0 0 0-.685.409 15.39 15.39 0 0 1-6.729 6.8 27.044 27.044 0 0 1-9.623 3.229.7.7 0 0 0-.636.736ZM193.041 156.752c6.2 13.762 8.937 42.758 8.354 53.168-.559 9.725-4.062 20.77-15.666 23.207-11.578 2.437-53.422-.003-53.422-.003v-27.775l40.752-2.691-3.225-18.611s-4.037-18.358-2.691-32.373c1.32-14.067 2.412-17.85 2.412-17.85s14.904 3.885 23.486 22.928Z"
    />
    <Path
      fill="#1F1F39"
      d="M138.426 90.635a2.868 2.868 0 0 1 2.284-.101c.253.076.487.206.686.381a1.546 1.546 0 0 1 .614 1.345 1.728 1.728 0 0 0-.817-1.041 3.5 3.5 0 0 0-1.269-.355 3.312 3.312 0 0 0-1.32.152c-.443.152-.85.394-1.194.711.203-.47.561-.856 1.016-1.092ZM123.928 90.762a2.409 2.409 0 0 1 1.421-.609c.265-.025.532 0 .787.076.258.095.498.232.711.406a1.878 1.878 0 0 1 .584 1.371 2.543 2.543 0 0 0-.837-1.063 1.702 1.702 0 0 0-.584-.257c-.1 0-.2-.051-.3-.051h-.3c-.441.03-.866.18-1.229.432-.407.25-.767.567-1.066.939.151-.482.432-.912.813-1.244ZM131.799 95.154c-.127.355-.254.686-.355 1.041-.101.355-.2.686-.279 1.041a2.687 2.687 0 0 0-.076.99c.021.149.083.29.178.406.036.07.088.131.152.178l.076.076.1.076c.277.206.599.344.939.406.359.077.724.128 1.092.152a3.282 3.282 0 0 1-1.117.1 2.577 2.577 0 0 1-1.117-.33 1.56 1.56 0 0 1-.736-.99 3.102 3.102 0 0 1 .051-1.191 8.83 8.83 0 0 1 .762-2.137c.3-.668.666-1.304 1.092-1.9l-.762 2.082ZM125.807 98.531a2.05 2.05 0 0 1-1.879-2.183 2.045 2.045 0 0 1 1.879-2.184 2.05 2.05 0 0 1 1.879 2.184 2.052 2.052 0 0 1-1.879 2.183ZM139.289 98.531a2.05 2.05 0 0 1-1.879-2.183 2.045 2.045 0 0 1 1.879-2.184 2.05 2.05 0 0 1 1.879 2.184 2.049 2.049 0 0 1-1.879 2.183Z"
    />
    <Path
      fill="#F9ACC0"
      d="M142.183 204.562v28.565s9.039.533 19.881.838l-9.75-30.063-10.131.66Z"
    />
    <Path
      fill="#F95368"
      d="M136.064 106.605a2.046 2.046 0 0 1-1.879-2.183 2.049 2.049 0 0 1 1.879-2.184 2.048 2.048 0 0 1 1.879 2.184 2.047 2.047 0 0 1-.492 1.477c-.351.409-.85.663-1.387.706Z"
    />
    <Path
      fill="#EAEAFF"
      d="M60.223 233.685a5.715 5.715 0 0 1-4.926-3.631l-10.283-56.392c-.737-1.981.304-3.631 2.31-3.631h90.746a5.72 5.72 0 0 1 2.99 1.1 5.722 5.722 0 0 1 1.936 2.531l10.281 56.392c.736 2.006-.3 3.631-2.311 3.631H60.223Z"
    />
    <Path
      fill="#fff"
      d="M98 206a6.002 6.002 0 0 1-5.885-7.171 6.002 6.002 0 0 1 8.181-4.372A5.999 5.999 0 0 1 98 206Z"
    />
    <G fill="#F9ACC0" opacity={0.635}>
      <Path
        d="M143.986 106.377c-3.113 0-5.637-1.546-5.637-3.453 0-1.907 2.524-3.453 5.637-3.453 3.113 0 5.637 1.546 5.637 3.453 0 1.907-2.524 3.453-5.637 3.453ZM124.004 106.378c-3.113 0-5.637-1.546-5.637-3.453 0-1.907 2.524-3.453 5.637-3.453 3.113 0 5.637 1.546 5.637 3.453 0 1.907-2.524 3.453-5.637 3.453Z"
        opacity={0.635}
      />
    </G>
    <Path
      fill="#F9ACC0"
      d="M137.359 117.143a51.585 51.585 0 0 1-6.576-1.016c.08.13.124.279.127.432-.051 1.599-.28 6.525-.762 9.699 2.438-.508 7.008-1.731 9.674-4.012a31.841 31.841 0 0 0 5.408-5.687 31.5 31.5 0 0 1-7.871.584Z"
    />
    <Path
      fill="#1F1F39"
      d="M130.834 116.254a.222.222 0 0 1-.085-.053.234.234 0 0 1-.042-.277.24.24 0 0 1 .052-.085.238.238 0 0 1 .278-.042 19.08 19.08 0 0 0 7.719 1.07 35.331 35.331 0 0 0 7.237-1.07.216.216 0 0 1 .192.018.223.223 0 0 1 .108.16.232.232 0 0 1-.018.192.222.222 0 0 1-.16.108 36.99 36.99 0 0 1-7.338 1.092c-.432 0-.838.025-1.244.025a18.859 18.859 0 0 1-6.699-1.138Z"
    />
    <Path
      fill="#F9ACC0"
      d="M151.527 104.905a8.339 8.339 0 0 0-.127 5.641v-.152a.728.728 0 0 1 .584-.66 19.2 19.2 0 0 0 2.361-.609 16.255 16.255 0 0 1-.457-6.068 17.217 17.217 0 0 1 1.651-5.211s-2.336 1.854-4.012 7.059Z"
    />
    <Path
      fill="#1F1F39"
      d="M150.918 107.113a14.226 14.226 0 0 1 1.65-5.789 11.206 11.206 0 0 1 4.164-4.697.26.26 0 0 1 .199-.025c.033.01.064.025.09.047a.275.275 0 0 1 .099.175.269.269 0 0 1-.008.102.253.253 0 0 1-.125.156 11.009 11.009 0 0 0-3.936 4.471 13.96 13.96 0 0 0-1.6 5.561.327.327 0 0 1-.279.254.266.266 0 0 1-.097-.019.259.259 0 0 1-.157-.236Z"
    />
    <Path
      fill="#F9ACC0"
      d="M177.096 137.506a29.147 29.147 0 0 0-7.566-3.682s-1.092 3.783-2.438 17.8c-.889 9.165.533 20.184 1.621 26.71a113.56 113.56 0 0 1 2.162-21.557c2.082-10.308 4.571-16.199 6.221-19.271ZM184.916 201.567l-13.229-7.008 1.32 7.871 11.909-.863Z"
    />
    <Path
      fill="#1F1F39"
      d="M172.801 202.557c-.025-.127.1-.254.229-.279l12.038-1.146a.256.256 0 0 1 .279.229c.025.127-.1.254-.229.279l-12.06 1.146a.267.267 0 0 1-.257-.229ZM34.237 234.691c-.132 0-.237-.222-.237-.5s.105-.5.237-.5h189.526c.131 0 .237.222.237.5s-.105.5-.237.5H34.237Z"
    />
  </Svg>
)
export default SvgComponent
