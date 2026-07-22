import { Link, useLocation } from "react-router-dom";

function FooterLink({ to, children, ...props }) {
    const { pathname } = useLocation();

    const handleClick = () => {
        if (pathname === to) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <Link to={to} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
}

export default FooterLink;