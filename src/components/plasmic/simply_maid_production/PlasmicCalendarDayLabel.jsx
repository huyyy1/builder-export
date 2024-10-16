// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dCBp3p2g2cgYAgGFEQRPSF
// Component: 89NRRkiv72_q
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: dCBp3p2g2cgYAgGFEQRPSF/projectcss
import sty from "./PlasmicCalendarDayLabel.module.css"; // plasmic-import: 89NRRkiv72_q/css

createPlasmicElementProxy;

export const PlasmicCalendarDayLabel__VariantProps = new Array();

export const PlasmicCalendarDayLabel__ArgProps = new Array("dayName");

const $$ = {};

function PlasmicCalendarDayLabel__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"headerTitle"}
        data-plasmic-override={overrides.headerTitle}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.headerTitle
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.dayName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "31";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "headerTitle"],
  headerTitle: ["headerTitle"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCalendarDayLabel__ArgProps,
          internalVariantPropNames: PlasmicCalendarDayLabel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCalendarDayLabel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCalendarDayLabel";
  } else {
    func.displayName = `PlasmicCalendarDayLabel.${nodeName}`;
  }
  return func;
}

export const PlasmicCalendarDayLabel = Object.assign(
  // Top-level PlasmicCalendarDayLabel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerTitle: makeNodeComponent("headerTitle"),
    // Metadata about props expected for PlasmicCalendarDayLabel
    internalVariantProps: PlasmicCalendarDayLabel__VariantProps,
    internalArgProps: PlasmicCalendarDayLabel__ArgProps
  }
);

export default PlasmicCalendarDayLabel;
/* prettier-ignore-end */
