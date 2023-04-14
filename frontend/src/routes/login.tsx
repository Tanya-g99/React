import React, { useState } from "react";
import { Login } from "../components/Login";

export const LoginRoute: React.FC = () => {
  const [isLogged, setLogged] = useState(false);

  return <Login login={() => setLogged(true)} />;
};
