import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!");



/** 
 * <div id="parent">
 *      <div id="child">
 *          <h1>
 *              some text
 *          </h1>
 *      </div>
 * </div>
 * reactElement(object) => HTML(Browser understand)
 * 
 * if siblings add them in array so that both elements behaves like sibling
 */

// const parent = react.createElement("div", {id: "parent"},  react.createElement("div", {id: "child"},  react.createElement("h1", {id: "innerheaderofchild"}, "some inner text of h1" )))

// will log react element which is a h1 type element which eventually is a javascript object with many properties
//   2nd parameter is attribute, third is children
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);