import React from 'react';

type Props = {
    text: string;
};

function Button({ text }: Props) {
    return (
        <button className='bg-orange-500 text-white text-2xl p-2 my-2 mx-3'>
            {text}
        </button>
    );
}

export default Button;
