import { type Note } from '../../types/note.types.ts';
import CategoryButton from '../CategoryButton/CategoryButton.tsx';
import './Filters.scss';

interface FiltersProps {
    category: string;
    setSearch: (value: string) => void;
    onFilter: (category: 'All' | Note['category']) => void;
}

const Filters = ({ category, setSearch, onFilter }: FiltersProps) => {
    const searchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <div className='filters'>
            <input
                className='filters-search'
                onChange={searchInputChange}
                placeholder='Поиск...'
            />
            <div className='filters-btns'>
                <CategoryButton
                    variant='filter'
                    isActive={category === 'All'}
                    label={'Все'}
                    category={category}
                    onClick={() => onFilter('All')}
                ></CategoryButton>
                <CategoryButton
                    variant='filter'
                    isActive={category === 'Work'}
                    label={'Работа'}
                    category={category}
                    onClick={() => onFilter('Work')}
                ></CategoryButton>
                <CategoryButton
                    variant='filter'
                    isActive={category === 'Personal'}
                    label={'Личное'}
                    category={category}
                    onClick={() => onFilter('Personal')}
                ></CategoryButton>
                <CategoryButton
                    variant='filter'
                    isActive={category === 'Study'}
                    label={'Учеба'}
                    category={category}
                    onClick={() => onFilter('Study')}
                ></CategoryButton>
            </div>
        </div>
    );
};

export default Filters;
