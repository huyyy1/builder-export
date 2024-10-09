import * as React from "react";
import { PlasmicSelect2__Overlay } from "./plasmic/simply_maid_production/PlasmicSelect2__Overlay";

function Select2__Overlay_(props, ref) {
  const { plasmicProps } = PlasmicSelect2__Overlay.useBehavior(props, ref);
  return <PlasmicSelect2__Overlay {...plasmicProps} />;
}

const Select2__Overlay = React.forwardRef(Select2__Overlay_);

export default Object.assign(Select2__Overlay, {
  __plumeType: "triggered-overlay"
});
