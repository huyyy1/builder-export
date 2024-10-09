import * as React from "react";
import { PlasmicSelect2__Option } from "./plasmic/simply_maid_production/PlasmicSelect2__Option";

function Select2__Option_(props, ref) {
  const { plasmicProps } = PlasmicSelect2__Option.useBehavior(props, ref);
  return <PlasmicSelect2__Option {...plasmicProps} />;
}

const Select2__Option = React.forwardRef(Select2__Option_);

export default Object.assign(Select2__Option, {
  __plumeType: "select-option"
});
