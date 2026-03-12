import { useState } from 'react';
import Header from './components/Header/Header.tsx';
import NoteForm from './components/NoteForm/NoteForm.tsx';
import NoteList from './components/NoteList/NoteList.tsx';
import useLocalStorage from './hooks/useLocalStorage.ts';
import './styles/main.scss';
import { type Note } from './types/note.types.ts';

function App() {
    const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    const [search, setSearch] = useState<string>('');
    const [debouncedSearch, setDebouncedSearch] = useState<string>('');
    const [filter, setFilter] = useState<'All' | Note['category']>('All');

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);

    const deleteNote = (id: number) => {
        setNotes(prev => prev.filter(note => note.id !== id));
    };

    return (
        <>
            <div className='container'>
                <Header openForm={openForm}></Header>
                <NoteForm
                    isOpen={isFormOpen}
                    closeForm={closeForm}
                    onAdd={newNote => setNotes(prev => [...prev, newNote])}
                ></NoteForm>

                <NoteList
                    openForm={openForm}
                    notes={notes}
                    onDelete={deleteNote}
                ></NoteList>
            </div>
        </>
    );
}

export default App;
