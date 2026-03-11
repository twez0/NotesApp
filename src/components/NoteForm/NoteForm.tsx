import { useState } from 'react';
import { type Note } from '../../types/note.types';
import CloseButton from '../CloseButton/CloseButton.tsx';
import './NoteForm.scss';

interface NoteFormProps {
    isOpen: boolean;
    closeForm: () => void;
    onAdd: (newNote: Note) => void;
}

const NoteForm = ({ isOpen, closeForm, onAdd }: NoteFormProps) => {
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
        <div className={`form-bg ${isOpen && 'open'}`}>
            <div className={`add-form ${isOpen && 'form-visible'}`}>
                <CloseButton onClick={closeForm}></CloseButton>
                <h3>Добавить новую задачу</h3>
                <input
                    className='add-form__title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    className='add-form__text'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <div className='add-form__category-select'>
                    <button
                        type='button'
                        className={`add-form__category-btn work ${category === 'Work' ? 'active' : ''}`}
                        onClick={() => setCategory('Work')}
                    >
                        Работа
                    </button>
                    <button
                        type='button'
                        className={`add-form__category-btn personal ${category === 'Personal' ? 'active' : ''}`}
                        onClick={() => setCategory('Personal')}
                    >
                        Личное
                    </button>
                    <button
                        type='button'
                        className={`add-form__category-btn study ${category === 'Study' ? 'active' : ''}`}
                        onClick={() => setCategory('Study')}
                    >
                        Учеба
                    </button>
                </div>
                <button className='add-form__btn' onClick={addNote}>
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default NoteForm;
