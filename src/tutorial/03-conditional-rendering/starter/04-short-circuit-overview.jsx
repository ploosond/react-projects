import { useState } from "react";

const ShortCircuitOverview = () => {
  const [noName, setNoName] = useState("");
  const [prajwol, setPrajwol] = useState("Prajwol");
  return (
    <div>
      <h2>short circuit overview</h2>
      <h2>Fasly: {noName && prajwol}</h2>
      <h2>Truthy: {noName || prajwol}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
