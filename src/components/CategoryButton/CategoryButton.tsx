import './CategoryButton.scss';

interface CategoryButtonProps {
    isFilter: boolean;
    isActive: boolean;
    label: string;
    category: string;
    onClick: () => void;
}

const CategoryButton = ({
    isFilter,
    isActive,
    label,
    category,
    onClick,
}: CategoryButtonProps) => {
    if (!isFilter) {
        return (
            <button
                type='button'
                className={`category-btn ${category} ${isActive ? 'active' : ''}`}
                onClick={onClick}
            >
                {label}
            </button>
        );
    }
};

export default CategoryButton;
