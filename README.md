# learn_react

    
    
/**
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 *  - search
 *  - Restaurent container
 *    - restrurantCard
 *      - name of Res
 *      - star rating
 *      - cuisine
 *      - delivery time
 *
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


 # React Hooks
 (Normal JS utility function) written by Facebook developer 
    -useState() - superpowerfull state variables in React
       1 always create usestate variable inside a functional component and keep it on the top. dont use it inside function, IF, loops
    -useEffect()-  // as soon as the body(component) renders it will eventually call the useEffect hook it has two arguments first is arrow function second is dependecy array(its not mandatory)
  // if no dependency array is given then useEffect  is called on every render
  // if dependency array is empty is provided then useEffect is called on initial render(just once);
  // if dependency array is given as "listOfAllRestaurants" then it is being called everytime when listOfAllRestaurants is updated.


react uses reconciliation algo also known as "React Fiber" came in react 16 earlier it was reconcialation algo
virtual dom: representation of an actual dom

// <link> under the hood use anchor tag



//   useEffect(() => {
    fetchData();

    // this will be called when the component is destroyed
    return () => {};
  }, []);






  # Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()



#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing




 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector


# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
 