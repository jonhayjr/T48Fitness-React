import React from 'react';

/* Import Components */
import Nav from './Nav';

type HeaderProps = {
    name: string
}

const Header = ({name}:HeaderProps) => {
 
    return (
        <header className="bg-black p-5 flex flex-col justify-center items-center">
            <h1 className="text-white text-center font-bold text-3xl">{name.toUpperCase()}</h1>
            <Nav/>
        </header>
    )
}

export default Header
