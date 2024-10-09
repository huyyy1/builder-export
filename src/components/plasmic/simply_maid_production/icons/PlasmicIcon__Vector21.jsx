// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector21Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 299 66"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 9.863c16.608 13.321 29.725 18.96 51.03 18.013 19.241-.855 40.17-9.991 58.065-16.65 22.156-8.242 65.646-14.685 78.52 11.555 9.997 20.375-4.986 44.739-28.565 38.108-9.091-2.556-13.788-14.69-9.762-23.109 4.349-9.092 17.35-13.475 26.341-15.573 24.147-5.634 40.234 16.983 62.084 20.956 20.414 3.71 35.573-5.433 51.031-17.798 1.324-1.06.646 5.988.646 7.75 0 6.462 1.292 3.594 1.292-1.291 0-3.143 1.655-9.823-2.584-8.038-3.059 1.287-9.487 1.579-12.919 1.579"
        }
        stroke={"currentColor"}
        strokeWidth={"6.493"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */
