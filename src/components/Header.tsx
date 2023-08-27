import React from 'react';

function Header() {
    return (
        <>
            <div className='bg-white flex justify-between'>
              <h1 className='text-orange-500 font-bold text-4xl'>GratMarket</h1>
              <button className='bg-orange-500 text-white text-2xl p-2'>Zaloguj sie</button>
            </div>
        </>
    );
}

export default Header;
