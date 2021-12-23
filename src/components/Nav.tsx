import {NavLink} from 'react-router-dom';

type NavProps = {
    isActive: boolean
}
const Nav = () => {
    return (
        <nav className="flex flex-col">
            <NavLink to="/" className={`text-white mt-7 text-xl ${({ isActive}:NavProps) => (isActive ? 'active' : '')}`}>Home</NavLink>
            <NavLink to="/about" className={`text-white mt-7 text-xl ${({ isActive}:NavProps) => (isActive ? 'active' : '')}`}>About</NavLink>
            <NavLink to="/pricing" className={`text-white mt-7 text-xl ${({ isActive}:NavProps) => (isActive ? 'active' : '')}`}>Pricing</NavLink>
        </nav>
    )
}

export default Nav
