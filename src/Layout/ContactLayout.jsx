import { NavLink, Outlet } from 'react-router-dom'
import Contact from '../Pages/Contact'

const ContactLayout = () => {
    return (
        <>
            <Contact />
            <nav>
                <NavLink to="faq">FAQ</NavLink>
                <NavLink to="help">Help</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default ContactLayout