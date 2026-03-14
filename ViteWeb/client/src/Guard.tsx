import { Navigate } from "react-router";

export const Guard = ({ children }: React.PropsWithChildren) => {

    const res = localStorage.getItem("isConnect") ?? 'no';

    if (res == "no")
        return <Navigate to="/auth/login" replace />

    return children


}
export default Guard;
