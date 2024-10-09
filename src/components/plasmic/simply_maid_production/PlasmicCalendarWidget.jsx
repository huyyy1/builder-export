// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dCBp3p2g2cgYAgGFEQRPSF
// Component: 6v7jVWeUBcyA
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  set as $stateSet,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import BackNextButton from "../../BackNextButton"; // plasmic-import: FHgCil1DG0js/component
import CalendarDayLabel from "../../CalendarDayLabel"; // plasmic-import: 89NRRkiv72_q/component
import CalendarDayNumber from "../../CalendarDayNumber"; // plasmic-import: 1N_Heiz2pIMG/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: dCBp3p2g2cgYAgGFEQRPSF/projectcss
import sty from "./PlasmicCalendarWidget.module.css"; // plasmic-import: 6v7jVWeUBcyA/css
import {
  subMonths as __lib_dateFns__subMonths,
  format as __lib_dateFns__format,
  addMonths as __lib_dateFns__addMonths,
  addDays as __lib_dateFns__addDays,
  startOfWeek as __lib_dateFns__startOfWeek,
  startOfDay as __lib_dateFns__startOfDay,
  getMonth as __lib_dateFns__getMonth,
  isToday as __lib_dateFns__isToday,
  startOfMonth as __lib_dateFns__startOfMonth,
  isSameMonth as __lib_dateFns__isSameMonth
} from "date-fns";

createPlasmicElementProxy;

export const PlasmicCalendarWidget__VariantProps = new Array();

export const PlasmicCalendarWidget__ArgProps = new Array(
  "onSelectedDateChange"
);

const $$ = {
  dateFns: {
    subMonths: __lib_dateFns__subMonths,
    format: __lib_dateFns__format,
    addMonths: __lib_dateFns__addMonths,
    addDays: __lib_dateFns__addDays,
    startOfWeek: __lib_dateFns__startOfWeek,
    startOfDay: __lib_dateFns__startOfDay,
    getMonth: __lib_dateFns__getMonth,
    isToday: __lib_dateFns__isToday,
    startOfMonth: __lib_dateFns__startOfMonth,
    isSameMonth: __lib_dateFns__isSameMonth
  }
};

function PlasmicCalendarWidget__RenderFunc(props) {
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
        path: "selectedDate",
        type: "readonly",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({}),
        onChangeProp: "onSelectedDateChange"
      },
      {
        path: "currentMonth",
        type: "private",
        variableType: "dateString",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return new Date();
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "2024-09-04T12:08:41.037Z";
              }
              throw e;
            }
          })()
      },
      {
        path: "arrayOfDays",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
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
      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect)}
        deps={undefined}
        onMount={async () => {
          const $steps = {};
          $steps["updateCurrentMonth"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["currentMonth"]
                  },
                  operation: 0,
                  value: new Date()
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;
                  $stateSet(objRoot, variablePath, value);
                  return value;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateCurrentMonth"] != null &&
            typeof $steps["updateCurrentMonth"] === "object" &&
            typeof $steps["updateCurrentMonth"].then === "function"
          ) {
            $steps["updateCurrentMonth"] = await $steps["updateCurrentMonth"];
          }
        }}
      />

      <div
        data-plasmic-name={"calendar"}
        data-plasmic-override={overrides.calendar}
        className={classNames(projectcss.all, sty.calendar)}
      >
        <div
          data-plasmic-name={"month"}
          data-plasmic-override={overrides.month}
          className={classNames(projectcss.all, sty.month)}
        >
          <BackNextButton
            data-plasmic-name={"backButton"}
            data-plasmic-override={overrides.backButton}
            className={classNames("__wab_instance", sty.backButton)}
            direction={"back"}
            onClick={async event => {
              const $steps = {};
              $steps["updateCurrentMonth"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["currentMonth"]
                      },
                      operation: 0,
                      value: $$.dateFns.subMonths($state.currentMonth, 1)
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;
                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateCurrentMonth"] != null &&
                typeof $steps["updateCurrentMonth"] === "object" &&
                typeof $steps["updateCurrentMonth"].then === "function"
              ) {
                $steps["updateCurrentMonth"] = await $steps[
                  "updateCurrentMonth"
                ];
              }
            }}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $$.dateFns.format($state.currentMonth, "MMMM Y");
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Month YYYY";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <BackNextButton
            data-plasmic-name={"nextButton"}
            data-plasmic-override={overrides.nextButton}
            className={classNames("__wab_instance", sty.nextButton)}
            direction={"next"}
            onClick={async event => {
              const $steps = {};
              $steps["updateCurrentMonth"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["currentMonth"]
                      },
                      operation: 0,
                      value: $$.dateFns.addMonths($state.currentMonth, 1)
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;
                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateCurrentMonth"] != null &&
                typeof $steps["updateCurrentMonth"] === "object" &&
                typeof $steps["updateCurrentMonth"].then === "function"
              ) {
                $steps["updateCurrentMonth"] = await $steps[
                  "updateCurrentMonth"
                ];
              }
            }}
          />
        </div>
        <Stack__
          as={"div"}
          data-plasmic-name={"calendarDayNames"}
          data-plasmic-override={overrides.calendarDayNames}
          hasGap={true}
          className={classNames(projectcss.all, sty.calendarDayNames)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__irPif)}>
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return (() => {
                    const days = [];
                    for (let i = 0; i < 7; i++) {
                      days.push(
                        $$.dateFns.format(
                          $$.dateFns.addDays(
                            $$.dateFns.startOfWeek(new Date()),
                            i
                          ),
                          "EEEEEE"
                        )
                      );
                    }
                    return days;
                  })();
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <CalendarDayLabel
                  data-plasmic-name={"calendarDayLabel"}
                  data-plasmic-override={overrides.calendarDayLabel}
                  className={classNames("__wab_instance", sty.calendarDayLabel)}
                  dayName={(() => {
                    try {
                      return currentItem;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  key={currentIndex}
                />
              );
            })}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"calendarDayNumbers"}
          data-plasmic-override={overrides.calendarDayNumbers}
          hasGap={true}
          className={classNames(projectcss.all, sty.calendarDayNumbers)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__lofxb)}>
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return (() => {
                    const formatDateObject = date => {
                      return {
                        date: date,
                        day: $$.dateFns.format(date, "d"),
                        month: $$.dateFns.format(date, "M"),
                        year: $$.dateFns.format(date, "yyyy"),
                        isCurrentMonth:
                          $$.dateFns.getMonth(date) ==
                          $$.dateFns.getMonth($state.currentMonth),
                        isCurrentDay: $$.dateFns.isToday(date)
                      };
                    };
                    let currentMonth = $state.currentMonth;
                    let currentDate = $$.dateFns.startOfWeek(
                      $$.dateFns.startOfMonth(currentMonth)
                    );
                    const nextMonth = $$.dateFns.addMonths(currentMonth, 1);
                    let allDates = [];
                    let weekDates = [];
                    let weekCounter = 1;
                    while (
                      !$$.dateFns.isSameMonth(
                        $$.dateFns.startOfWeek(currentDate),
                        nextMonth
                      )
                    ) {
                      let formatted = formatDateObject(currentDate);
                      allDates.push(formatted);
                      currentDate = $$.dateFns.addDays(currentDate, 1);
                    }
                    return allDates;
                  })();
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <CalendarDayNumber
                  data-plasmic-name={"calendarDayNumber"}
                  data-plasmic-override={overrides.calendarDayNumber}
                  className={classNames(
                    "__wab_instance",
                    sty.calendarDayNumber
                  )}
                  day={(() => {
                    try {
                      return currentItem.day;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  key={currentIndex}
                  onClick={async event => {
                    const $steps = {};
                    $steps["updateSelectedDate"] = currentItem.isCurrentMonth
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["selectedDate"]
                            },
                            operation: 0,
                            value: currentItem.date
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;
                            $stateSet(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateSelectedDate"] != null &&
                      typeof $steps["updateSelectedDate"] === "object" &&
                      typeof $steps["updateSelectedDate"].then === "function"
                    ) {
                      $steps["updateSelectedDate"] = await $steps[
                        "updateSelectedDate"
                      ];
                    }
                  }}
                  style2={(() => {
                    try {
                      return (() => {
                        if (!currentItem.isCurrentMonth) {
                          return "muted";
                        } else if (
                          $$.dateFns.startOfDay(currentItem.date).toString() ==
                          $$.dateFns
                            .startOfDay(new Date($state.selectedDate))
                            .toString()
                        ) {
                          return "selected";
                        } else if (currentItem.isCurrentDay) {
                          return "current";
                        }
                      })();
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()}
                />
              );
            })}
          </div>
        </Stack__>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "sideEffect",
    "calendar",
    "month",
    "backButton",
    "text",
    "nextButton",
    "calendarDayNames",
    "calendarDayLabel",
    "calendarDayNumbers",
    "calendarDayNumber"
  ],

  sideEffect: ["sideEffect"],
  calendar: [
    "calendar",
    "month",
    "backButton",
    "text",
    "nextButton",
    "calendarDayNames",
    "calendarDayLabel",
    "calendarDayNumbers",
    "calendarDayNumber"
  ],

  month: ["month", "backButton", "text", "nextButton"],
  backButton: ["backButton"],
  text: ["text"],
  nextButton: ["nextButton"],
  calendarDayNames: ["calendarDayNames", "calendarDayLabel"],
  calendarDayLabel: ["calendarDayLabel"],
  calendarDayNumbers: ["calendarDayNumbers", "calendarDayNumber"],
  calendarDayNumber: ["calendarDayNumber"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCalendarWidget__ArgProps,
          internalVariantPropNames: PlasmicCalendarWidget__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCalendarWidget__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCalendarWidget";
  } else {
    func.displayName = `PlasmicCalendarWidget.${nodeName}`;
  }
  return func;
}

export const PlasmicCalendarWidget = Object.assign(
  // Top-level PlasmicCalendarWidget renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    calendar: makeNodeComponent("calendar"),
    month: makeNodeComponent("month"),
    backButton: makeNodeComponent("backButton"),
    text: makeNodeComponent("text"),
    nextButton: makeNodeComponent("nextButton"),
    calendarDayNames: makeNodeComponent("calendarDayNames"),
    calendarDayLabel: makeNodeComponent("calendarDayLabel"),
    calendarDayNumbers: makeNodeComponent("calendarDayNumbers"),
    calendarDayNumber: makeNodeComponent("calendarDayNumber"),
    // Metadata about props expected for PlasmicCalendarWidget
    internalVariantProps: PlasmicCalendarWidget__VariantProps,
    internalArgProps: PlasmicCalendarWidget__ArgProps
  }
);

export default PlasmicCalendarWidget;
/* prettier-ignore-end */
