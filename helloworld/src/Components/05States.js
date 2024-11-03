import React,{Component} from "react";

class Message extends Component{ 
    constructor(){
        super()
            this.state ={
                 Message:"hello, welcome to statessss"
            }
        }
     changeMessage(){
        this.setState(
            {
                Message:"You are subscribed to states "
            }
        )
     }
    render(){
        return(
            <div>
                 <h1>{this.state.Message}</h1>
                 <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
} 
export default Message;