// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SmEmailIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 18a8.762 8.762 0 01-3.51-.709 9.089 9.089 0 01-2.858-1.924A9.089 9.089 0 01.71 12.51 8.764 8.764 0 010 9c0-1.245.236-2.415.709-3.51a9.089 9.089 0 011.923-2.858A9.089 9.089 0 015.49.71 8.764 8.764 0 019 0c1.245 0 2.415.236 3.51.709a9.089 9.089 0 012.857 1.923 9.089 9.089 0 011.924 2.858A8.762 8.762 0 0118 9v1.305c0 .885-.304 1.639-.911 2.261-.608.623-1.354.934-2.239.934-.525 0-1.02-.113-1.485-.338a3.171 3.171 0 01-1.17-.967 4.33 4.33 0 01-1.474.979A4.62 4.62 0 019 13.5c-1.245 0-2.306-.439-3.184-1.316C4.94 11.306 4.5 10.245 4.5 9s.439-2.306 1.316-3.184C6.694 4.94 7.755 4.5 9 4.5s2.306.439 3.184 1.316C13.06 6.694 13.5 7.755 13.5 9v1.305c0 .39.127.72.383.99.255.27.577.405.967.405s.713-.135.968-.405.382-.6.382-.99V9c0-2.01-.697-3.713-2.092-5.107C12.712 2.498 11.01 1.8 9 1.8s-3.713.698-5.107 2.093C2.498 5.287 1.8 6.99 1.8 9c0 2.01.698 3.713 2.093 5.107C5.287 15.503 6.99 16.2 9 16.2h4.5V18H9zm0-6.3c.75 0 1.387-.262 1.912-.787A2.604 2.604 0 0011.7 9a2.6 2.6 0 00-.787-1.912A2.604 2.604 0 009 6.3c-.75 0-1.388.263-1.912.788A2.604 2.604 0 006.3 9c0 .75.263 1.387.788 1.912A2.604 2.604 0 009 11.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmEmailIcon;
/* prettier-ignore-end */
