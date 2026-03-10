import { type Note } from '../../types/note.types';
import AddButton from '../AddButton/addButton.tsx';
import NoteItem from '../NoteItem/NoteItem.tsx';
import './NoteList.scss';

interface NoteListProps {
    notes: Note[];
    onDelete: (id: number) => void;
}

const NoteList = ({ notes, onDelete }: NoteListProps) => {
    return (
        <div className='note-list'>
            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    onDelete={() => onDelete(note.id)}
                ></NoteItem>
            ))}
            <AddButton></AddButton>
        </div>
    );
};

export default NoteList;
