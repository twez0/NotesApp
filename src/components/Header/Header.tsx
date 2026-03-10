import AddIcon from '../icons/AddIcon.tsx';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__logo'>ToDay</h1>
            <button className='header__btn'>
                <AddIcon size={30} color={'#FFFFFF'}></AddIcon>
            </button>
        </header>
    );
};

export default Header;
