import CloseIcon from '../icons/CloseIcon.tsx';
import './CloseButton.scss';

interface CloseButtonProps {
    onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
    return (
        <button onClick={onClick} className='close-btn'>
            <CloseIcon size={20}></CloseIcon>
        </button>
    );
};

export default CloseButton;
