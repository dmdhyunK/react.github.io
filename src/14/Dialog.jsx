import React, { useState } from 'react';
import FancyBorder from './FancyBorder';

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

function SignUpDialog() {
  const [nickname, setNickname] = useState("");

  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSignUp = () => {
    alert(`어서오세요, ${nickname}님!`);
  };

  return (
    <Dialog
      title="화성 탐사 프로그램"
      message="우리 사이트를 방문하신 것을 환영합니다."
    >
      <label>
        이름:{" "}
        <input value={nickname} onChange={handleChange} />
        <button onClick={handleSignUp}>가입하기</button>
      </label>
    </Dialog>
  );
}

export default SignUpDialog;
