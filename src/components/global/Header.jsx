import Logo from './Logo';
import Nav from './Nav';
import Cart from './Cart';

const Header = () => {
    return <header className='flex justify-between bg-slate-300 p-4'>
        <Logo />
        <Nav />
        <Cart />
    </header>
}

export default Header;