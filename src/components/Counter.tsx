import React, { useState, useEffect, useRef } from 'react';

interface Counterprops{
    count: number;
    setCount: (count: number) => void;
    title: string;
}

const Counter = (props: Counterprops) => {
    const [changeTime, setChangeTime] = useState<number>(0);
    const isInitialMount = useRef(true);

    useEffect(()=> {
        if (isInitialMount.current) {
            props.setCount(1); // 只在组件首次渲染时设置count为100
            isInitialMount.current = false; // 然后标记不再是首次渲染
            console.log('test1')
        }
    },[]);

    useEffect(() => {
        if (!isInitialMount.current) { // 如果不是首次渲染
            setChangeTime(changeTime + 1);
        }
    }, [props.count]);

    return (
    <div>
        <h1>{props.title}</h1>
        <p className="countStyle">count: {props.count} </p>
        <button onClick={() => props.setCount(props.count+1)}>+</button>
        <p>count 的 prop 被更改了 {changeTime} 次</p>
        {changeTime>8 ? <h5 style= {{color:'red'}}>改動太多次了</h5> : null}
        {props.count>10 && <h5 style= {{color:'red'}}>太大了</h5>}
    </div>
  );
}

export default Counter;