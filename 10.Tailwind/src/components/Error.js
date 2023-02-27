import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>OOPS</h2>
      <h5>Something went wrong!!!</h5>
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
};

export default Error;
