import { Navigate } from "react-router";

export const AuthGuard = ({ children }: React.PropsWithChildren) => {

    const res = localStorage.getItem("isConnect") ?? 'no';

    if (res == "yes")
        return <Navigate to="/dashboard" replace />
  
    return children


}
export default AuthGuard;
