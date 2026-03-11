import AddIcon from '../icons/AddIcon.tsx';
import './AddButton.scss';

interface AddButtonProps {
    onClick: () => void;
}

const AddButton = ({ onClick }: AddButtonProps) => {
    return (
        <button onClick={onClick} className='add-btn'>
            <AddIcon size={30} color={'#FFFFFF'}></AddIcon>
        </button>
    );
};

export default AddButton;
