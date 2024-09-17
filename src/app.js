import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);

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
// console.log(heading);

// react element through jsx //
//jsx javascript syntax to create html like or xml like syntax, note: it's not html it's html like syntax
// it also create a react element object, both jsxHeading and heading are reactt element object only.
// jsx => React.createElement => ReactElement-js Object => HTMLElement(render) this process is done by BABEL package which parcel use
// if using multiple line put in under () if line liner it's not needed
// const jsxHeading = <h1 className="heading">Namaste React using JSX</h1>;

// const Title = () => (
//   <h1 className="head">
//     Namaste React using JSX
//   </h1>
// );

// react functional component (any react component start with cpital letter)
// a javascript function that return jsx code/ react element is called functional component
// const HeaddingComponent = () => {
//   return  (
//     <div>
//       <Title />
//      <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );
// }


const Applayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); for core create by react.createElement
// root.render(jsxHeading);
root.render(<Applayout />);
