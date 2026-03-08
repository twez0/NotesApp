import NoteForm from './components/NoteForm/NoteForm.tsx';
import NoteItem from './components/NoteItem/NoteItem.tsx';
import useLocalStorage from './hooks/useLocalStorage.ts';
import './styles/main.scss';
import { type Note } from './types/note.types.ts';

function App() {
    const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);

    return (
        <>
            <NoteForm
                onAdd={newNote => setNotes(prev => [...prev, newNote])}
            ></NoteForm>

            <NoteItem
                id={0}
                title={'Разработка компонента поиска'}
                text={
                    'Нужно сделать компонент для поиска пользователей на React'
                }
                date={'03.03.2026'}
                category={'Работа'}
            ></NoteItem>
        </>
    );
}

export default App;
