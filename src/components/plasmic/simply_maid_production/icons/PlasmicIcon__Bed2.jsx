// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Bed2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 18.325V10.47c0-.589.12-1.123.36-1.603s.556-.906.949-1.276V3.927c0-1.091.382-2.018 1.145-2.782C3.218.382 4.144 0 5.236 0h5.235c.502 0 .971.093 1.407.278.437.186.84.442 1.211.77a4.46 4.46 0 011.21-.77A3.56 3.56 0 0115.708 0h5.235c1.091 0 2.018.382 2.782 1.145.763.764 1.145 1.691 1.145 2.782v3.665c.393.37.71.796.95 1.276.239.48.359 1.014.359 1.603v7.854H23.56v-2.618H2.618v2.618H0zm14.398-11.78h7.853V3.926c0-.371-.125-.682-.376-.933a1.266 1.266 0 00-.933-.376h-5.235c-.371 0-.682.125-.933.376a1.27 1.27 0 00-.376.933v2.618zm-10.471 0h7.853V3.927c0-.371-.125-.682-.376-.933a1.266 1.266 0 00-.933-.376H5.236c-.371 0-.682.125-.933.376a1.27 1.27 0 00-.376.933v2.618zm-1.31 6.544H23.56v-2.618c0-.37-.125-.682-.376-.932a1.266 1.266 0 00-.933-.377H3.927c-.371 0-.682.126-.933.377-.25.25-.376.561-.376.932v2.618z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Bed2Icon;
/* prettier-ignore-end */
