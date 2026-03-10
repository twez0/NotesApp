import AddIcon from '../icons/AddIcon.tsx';
import './AddButton.scss';

const AddButton = () => {
    return (
        <button className='add-btn'>
            <AddIcon size={30} color={'#FFFFFF'}></AddIcon>
        </button>
    );
};

export default AddButton;
