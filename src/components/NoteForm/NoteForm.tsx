import { useState } from 'react';
import { type Note } from '../../types/note.types';

interface NoteFormProps {
    onAdd: (newNote: Note) => void;
}

const NoteForm = ({ onAdd }: NoteFormProps) => {
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [category, setCategory] = useState<Note['category']>('Work');

    function addNote() {
        if (!title.trim() || !text.trim()) {
            alert('Заполните все поля!');
            return;
        }

        const newNote: Note = {
            id: Date.now(),
            title: title.trim(),
            text: text.trim(),
            date: new Date().toLocaleDateString('ru-RU'),
            category: category,
        };

        onAdd(newNote);
    }

    return (
        <div>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <input value={text} onChange={e => setText(e.target.value)} />
            <select
                value={category}
                onChange={e => setCategory(e.target.value as Note['category'])}
            >
                <option value='Work'>Работа</option>
                <option value='Personal'>Личное</option>
                <option value='Study'>Учеба</option>
            </select>
            <button onClick={addNote}>Добавить</button>
        </div>
    );
};

export default NoteForm;
