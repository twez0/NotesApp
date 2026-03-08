import DeleteIcon from '../icons/DeleteIcon.tsx';
import './NoteItem.scss';

const NoteItem = ({
    id,
    title,
    text,
    date,
    category,
}: {
    id: number;
    title: string;
    text: string;
    date: string;
    category: string;
}) => {
    return (
        <div className='note-card'>
            <div className='note-card__category'>{category}</div>
            <div className='note-card__content'>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
            <div className='note-card__info'>
                <p>{date}</p>
                <DeleteIcon size={30} color={'#FF6D70'}></DeleteIcon>
            </div>
        </div>
    );
};

export default NoteItem;
