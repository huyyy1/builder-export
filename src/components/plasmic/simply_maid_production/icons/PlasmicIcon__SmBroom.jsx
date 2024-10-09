// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SmBroomIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.5 20v-6.364c0-1.257.46-2.33 1.381-3.215.921-.887 2.035-1.33 3.341-1.33h.945V1.818c0-.5.185-.928.555-1.284C7.092.178 7.536 0 8.056 0h1.888c.52 0 .965.178 1.334.534.37.356.555.784.555 1.284v7.273h.945c1.306 0 2.42.443 3.34 1.33.922.886 1.382 1.958 1.382 3.215V20H.5zm1.889-1.818h1.889v-2.727c0-.258.09-.474.271-.648a.933.933 0 01.673-.261c.268 0 .492.087.673.26a.867.867 0 01.272.649v2.727h1.889v-2.727c0-.258.09-.474.271-.648A.933.933 0 019 14.546c.268 0 .492.087.673.26a.87.87 0 01.271.649v2.727h1.89v-2.727c0-.258.09-.474.27-.648a.933.933 0 01.674-.261c.267 0 .492.087.673.26a.87.87 0 01.271.649v2.727h1.89v-4.546a2.58 2.58 0 00-.827-1.931c-.551-.53-1.22-.796-2.007-.796H5.222c-.787 0-1.456.265-2.007.795a2.581 2.581 0 00-.826 1.932v4.546zM9.944 9.09V1.818H8.056v7.273h1.888z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmBroomIcon;
/* prettier-ignore-end */
