import React from 'react';

const CounterFunction = (Content) => {
    class CounterF extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count:0
      }
    }
    adder =()=>{
        this.setState((e)=>{
            return{count:e.count + 1}
        })
    }
    render(){
        return <Content count={this.state.count} adder={this.adder}/>
    }
  }
  return CounterF
}

export default CounterFunction;