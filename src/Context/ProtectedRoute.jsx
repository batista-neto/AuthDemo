import { Navigate } from "react-router-dom";
import { useAuth } from "./context"

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if(!user) {
        //user is not authenticated
        return <Navigate to="/" />
    }
    return children;
};