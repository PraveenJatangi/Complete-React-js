//class based components 
// it requires two imports ,react and component

import React,{Component} from "react";

class Welcome extends Component{
    render(){
    return <h1>hello {this.props.name} i am class component</h1>

    }
}

export default Welcome;

/* - more feature rich 
   - own private data
   -complex ui logic
   - lifecycle hooks
   - stateful ,containers
 */