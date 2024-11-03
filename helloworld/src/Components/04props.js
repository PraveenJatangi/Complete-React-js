import React from "react";

const Props=(props)=> {
    return (
        <div>
            <h1>hello {props.name} and {props.heroName}, i am props example</h1>
            {props.childern}
        </div>
)};
export default Props; 

/*
In React, props are a keyword that stands for "properties" and 
are used to pass data from one component to another.
 Props are similar to HTML attributes and function arguments in JavaScript. 
 */