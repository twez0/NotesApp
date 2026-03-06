export interface Note {
    id: number;
    title: string;
    text: string;
    date: string;
    category: 'Study' | 'Personal' | 'Work';
}

export type CreateNoteInput = Omit<Note, 'id' | 'date'>;
