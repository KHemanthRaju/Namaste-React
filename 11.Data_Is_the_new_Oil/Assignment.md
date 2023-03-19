## 1. What is prop drilling?

Props are used to pass data from one component to another component. Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.
Props drilling can be avoided using ReactContext API or Redux library
Reference : https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/

## 2. What is lifting the state up?

In React, each component has its state. Lifting the state up is a valuable concept for React developers since we often have a state that is accommodated within a single component but needs to be shared with its siblings. We lift the state up to make the parent state a single shared state and a sole "source of truth" and pass the parent's data to its children. 
This concept is called lifting state up. It is of great use to maintain data consistency in our react applications.
Time to use Lift up the State: If the data in “parent and children components” or in “cousin components” is Not in Sync.

## 3. What is Context Provider and Context Consumer?
Context-provider : Context-provider
const value = useContext(MyContext); Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
Context-Consumer :


## 4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

