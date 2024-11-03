import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props){
        super(props)
      
        this.state = {
            count: 0
        }
      }
   increment(){
    // this.setState({
    //     count:this.state.count+1
    // },
    // ()=>{console.log("callback value",this.state.count)})
    this.setState(previousState=>({
        count:previousState.count+1
   }))
    console.log(this.state.count);
    
   }
  incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
    render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={()=>this.incrementFive()}>counter</button>
      </div>
    )
  }
}

export default Counter;
