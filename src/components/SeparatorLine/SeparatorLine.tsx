import React from "react";

const SeparatorLine: React.FC<{ color?: string }> = ({ color = "black" }) => {
  return (
    <div style={{ width: "100%", backgroundColor: color, height: "1px" }}></div>
  );
};

export default SeparatorLine;
