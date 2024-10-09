// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SmLocationIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 22c-2.683-2.283-4.688-4.404-6.013-6.363C.662 13.68 0 11.867 0 10.2c0-2.5.804-4.492 2.413-5.975C4.02 2.742 5.883 2 8 2h.5c.167 0 .333.017.5.05v2.025a3.396 3.396 0 00-.488-.063A9.791 9.791 0 008 4c-1.683 0-3.104.58-4.263 1.737C2.58 6.896 2 8.383 2 10.2c0 1.183.492 2.538 1.475 4.063.983 1.524 2.492 3.22 4.525 5.087 2.033-1.867 3.542-3.563 4.525-5.088C13.508 12.738 14 11.383 14 10.2V10h2v.2c0 1.667-.662 3.48-1.988 5.438C12.688 17.595 10.683 19.716 8 22zm0-10c.55 0 1.02-.196 1.412-.588.392-.391.588-.862.588-1.412 0-.55-.196-1.02-.588-1.412A1.926 1.926 0 008 8c-.55 0-1.02.196-1.412.588A1.926 1.926 0 006 10c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588zm6-4h2V5h3V3h-3V0h-2v3h-3v2h3v3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmLocationIcon;
/* prettier-ignore-end */
