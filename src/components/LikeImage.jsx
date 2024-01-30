import React from 'react';
import CounterFunction from './Counter.jsx';

const LikeImage  = (e)=>{
  return (
    <div>
      <button onClick={e.adder}>Like Image {e.count}</button>
    </div>
  )
}
export default CounterFunction(LikeImage);