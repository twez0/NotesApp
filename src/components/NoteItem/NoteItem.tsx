import { categoryConfig, type Note } from '../../types/note.types';
import DeleteIcon from '../icons/DeleteIcon.tsx';
import './NoteItem.scss';

interface NoteItemProps {
    note: Note;
    onDelete: () => void;
}

const NoteItem = ({ note, onDelete }: NoteItemProps) => {
    const { title, text, date, category } = note;
    const categoryInfo = categoryConfig[category];

    return (
        <div className='note-card'>
            <div className={`note-card__category ${categoryInfo.className}`}>
                {categoryInfo.label}
            </div>
            <div className='note-card__content'>
                <h5>{title}</h5>
                <p>{text.length >= 77 ? text.slice(0, 70) + '...' : text}</p>
            </div>
            <div className='note-card__info'>
                <p>{date}</p>
                <button onClick={onDelete}>
                    <DeleteIcon size={30}></DeleteIcon>
                </button>
            </div>
        </div>
    );
};

export default NoteItem;
