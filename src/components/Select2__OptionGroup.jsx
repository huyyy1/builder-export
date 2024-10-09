import * as React from "react";
import { PlasmicSelect2__OptionGroup } from "./plasmic/simply_maid_production/PlasmicSelect2__OptionGroup";

function Select2__OptionGroup(props) {
  const { plasmicProps } = PlasmicSelect2__OptionGroup.useBehavior(props);
  return <PlasmicSelect2__OptionGroup {...plasmicProps} />;
}

export default Object.assign(Select2__OptionGroup, {
  __plumeType: "select-option-group"
});
