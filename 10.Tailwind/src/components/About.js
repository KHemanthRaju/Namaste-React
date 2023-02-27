import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AboutClass from "./AboutClass";

const About = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Namaste React Developer");
  //   }, 1000);
  //   console.log("using UseEffect Hook");

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      <h1>About Us Page</h1>
      <p>This is Namaste React Course</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* <AboutClass /> */}

      <Outlet />
    </>
  );
};

export default About;
