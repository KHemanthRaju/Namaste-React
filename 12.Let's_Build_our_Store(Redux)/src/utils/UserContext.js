import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Hemanth",
    email: "hemanth@gmail.com",
  },
});

export default userContext;
