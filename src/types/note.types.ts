export interface Note {
    id: number;
    title: string;
    text: string;
    date: string;
    category: 'Study' | 'Personal' | 'Work';
}

export const categoryConfig = {
    Study: {
        label: 'Учёба',
        className: '--study',
    },
    Personal: {
        label: 'Личное',
        className: '--personal',
    },
    Work: {
        label: 'Работа',
        className: '--work',
    },
};
