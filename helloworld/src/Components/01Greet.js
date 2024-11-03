import React from "react";

const Greet=(props)=> {
    return (
        <div>
            <h1>hello {props.name} and {props.heroName}, i am function component</h1>
            {props.childern}
        </div>
)};
export default Greet; //this is default export 

// these is also name export  *export const Greet=()=> <h1>hello praveen</h1>;*
// where we need to import with same variable name
