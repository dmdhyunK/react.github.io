import React from 'react';

function NumberList(props) {
    const numbers=[1,2,3,4,5];
//   const { numbers } = props;

//   const listItems = numbers.map((number) => (
//     <li key={number}>{number}</li>
//   ));
const{todos}=props;
const todoItems=todos.map((todo)=>
<li key={todo}>
    {todo}
</li>
)
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default NumberList;
