import { FC } from 'react'

interface Props {
  className: string
}

export const GitHubIcon: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <svg
      className={className}
      {...otherProps}
      width="50"
      height="52"
      viewBox="0 0 50 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub Icon</title>
      <path
        d="M16.7238 39.8718C16.7238 40.0725 16.4919 40.233 16.1996 40.233C15.8669 40.2631 15.6351 40.1026 15.6351 39.8718C15.6351 39.6712 15.8669 39.5106 16.1593 39.5106C16.4617 39.4805 16.7238 39.6411 16.7238 39.8718ZM13.5887 39.4203C13.5181 39.621 13.7198 39.8518 14.0222 39.912C14.2843 40.0123 14.5867 39.912 14.6472 39.7113C14.7077 39.5106 14.5161 39.2799 14.2137 39.1896C13.9516 39.1193 13.6593 39.2197 13.5887 39.4203ZM18.0444 39.2498C17.752 39.32 17.5504 39.5106 17.5806 39.7414C17.6109 39.9421 17.873 40.0725 18.1754 40.0023C18.4677 39.932 18.6694 39.7414 18.6391 39.5407C18.6089 39.3501 18.3367 39.2197 18.0444 39.2498ZM24.6774 0.802643C10.6956 0.802643 0 11.3676 0 25.2836C0 36.4104 7.03629 45.9319 17.0867 49.283C18.377 49.5137 18.8306 48.7211 18.8306 48.0689C18.8306 47.4469 18.8004 44.0155 18.8004 41.9086C18.8004 41.9086 11.744 43.4135 10.2621 38.9187C10.2621 38.9187 9.1129 35.999 7.45968 35.2465C7.45968 35.2465 5.15121 33.6713 7.62097 33.7014C7.62097 33.7014 10.131 33.9021 11.5121 36.29C13.7198 40.1628 17.4194 39.0491 18.8609 38.3869C19.0927 36.7816 19.748 35.6679 20.4738 35.0057C14.8387 34.3837 9.15323 33.571 9.15323 23.9191C9.15323 21.16 9.91936 19.7754 11.5323 18.0095C11.2702 17.3574 10.4133 14.6685 11.7944 11.197C13.9012 10.5449 18.75 13.906 18.75 13.906C20.7661 13.3441 22.9335 13.0532 25.0806 13.0532C27.2278 13.0532 29.3952 13.3441 31.4113 13.906C31.4113 13.906 36.2601 10.5348 38.3669 11.197C39.748 14.6785 38.8911 17.3574 38.629 18.0095C40.2419 19.7854 41.2298 21.17 41.2298 23.9191C41.2298 33.6011 35.2923 34.3736 29.6573 35.0057C30.5847 35.7984 31.371 37.3033 31.371 39.6611C31.371 43.0423 31.3407 47.2261 31.3407 48.0489C31.3407 48.701 31.8044 49.4936 33.0847 49.2629C43.1653 45.9319 50 36.4104 50 25.2836C50 11.3676 38.6593 0.802643 24.6774 0.802643ZM9.79839 35.4071C9.66734 35.5074 9.69758 35.7382 9.86895 35.9288C10.0302 36.0893 10.2621 36.1596 10.3931 36.0291C10.5242 35.9288 10.494 35.698 10.3226 35.5074C10.1613 35.3469 9.92943 35.2766 9.79839 35.4071ZM8.70968 34.5944C8.63911 34.7248 8.73992 34.8853 8.94153 34.9857C9.10282 35.086 9.30444 35.0559 9.375 34.9154C9.44556 34.785 9.34476 34.6245 9.14314 34.5241C8.94153 34.464 8.78024 34.494 8.70968 34.5944ZM11.9758 38.1662C11.8145 38.2966 11.875 38.5976 12.1069 38.7882C12.3387 39.019 12.631 39.0491 12.7621 38.8886C12.8931 38.7581 12.8327 38.4572 12.631 38.2665C12.4093 38.0358 12.1069 38.0057 11.9758 38.1662ZM10.8266 36.6913C10.6653 36.7916 10.6653 37.0525 10.8266 37.2833C10.9879 37.514 11.2601 37.6144 11.3911 37.514C11.5524 37.3836 11.5524 37.1227 11.3911 36.892C11.25 36.6612 10.9879 36.5609 10.8266 36.6913Z"
        fill="white"
      />
    </svg>
  )
}