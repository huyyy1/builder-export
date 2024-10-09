// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.422 23.978c-.6 0-1.12-.22-1.56-.661C.42 22.876.2 22.356.2 21.756V2.222c0-.6.22-1.12.661-1.56C1.301.22 1.822 0 2.422 0h20.89c.6 0 1.12.22 1.56.661.44.44.661.961.661 1.561v19.534c0 .6-.22 1.12-.66 1.56-.442.441-.962.662-1.562.662H2.422zm0-6.69v4.468h20.89v-4.467H2.421zm16.222-2.221h4.667V2.222h-4.667v12.845zm-16.222 0H7.09V2.222H2.422v12.845zm6.889 0h7.111V2.222H9.311v12.845z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
