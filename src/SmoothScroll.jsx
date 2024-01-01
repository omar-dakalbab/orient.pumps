import { useEffect } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
function SmoothScroll({ children }) {
    const location = useNavigate();
    const navType = useNavigationType();
    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, [location]);
    return <>{children}</>;
}
export default SmoothScroll;
