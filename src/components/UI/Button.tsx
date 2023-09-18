import { useNavigate } from 'react-router-dom';

type Props = {
    text: string;
    path: string;
};

function Button({ text, path }: Props) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(path);
    };

    return (
        <button
            className='bg-orange-500 text-white text-2xl p-3 my-2 mx-3'
            onClick={handleNavigation}>
            {text}
        </button>
    );
}

export default Button;
