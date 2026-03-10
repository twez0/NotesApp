import AddButton from '../AddButton/addButton.tsx';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__logo'>ToDay</h1>
            <AddButton></AddButton>
        </header>
    );
};

export default Header;
