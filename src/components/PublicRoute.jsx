import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const { isSignedIn } = useUser();
  return isSignedIn ? <Navigate to="/dashboard" /> : children;
}

export default PublicRoute;
