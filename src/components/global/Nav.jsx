import { NAV } from '../../constants/messages'
import { Link } from 'react-router-dom';

const createNav = () => {
    return NAV.map((item) => {
        return <li className='mx-5'>
            <Link className="text-xl underline" to={item.link}>{item.name}</Link></li>
    })
}
const Nav = () => {
    return <ul className='flex'>
        {createNav()}
    </ul>
}

export default Nav;