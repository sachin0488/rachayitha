import React from 'react'

const IconSets = () => {
  return (
    <div
      style={{
        height: '70px',
      }}
      dangerouslySetInnerHTML={{
        __html: `
        <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <symbol id="i-logolong" viewBox="0 0 156 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M91.8449 19.7632C97.4657 19.8219 102.035 15.4804 102.116 9.94641C102.196 4.55515 97.6201 0.0507006 92.0136 0.000435035C86.4738 -0.0501974 81.8946 4.32511 81.8333 9.8734C81.7726 15.3964 86.4331 19.7071 91.8449 19.7632ZM62.2385 0.299438C62.1113 0.299438 62.0085 0.39997 62.0085 0.523982V19.5394C62.0085 19.6634 62.1113 19.764 62.2385 19.764H66.0036C66.1312 19.764 66.2344 19.6634 66.2344 19.5394V8.51254C66.2344 8.47108 66.2687 8.43769 66.3112 8.43769C66.3323 8.43769 66.353 8.44613 66.3673 8.46154L76.7657 19.3809C76.9985 19.6253 77.325 19.764 77.6669 19.764H78.6053C78.7326 19.764 78.8358 19.6634 78.8358 19.5394V0.523982C78.8358 0.39997 78.7326 0.299438 78.6053 0.299438H75.0708C74.9435 0.299438 74.8399 0.39997 74.8399 0.523982V11.9442C74.8399 11.9856 74.8057 12.0194 74.7635 12.0194C74.7416 12.0194 74.7213 12.0106 74.707 11.9952L64.0348 0.68652C63.8021 0.439962 63.4741 0.299438 63.1299 0.299438H62.2385ZM58.9254 15.4091C59.3261 12.7068 58.2423 10.6614 55.7622 9.47114L55.8218 9.42599C55.9943 9.29557 56.1589 9.17113 56.318 9.03782C58.0216 7.71441 58.5887 5.37578 57.6111 3.42313C56.5748 1.34646 54.7831 0.462227 52.6004 0.4193C50.8894 0.385497 49.1796 0.391077 47.4702 0.396656C46.4335 0.400039 45.397 0.403421 44.3605 0.398019C43.9847 0.395084 43.845 0.463695 43.845 0.892603C43.8642 7.08371 43.8642 13.2785 43.845 19.4773C43.8435 19.9865 44.06 19.9865 44.4272 19.9865C47.0836 19.9788 49.7373 19.9788 52.388 19.9865C53.015 19.9909 53.6413 19.9433 54.2607 19.8435C56.649 19.4641 58.597 17.6175 58.9254 15.4091ZM47.7927 3.89197C47.7079 3.89234 47.6398 3.95948 47.6398 4.04167V7.86222C47.6398 7.94477 47.7083 8.01191 47.7934 8.01191C49.7723 8.01081 51.1295 8.01081 51.8653 8.01191C52.9977 8.01375 53.9188 7.33094 53.9019 5.91397C53.8853 4.49736 52.7932 3.90701 51.8653 3.89271C51.1837 3.88243 49.8258 3.88207 47.7927 3.89197ZM47.6398 11.5287C47.6398 11.4462 47.7083 11.379 47.7934 11.379H51.9998C53.3886 11.379 54.5793 12.2379 54.6317 13.8497C54.6844 15.4615 53.3223 16.3949 51.9998 16.3949H47.7934C47.7083 16.3949 47.6398 16.3282 47.6398 16.2452V11.5287ZM25.9714 1.02386C25.9714 0.552759 26.0302 0.370409 26.5917 0.374078C29.3478 0.393156 33.7767 0.393523 39.8777 0.375545C40.1322 0.374811 40.3393 0.575507 40.3401 0.823532V0.825V3.81819C40.3401 4.06621 40.1334 4.26727 39.8792 4.26727H30.5092C30.2546 4.26727 30.0483 4.46834 30.0483 4.71636V7.71101C30.0483 7.95904 30.2546 8.1601 30.5092 8.1601H39.5715C39.8264 8.1601 40.0324 8.36116 40.0324 8.60919V11.3793C40.0324 11.6273 39.8264 11.8284 39.5715 11.8284H30.5092C30.2546 11.8284 30.0483 12.0294 30.0483 12.2775V15.4967C30.0483 15.7451 30.2546 15.9458 30.5092 15.9458H39.8792C40.1334 15.9458 40.3401 16.1472 40.3401 16.3952V19.3891C40.3401 19.6368 40.1334 19.8382 39.8792 19.8382H39.8784C33.8061 19.8291 29.3309 19.8294 26.4535 19.839C25.9712 19.839 25.9751 19.6173 25.9802 19.3295C25.9806 19.3038 25.9811 19.2775 25.9812 19.2508L25.9815 18.7755C25.9839 15.1817 25.9915 3.76853 25.9714 1.02386ZM125.635 0.374078C125.074 0.370409 125.015 0.552759 125.015 1.02386C125.035 3.76715 125.028 15.1702 125.025 18.77V18.7775L125.025 19.2508L125.024 19.2949L125.024 19.3295C125.019 19.6173 125.015 19.839 125.497 19.839C128.375 19.8294 132.85 19.8291 138.922 19.8382H138.923C139.177 19.8382 139.384 19.6368 139.384 19.3891V16.3952C139.384 16.1472 139.177 15.9458 138.923 15.9458H129.553C129.299 15.9458 129.092 15.7451 129.092 15.4967V12.2775C129.092 12.0294 129.299 11.8284 129.553 11.8284H138.616C138.87 11.8284 139.077 11.6273 139.077 11.3793V8.60919C139.077 8.36116 138.87 8.1601 138.616 8.1601H129.553C129.299 8.1601 129.092 7.95904 129.092 7.71101V4.71636C129.092 4.46834 129.299 4.26727 129.553 4.26727H138.923C139.177 4.26727 139.384 4.06621 139.384 3.81819V0.825V0.823532C139.383 0.575507 139.176 0.374811 138.922 0.375545C132.82 0.393523 128.392 0.393156 125.635 0.374078ZM142.82 0.403076H146.146C146.4 0.403076 146.607 0.604138 146.607 0.852164V16.0397C146.607 16.1637 146.71 16.2642 146.837 16.2642H146.838L155.769 16.2397C155.896 16.2393 156 16.3398 156 16.4638V16.4642V19.7755C156 19.8995 155.897 20 155.77 20H142.82C142.693 20 142.59 19.8995 142.59 19.7755V0.62762C142.59 0.503607 142.693 0.403076 142.82 0.403076ZM91.9779 3.74318C88.5435 3.712 85.7131 6.44468 85.6747 9.91337C85.6382 13.2463 88.4678 15.9849 91.886 16.0205C95.3964 16.0568 98.2241 13.3593 98.275 9.89283C98.3236 6.58741 95.4665 3.77474 91.9779 3.74318ZM102.351 0.763428H106.093C106.356 0.763428 106.595 0.90762 106.712 1.1362L112.375 12.1796C112.413 12.2533 112.505 12.2834 112.581 12.2464C112.611 12.2317 112.635 12.2082 112.65 12.1788L118.253 1.1384C118.369 0.908721 118.61 0.763428 118.873 0.763428H122.383C122.511 0.763428 122.614 0.863959 122.614 0.987972C122.614 1.02319 122.606 1.05768 122.589 1.08924L113.3 19.0036C113.07 19.4464 112.516 19.624 112.061 19.4002C111.888 19.3151 111.747 19.179 111.658 19.0113L102.147 1.09107C102.088 0.981001 102.133 0.845614 102.246 0.788377C102.278 0.771867 102.315 0.763428 102.351 0.763428ZM17.4231 4.49938V12.463L11.2762 6.63952C10.8239 6.31958 10.7539 6.31958 10.2903 6.63952L3.87836 12.3023C3.87309 10.168 3.87083 7.18694 3.87083 4.49938C3.87083 2.8175 2.68687 1.49445 0.319714 0.529869C0.202222 0.481805 0.0674072 0.535739 0.0180757 0.650213C0.00640181 0.67773 0 0.707082 0 0.736801V18.9854C0 19.3163 0.275278 19.5842 0.61495 19.5842C0.760308 19.5842 0.901148 19.5339 1.01224 19.4422L10.7972 11.3682L20.5818 19.364C20.842 19.5765 21.2295 19.5431 21.4479 19.2899C21.5409 19.1821 21.5914 19.0456 21.5914 18.905V0.710018C21.5914 0.586005 21.4882 0.485474 21.3613 0.485474C21.3323 0.485474 21.3041 0.49061 21.2773 0.500884C18.708 1.47831 17.4231 2.81126 17.4231 4.49938Z"
          fill="currentColor"></path>
      </symbol>
      <symbol id="i-logo-wsa" viewBox="0 0 66 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M44 10C44 15.5228 39.5228 20 34 20C29.8994 20 26.3752 17.5318 24.8321 14H34V12H24.2C24.0689 11.3538 24 10.6849 24 10C24 4.47715 28.4771 0 34 0C38.1006 0 41.6248 2.46819 43.1679 6H34V8H43.8C43.9311 8.64622 44 9.31507 44 10Z"
          fill="#0A1733"></path>
        <path d="M52.144 7.94087L56 1L66 19H58.2879L52.144 7.94087Z" fill="#0A1733"></path>
        <path d="M56 19L51 10L46 19H56Z" fill="#0A1733"></path>
        <path d="M5.6 1H0V19H14C17.3137 19 20 16.3137 20 13V1H14.4V13H12.4L12.4 1H7.6L7.6 13H5.6V1Z" fill="#0A1733"></path>
      </symbol>

      <symbol id="i-arrow-right" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 10L2.5 10" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
        <path d="M12.5 5L17.5 10L12.5 15" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
      </symbol>

      <symbol id="i-close" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0H0V20H20V0Z" fill="white" fill-opacity="0.01"></path>
        <path d="M3.33325 3.33333L16.6666 16.6667" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
        <path d="M3.33325 16.6667L16.6666 3.33333" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
      </symbol>

      <symbol id="i-menu" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.974854 0.974854H18.9749V2.97485H0.974854V0.974854Z" fill="#0A1733"></path>
        <path d="M0.974854 6.97485H18.9749V8.97485H0.974854V6.97485Z" fill="#0A1733"></path>
        <path d="M18.9749 12.9749H0.974854V14.9749H18.9749V12.9749Z" fill="#0A1733"></path>
      </symbol>

      <symbol id="i-showmore" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L12 12L6 6" stroke="currentColor" stroke-width="2"></path>
        <path d="M18 12L12 18L6 12" stroke="currentColor" stroke-width="2"></path>
      </symbol>
      <symbol id="i-collapse" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 18L12.5 12L18.5 18" stroke="currentColor" stroke-width="2"></path>
        <path d="M6.5 12L12.5 6L18.5 12" stroke="currentColor" stroke-width="2"></path>
      </symbol>

      <symbol id="i-check" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.5724 25.9446L18.2866 26.5017L18.9114 25.846L29.7181 14.5056L28.2703 13.1259L18.0883 23.8106L12.1316 19.1644L10.9016 20.7414L17.5724 25.9446ZM38.2906 19.157C38.2906 29.1848 30.1614 37.3139 20.1336 37.3139C10.1058 37.3139 1.97668 29.1848 1.97668 19.157C1.97668 9.12914 10.1058 1 20.1336 1C30.1614 1 38.2906 9.12914 38.2906 19.157Z"
          stroke="currentColor"
          stroke-width="2"></path>
      </symbol>
    </svg>
    `,
      }}></div>
  )
}

export default IconSets
