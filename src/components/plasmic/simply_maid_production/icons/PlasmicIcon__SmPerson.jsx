// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SmPersonIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.5 8c-1.1 0-2.042-.392-2.825-1.175C4.892 6.042 4.5 5.1 4.5 4s.392-2.042 1.175-2.825C6.458.392 7.4 0 8.5 0s2.042.392 2.825 1.175C12.108 1.958 12.5 2.9 12.5 4s-.392 2.042-1.175 2.825C10.542 7.608 9.6 8 8.5 8zm-8 8v-2.8c0-.567.146-1.087.438-1.563A2.911 2.911 0 012.1 10.55a14.844 14.844 0 013.15-1.163 13.83 13.83 0 016.5 0c1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.476.438.996.438 1.563V16H.5zm2-2h12v-.8a.973.973 0 00-.5-.85c-.9-.45-1.808-.787-2.725-1.012a11.6 11.6 0 00-5.55 0C4.808 11.563 3.9 11.9 3 12.35a.973.973 0 00-.5.85v.8zm6-8c.55 0 1.02-.196 1.412-.588.392-.391.588-.862.588-1.412 0-.55-.196-1.02-.588-1.413A1.926 1.926 0 008.5 2c-.55 0-1.02.196-1.412.587A1.926 1.926 0 006.5 4c0 .55.196 1.02.588 1.412C7.479 5.804 7.95 6 8.5 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmPersonIcon;
/* prettier-ignore-end */
