import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({children} ) => {
  const user = useSelector((state) => state.user);

  if (user) {
    console.log("User is logged in");
    return children;    
  }

  return <Navigate to="/" />;
};
export default ProtectRoutes;
