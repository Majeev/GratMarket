import { RiAccountCircleLine } from 'react-icons/Ri';
import { useState } from 'react';
import Button from './UI/Button.jsx'

function Header() {
    const [login, setLogin] = useState(false);


    const handleLogin = () => {
      setLogin(!login)
    }
    return (
        <>
            <div className='bg-white flex justify-between'>
                <h1 className='text-orange-500 font-bold text-4xl mx-2'>
                    GratMarket
                </h1>
                <button className='text-4xl mx-2' onClick={handleLogin} >
                    <RiAccountCircleLine />
                </button>
            </div>
           {login && <div className='flex flex-col bg-white w-3/6 m-5 p-2'>
                <Button text={'Zaloguj sie'} />
                <Button text={'Zarejestruj sie'} />
            </div> }
        </>
    );
}

export default Header;
