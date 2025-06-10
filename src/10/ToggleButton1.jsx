import React, { useState } from "react";

function ToggleButton1() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "켜짐" : "꺼짐"}
    </button>
  );
}

export default ToggleButton1;
