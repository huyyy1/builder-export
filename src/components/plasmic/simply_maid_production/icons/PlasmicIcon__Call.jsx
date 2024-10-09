// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CallIcon(props) {
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
          "M18.778 20c-2.204 0-4.426-.514-6.667-1.542-2.24-1.027-4.305-2.486-6.194-4.375-1.89-1.889-3.348-3.953-4.375-6.194C.514 5.649 0 3.426 0 1.222 0 .876.117.586.352.352.586.117.876 0 1.222 0h4.093a.95.95 0 01.676.273c.191.182.318.406.38.671l.74 3.63c.037.272.03.512-.018.722-.05.21-.148.39-.297.537l-2.75 2.778c.445.772.93 1.499 1.459 2.18.527.683 1.11 1.332 1.745 1.95.648.66 1.33 1.267 2.046 1.82a17.195 17.195 0 002.26 1.476l2.63-2.685a1.45 1.45 0 01.643-.403c.25-.077.498-.097.745-.06l3.482.74c.271.075.496.218.675.431.18.213.269.452.269.718v4c0 .346-.117.636-.352.87a1.182 1.182 0 01-.87.352z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CallIcon;
/* prettier-ignore-end */
