import { useEffect, useState } from 'react';
import Filters from './components/Filters/Filters.tsx';
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

    const setFilterCategory = (category: 'All' | Note['category']) =>
        setFilter(category);

    const deleteNote = (id: number) => {
        setNotes(prev => prev.filter(note => note.id !== id));
    };

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedSearch(search), 700);

        return () => clearTimeout(timeout);
    }, [search]);

    const filteredNotes = notes.filter(note => {
        const matchesSearch =
            note.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            note.text.toLowerCase().includes(debouncedSearch.toLowerCase());
        const matchesCategory = filter === 'All' || note.category === filter;

        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <div className='container'>
                <Header openForm={openForm}></Header>
                <Filters
                    category={filter}
                    setSearch={setSearch}
                    onFilter={setFilterCategory}
                ></Filters>
                <NoteForm
                    isOpen={isFormOpen}
                    closeForm={closeForm}
                    onAdd={newNote => setNotes(prev => [...prev, newNote])}
                ></NoteForm>

                <NoteList
                    openForm={openForm}
                    notes={filteredNotes}
                    onDelete={deleteNote}
                ></NoteList>
            </div>
        </>
    );
}

export default App;
