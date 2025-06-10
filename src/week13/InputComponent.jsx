import React, { useState, useEffect } from "react";

function InputComponent() {
  const [value, setValue] = useState("hi");

  useEffect(() => {
    // 1초 뒤에 빈 문자열로 변경
    const timeout1 = setTimeout(() => {
      setValue("");
    }, 1000);

    // 2초 뒤에 다시 "hi"로 복원
    const timeout2 = setTimeout(() => {
      setValue("hi");
    }, 2000);

    // cleanup
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)} 
    />
  );
}

export default InputComponent;
