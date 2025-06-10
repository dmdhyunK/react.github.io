import React from "react";
import styled from "styled-components";

const Wrapper =styled.div`
padding:1rem;
display:flex;
align-items:flex-start;
background-color:lightgray;
`;
const Block = styled.div`
  padding: ${(props) => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-right: 1rem;
`;
const blockItems = [
  { label: "1", padding: "1rem", backgroundColor: "red" },
  { label: "2", padding: "3rem", backgroundColor: "green" },
  { label: "3", padding: "2rem", backgroundColor: "blue" },
];

function BlockRow() {
  return (
    <Wrapper>
      {blockItems.map((item, index) => (
        <Block
          key={index}
          padding={item.padding}
          backgroundColor={item.backgroundColor}
        >
          {item.label}
        </Block>
      ))}
    </Wrapper>
  );
}

export default BlockRow;