import NoteForm from './components/NoteForm/NoteForm.tsx';
import useLocalStorage from './hooks/useLocalStorage.ts';
import { type Note } from './types/note.types.ts';

function App() {
    const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);

    return (
        <>
            <NoteForm
                onAdd={newNote => setNotes(prev => [...prev, newNote])}
            ></NoteForm>
        </>
    );
}

export default App;
