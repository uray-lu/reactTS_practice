import React from 'react';

interface Counterprops{
    count: number;
    setCount: (count: number) => void;
    title: string;
}

const Counter = (props: Counterprops) => {
    return (
    <div>
        <h1>{props.title}</h1>
        <p>count: {props.count} </p>
        <button onClick={() => props.setCount(props.count+1)}>+</button>
    </div>
  );
}

export default Counter;