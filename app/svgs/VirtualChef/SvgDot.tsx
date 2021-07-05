import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Rect opacity={0.01} width={24} height={24} fill="black" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 0.998047H2.97011C1.99995 0.998047 0.984741 0.998047 0.984741 2.99805V4H23V3C23 0.999998 22 0.998047 21 0.998047ZM1.99995 21C1.99995 22 2.97011 23 3.99263 23H19.9913C21 23 22 22 22 21V6H1.99995V21ZM16.9107 10.6892C16.837 10.389 16.7265 10.1126 16.4009 10H16.1967C16.164 10.0191 16.1312 10.038 16.0984 10.0568C16.0086 10.1084 15.9188 10.16 15.8328 10.2174C15.8056 10.2356 15.7848 10.2953 15.792 10.3292C15.8763 10.7243 15.8571 11.1217 15.8198 11.5186C15.744 12.3232 15.5743 13.11 15.357 13.8865C15.0738 14.8982 14.7252 15.8848 14.2149 16.8061C14.0152 17.1667 13.7903 17.51 13.4848 17.7913C13.3503 17.9151 13.2015 18.016 13.0217 18.0619C12.7806 18.1234 12.595 18.0462 12.4859 17.8217C12.4358 17.7184 12.3999 17.6047 12.3776 17.4917C12.2712 16.9519 12.3234 16.4108 12.386 15.872C12.4771 15.0878 12.6353 14.3156 12.8266 13.5505C13.0453 12.6763 13.2787 11.8066 13.643 10.9792C13.6526 10.9574 13.6492 10.9168 13.6348 10.8991C13.4303 10.6491 13.1934 10.441 12.8794 10.3432C12.574 10.248 12.3625 10.3428 12.2265 10.6312C12.1991 10.6894 12.1714 10.7475 12.1437 10.8057C12.0551 10.9917 11.9665 11.1777 11.8854 11.367C11.3311 12.6606 10.7785 13.9549 10.2259 15.2492C10.0448 15.6734 9.86374 16.0976 9.68259 16.5217L9.47425 17.0093C9.45997 16.9835 9.45854 16.9611 9.46249 16.9398C9.50845 16.6901 9.5547 16.4404 9.60094 16.1907C9.68015 15.7631 9.75935 15.3355 9.83717 14.9076L9.84588 14.8597C9.98659 14.0863 10.1273 13.3128 10.161 12.5245C10.179 12.1045 10.1632 11.6874 10.0498 11.2795C9.89648 10.7282 9.55981 10.3712 8.98521 10.2754C8.64409 10.2185 8.30605 10.2494 7.97395 10.3397C7.28689 10.5266 6.75183 10.9429 6.30737 11.4865C5.68914 12.2428 5.30711 13.114 5.10639 14.0681C5.02001 14.4787 4.96609 14.8939 5.02416 15.3148C5.07107 15.655 5.25206 15.8803 5.52821 15.9263C5.87714 15.9844 6.1887 15.8621 6.49314 15.7091C6.37847 15.4572 6.3336 15.2876 6.3308 15.0467C6.31775 13.9262 6.62021 12.887 7.13895 11.9061C7.26906 11.66 7.42946 11.4334 7.64578 11.2535C7.76629 11.1533 7.89977 11.0791 8.0598 11.0738C8.30176 11.0656 8.49194 11.2012 8.59652 11.4581C8.68963 11.6868 8.71615 11.929 8.72058 12.1735C8.73549 12.996 8.58344 13.7984 8.42304 14.5987C8.33097 15.0582 8.23534 15.517 8.13972 15.9758C8.05708 16.3722 7.97444 16.7687 7.89409 17.1657C7.84215 17.4223 7.81833 17.6823 7.91053 17.9378C8.07293 18.3879 8.39496 18.692 8.79954 18.917C9.02401 19.0418 9.02689 19.0372 9.15987 18.8247L9.16035 18.8239L9.16591 18.8153C9.99636 17.4767 10.7338 16.0867 11.4185 14.6676C11.4306 14.6423 11.4433 14.6173 11.4593 14.5857C11.468 14.5687 11.4776 14.5497 11.4886 14.5277C11.4886 14.5435 11.4887 14.5545 11.4889 14.5626C11.489 14.5747 11.4891 14.5806 11.4885 14.5863C11.406 15.3258 11.391 16.0651 11.499 16.8034C11.5644 17.2502 11.6735 17.6841 11.8924 18.0829C12.2389 18.7145 12.7931 18.9712 13.476 18.8106C13.8565 18.7211 14.1756 18.5138 14.4633 18.2545C14.8842 17.8752 15.2146 17.4221 15.4878 16.9286C16.3629 15.3477 16.8621 13.6517 16.987 11.8458C17.0137 11.4585 17.0041 11.0696 16.9107 10.6892Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={23}
          y1={0.998047}
          x2={0.984741}
          y2={0.998047}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgDot = React.memo(SvgComponent);
export default SvgDot;