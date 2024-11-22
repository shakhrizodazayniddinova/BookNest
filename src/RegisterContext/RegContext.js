import { createContext } from "react";

// login context
const RegisteredContext = createContext({ isLogin: false, setLogin: () => {} });

export { RegisteredContext };