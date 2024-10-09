// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star51Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.442 2.925l1.466 2.933c.2.409.734.8 1.184.875l2.658.442c1.7.283 2.1 1.517.875 2.733l-2.067 2.067c-.35.35-.541 1.025-.433 1.508l.592 2.559c.466 2.025-.609 2.808-2.4 1.75l-2.492-1.475c-.45-.267-1.192-.267-1.65 0l-2.492 1.475c-1.783 1.058-2.866.266-2.4-1.75l.592-2.559c.108-.483-.083-1.158-.433-1.508L2.375 9.908c-1.217-1.216-.825-2.45.875-2.733l2.658-.442c.442-.075.975-.466 1.175-.875L8.55 2.925c.8-1.592 2.1-1.592 2.892 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star51Icon;
/* prettier-ignore-end */
