import React, {useState,useCallback} from "react";

function MeasureExample(props) {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>안녕, 리액트</h1>
      <h2>위 헤더의 높이는 {Math.round(height)}px입니다.</h2>
    </>
  );
}

// export default callbackRef;