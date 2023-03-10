## 1. What is prop drilling?

Props are used to pass data from one component to another component. Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.
Props drilling can be avoided using ReactContext API or Redux library
Reference : https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/

## 2. What is lifting the state up?

In React, each component has its state. Lifting the state up is a valuable concept for React developers since we often have a state that is accommodated within a single component but needs to be shared with its siblings. We lift the state up to make the parent state a single shared state and a sole "source of truth" and pass the parent's data to its children. 
This concept is called lifting state up. It is of great use to maintain data consistency in our react applications.
Time to use Lift up the State: If the data in “parent and children components” or in “cousin components” is Not in Sync.

## 3. What is Context Provider and Context Consumer?




## 4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expession or a variable or an element.
The `{}` can embed a javascript expression or a values inside it.

- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A compoenet is written inside the `{<  />}` expression.

- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no children components.The opening and closing tags are created to include the child components.

e.g.

```
<TitleComponent>
    <ChildComponen1 />
    <ChildComponen2 />
    <ChildComponen3 />
</TitleComponent>
