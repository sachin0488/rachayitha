import styled from '@emotion/styled'
import React from 'react'

export default function GlobalBackGround() {
  return (
    <Root>
      <svg width="1833" height="1822" viewBox="0 0 1833 1822" fill="none">
        <g opacity="0.5" filter="url(#filter0_f)">
          <path
            opacity="0.5"
            d="M984.056 818.268C980.152 843.942 1002.33 869.513 994.793 895.269C992.223 901.901 993.958 917.971 1021.46 929.197C1039.94 955.947 1130.16 973.222 1138.13 1005.35C1144.01 1029 1149.29 1057.4 1129.38 1083.2C1114.04 1103.1 1089.13 1117.35 1065.54 1128.5C1031.38 1144.67 994.771 1156.33 958.858 1161.76C841.771 1179.44 736.338 1142.89 652.265 1097.02C549.824 1041.13 478.98 957.154 432.832 859.709C413.799 819.523 399.817 777.425 395.923 731.471C392.338 689.16 394.272 645.118 400.858 600.984C409.243 544.8 427.346 486.583 462.97 432.404C490.064 391.197 532.243 360.872 580.691 338.648C646.926 308.267 715.506 308.019 769.124 333.187C802.196 348.71 831.518 380.648 813.492 420.191C799.741 450.355 767.751 475.177 742.581 500.08C725.76 516.721 702.289 540.481 712.072 559.349C728.619 591.264 761.622 615.942 792.02 637.256C830.853 664.484 879.927 678.715 923.99 699.8C949.368 711.943 963.91 733.735 974.799 756.603C983.555 774.989 987.403 796.258 984.056 818.268Z"
            fill="#ff5353"
          />
        </g>
        <g opacity="0.3" filter="url(#filter1_f)">
          <path
            opacity="0.5"
            d="M1188.83 941.734C1207.53 958.034 1236.32 953.153 1253.67 972.439C1257.9 977.914 1271.24 984.73 1290.8 968.202C1319.07 966.924 1367.83 902.688 1396.25 912.671C1417.17 920.02 1441.59 930.266 1454.17 959.594C1463.87 982.207 1465.39 1009.67 1464.99 1034.48C1464.41 1070.43 1459.34 1106.04 1449.62 1137.9C1417.95 1241.78 1348.07 1308.47 1279.18 1353.09C1195.24 1407.47 1101.48 1421.87 1006.73 1409.39C967.65 1404.24 929.039 1394.02 891.314 1373.66C856.587 1354.91 822.637 1330.81 790.438 1302.89C749.438 1267.35 710.624 1222.9 681.82 1166.33C659.904 1123.3 652.447 1073.62 653.818 1023.01C655.678 953.821 682.203 898.149 722.919 867.601C748.038 848.757 784.619 841.353 808.754 876.183C827.16 902.757 834.259 941.365 844.066 974.496C850.627 996.633 860.204 1027.8 878.881 1029.53C910.47 1032.46 942.767 1018.36 971.4 1004.65C1007.98 987.129 1038.32 954.661 1072.09 929.761C1091.55 915.42 1114.38 914.795 1136.64 917.676C1154.53 919.997 1172.79 927.762 1188.83 941.734Z"
            fill="rgb(252, 211, 77)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="0.000976562"
            y="0"
            width="1427.76"
            height="1581.04"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur" />
          </filter>
          <filter
            id="filter1_f"
            x="306"
            y="311"
            width="1526.91"
            height="1510.39"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </Root>
  )
}

const Root = styled.div`
  position: fixed;
  top: -35%;
  /* right: -45%; */
  /* right: 0px; */
  animation: 200ms ease 100ms 1 normal forwards running nextui-k-feVUdh;
  /* max-width: 100%; */
  z-index: -1;
  display: none;
`
