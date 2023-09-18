import { RiAccountCircleLine } from 'react-icons/Ri';
import { useState } from 'react';
import Button from './UI/Button.jsx';

function Header() {
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin(!login);
    };

    return (
        <>
            <div className='bg-white flex justify-between items-center p-3'>
                <h1 className='text-orange-500 font-bold text-4xl '>
                    GratMarket
                </h1>
                <button
                    className={`text-5xl ${login && 'text-orange-500'} `}
                    onClick={handleLogin}>
                    <RiAccountCircleLine />
                </button>
            </div>
            {login && (
                <div className='flex flex-col bg-white w-3/6 m-3 p-2 absolute right-0 max-w-md'>
                    <Button text={'Zaloguj sie'} path={'/login'} />
                    <Button text={'Zarejestruj sie'} path={'/register'} />
                </div>
            )}
        </>
    );
}

export default Header;
