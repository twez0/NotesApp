import Header from './components/Header/Header.tsx';
import NoteForm from './components/NoteForm/NoteForm.tsx';
import NoteList from './components/NoteList/NoteList.tsx';
import useLocalStorage from './hooks/useLocalStorage.ts';
import './styles/main.scss';
import { type Note } from './types/note.types.ts';

function App() {
    const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);

    const deleteNote = (id: number) => {
        setNotes(prev => prev.filter(note => note.id !== id));
    };

    return (
        <>
            <div className='container'>
                <Header></Header>
                <NoteForm
                    onAdd={newNote => setNotes(prev => [...prev, newNote])}
                ></NoteForm>

                <NoteList notes={notes} onDelete={deleteNote}></NoteList>
            </div>
        </>
    );
}

export default App;
