/*
JavaScript XML (JSX) — Extension to the JavaScript language syntax.
Write XML-Iike code for elements and components.
JSX tags have a tag name, attributes, and children.
JSX is not a necessity to write React applications.
JSX makes your react code simpler and elegant.
JSX ultimately transpiles to pure JavaScript which is understood by the browsers.
*/
import React from "react";

const Hello=()=>{
    // return (
    //     <div>
    //         <h1>hello jsx </h1>
    //     </div>
    // )

    return React.createElement('h1',{id:'hi',className:'new'},'hello jsx')
};

export default Hello;

/* JSX differences
Class -> className
for -> htmlFor
camelCase property naming convention
o onclick -> onClick
o tabindex -> tablndex */