// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dCBp3p2g2cgYAgGFEQRPSF
// Component: LewdDgl5ErzQ
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { RichCalendar } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-calendar";
import { calendarHelpers as RichCalendar_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-calendar";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: dCBp3p2g2cgYAgGFEQRPSF/projectcss
import sty from "./PlasmicCalender.module.css"; // plasmic-import: LewdDgl5ErzQ/css

createPlasmicElementProxy;

export const PlasmicCalender__VariantProps = new Array();

export const PlasmicCalender__ArgProps = new Array();

const $$ = {};

function PlasmicCalender__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "calendar.mode",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("mode", RichCalendar_Helpers)
      },
      {
        path: "calendar.selectedDate",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedDate", RichCalendar_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
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
      {(() => {
        const child$Props = {
          className: classNames("__wab_instance", sty.calendar),
          mode: generateStateValueProp($state, ["calendar", "mode"]),
          onChange: generateStateOnChangePropForCodeComponents(
            $state,
            "selectedDate",
            ["calendar", "selectedDate"],
            RichCalendar_Helpers
          ),
          onPanelChange: generateStateOnChangePropForCodeComponents(
            $state,
            "mode",
            ["calendar", "mode"],
            RichCalendar_Helpers
          ),
          value: generateStateValueProp($state, ["calendar", "selectedDate"])
        };
        initializeCodeComponentStates(
          $state,
          [
            {
              name: "mode",
              plasmicStateName: "calendar.mode"
            },
            {
              name: "selectedDate",
              plasmicStateName: "calendar.selectedDate"
            }
          ],

          [],
          RichCalendar_Helpers ?? {},
          child$Props
        );
        return (
          <RichCalendar
            data-plasmic-name={"calendar"}
            data-plasmic-override={overrides.calendar}
            {...child$Props}
          />
        );
      })()}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "calendar"],
  calendar: ["calendar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCalender__ArgProps,
          internalVariantPropNames: PlasmicCalender__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCalender__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCalender";
  } else {
    func.displayName = `PlasmicCalender.${nodeName}`;
  }
  return func;
}

export const PlasmicCalender = Object.assign(
  // Top-level PlasmicCalender renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    calendar: makeNodeComponent("calendar"),
    // Metadata about props expected for PlasmicCalender
    internalVariantProps: PlasmicCalender__VariantProps,
    internalArgProps: PlasmicCalender__ArgProps
  }
);

export default PlasmicCalender;
/* prettier-ignore-end */
