## 1. What is Microservice?

Microservices are a software architecture style in which a large application is broken down into smaller, independently deployable services. 
An architecture style refers to a set of guidelines, principles, and patterns for designing and building software systems. It provides a framework for organizing 
and structuring the different components and modules of a system, as well as for specifying how those components and modules interact with each other.

## 2. What is Monolithic Architecture?

A traditional, all-in-one approach where all components of the system are tightly integrated into a single codebase and deployable unit. 
It’s simple to develop and deploy, but can be challenging to scale and evolve over time.

Note : To know more about Microservices and Monolithic Architectures : https://leetcode.com/discuss/interview-question/3100171/microservices-architecture

## 3. Difference between Monolithic Architecture and Microservices?

<img width="542" alt="image" src="https://user-images.githubusercontent.com/49878564/215317227-fe547e02-d7b3-4d07-a82b-a3f021afb216.png">

## 4. Why do we need a useEffect Hook?

The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>);
  
```
  useEffect(() => {
    console.log("Message");
  },[]);
  
```
Note : In Functional Based components we use useEffect() whereas in Class-Based Components, we use ComponentDidMount, ComponentDidUpdate.

## 5. What is Optional Chaining?
The optional chaining (?.) operator accesses an object's property or calls a function. 
If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.
The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

```
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  
```
## 6. What is the difference between JS Expression and JS Statement?
JavaScript distinguishes expressions and statements. An expression produces a value and can be written wherever a value is expected, 
for example as an argument in a function call.
  
For example, these are all expressions:

- 1 → produces 1
- "hello" → produces "hello"
- 5 * 10 → produces 50
- num > 100 → produces either true or false
- isHappy ? "🙂" : "🙁" → produces an emoji
- [1, 2, 3].pop() → produces the number 3  

Roughly, a statement performs an action. Loops and if statements are examples of statements. 
A program is basically a sequence of statements (we’re ignoring declarations here).
  
- let hi = 5;
```
if (hi > 10) {
  // More statements here
}
```
Note : You can put any valid **JavaScript expression** inside the curly braces in JSX but not Javascript Statement while working on React Projects.

## 7. What is Conditional Rendering? Explain with code Example.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements 
representing the current state, and let React update the UI to match them.
```
  function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```

## 8. What is CORS?
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other 
than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request 
to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, 
the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a 
request for https://domain-b.com/data.json.

For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, 
XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request 
resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
  
Note : We can use CORS chrome Extension in this case.
  
## 9. What is Shimmer UI?
  
Shimmer is a temporary animation placeholder for when a service call takes time to return data and we don't want to block rendering the rest of the UI.
It mimics the page’s layout by showing its elements in a shape similar to the actual content as it is loading and becoming available (i.e. when network latency allows).

A shimmer screen is essentially a wireframe of the page, with placeholder boxes for text and images.
<img width="542" alt="image" src="https://tyler-technologies.github.io/design-guide-gallery/614b7f505575dbad9604b142a8e66cee/shimmer.gif">
  
## 10. What is aync and await?
The async keyword is used to define an asynchronous function, which returns a AsyncFunction object. The await keyword is used to pause async function execution 
until a Promise is fulfilled, that is resolved or rejected, and to resume execution of the async function after fulfillment.

## 11. What is the use of `const json = await data.json()` in getReaturants?
To convert the fetched api data into Json Format.

