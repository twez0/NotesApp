import { type Note } from '../../types/note.types';
import AddButton from '../AddButton/AddButton.tsx';
import NoteItem from '../NoteItem/NoteItem.tsx';
import './NoteList.scss';

interface NoteListProps {
    notes: Note[];
    openForm: () => void;
    onDelete: (id: number) => void;
}

const NoteList = ({ notes, openForm, onDelete }: NoteListProps) => {
    return (
        <div className='note-list'>
            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    onDelete={() => onDelete(note.id)}
                ></NoteItem>
            ))}
            <AddButton onClick={openForm}></AddButton>
        </div>
    );
};

export default NoteList;
