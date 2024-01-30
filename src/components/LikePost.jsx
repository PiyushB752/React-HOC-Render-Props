import React from 'react';
import CounterFunction from './Counter.jsx';

const LikePost = (e) => {
  return (
    <div>
      <button onClick={e.adder}>Like Post {e.count}</button>
    </div>
  );
} 

export default CounterFunction(LikePost);