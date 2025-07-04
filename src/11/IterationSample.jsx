import React,{useState} from 'react';

const IterationSample=()=>{
    const [names,setNames]=useState([
        {id:1,text:'눈사람'},
        {id:2,text:'얼음'},
        {id:3,text:'눈보라'},
        {id:4,text:'순록'},

    ]);
    const [inputText,setInputText]=useState('');
    const [nextId,SetNextId]=useState(5);

    const onChange=e=> setInputText(e.target.value);
    const onClick=()=>{
        const nextNames=names.concat({
            id:nextId,
            text:inputText
        });
        SetNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove=id=>{
        const nextNames = names.filter(name=>name.id!==id);
        setNames(nextNames);
    };
    const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
    const namesList=names.map(name=>(
        <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}
        <button onClick={()=>onRemove(name.id)}>삭제</button></li>
    ));
    return(
        <>
        <input value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
        <button onClick={onClick}>추가</button>
        <ul>{namesList}</ul>
        </>
    );
};
export default IterationSample;