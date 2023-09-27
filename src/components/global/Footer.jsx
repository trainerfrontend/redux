import { NavLink } from "react-router-dom";

const Footer = () => {
    return <footer className="text-sm text-center p-2">
        <NavLink to="/">Terms</NavLink>
        <NavLink to="about">about</NavLink>
        <NavLink to="contact">contact</NavLink>
        copyright 2023-2024</footer>

}

export default Footer;