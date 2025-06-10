import React, {useState, useEffect} from "react"

const btnStyle1={
    marginRight:"10px",
    fontWeight:"bold",
    borderRadius:"5px",
    width:"50px",
    height:"30px",
};

const btnStyle2={
    fontWeight:"bold",
    borderRadius: "15px",
    width:"50px",
    height: "30px",
};

function HookEx01(props){
    const[count, setCount]=useState(0);
    useEffect(() => {
  //타이틀 업데이트
  document.title = `총 ${count}번 클릭했습니다.`;
});
    
    return (
    <div style={{ padding: 16, fontWeight: "bold" }}>
        <p>{`현재 카운터 값은 ${count} 입니다.`}</p>

    <button style={btnStyle1} onClick={() => setCount(count + 1)}>
      +1
    </button>
    <button style={btnStyle2} onClick={() => setCount(count - 1)}>
      -1
    </button>
  </div>
);
}
export default HookEx01;