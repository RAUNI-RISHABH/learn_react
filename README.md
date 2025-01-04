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