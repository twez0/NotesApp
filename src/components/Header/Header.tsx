import AddButton from '../AddButton/AddButton.tsx';
import './Header.scss';

interface HeaderProps {
    openForm: () => void;
}

const Header = ({ openForm }: HeaderProps) => {
    return (
        <header className='header'>
            <h1 className='header__logo'>ToDay</h1>
            <AddButton onClick={openForm}></AddButton>
        </header>
    );
};

export default Header;
