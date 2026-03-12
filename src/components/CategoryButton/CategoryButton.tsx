import './CategoryButton.scss';

interface CategoryButtonProps {
    variant?: 'default' | 'filter';
    isActive?: boolean;
    label: string;
    category: string;
    onClick: () => void;
}

const CategoryButton = ({
    variant = 'default',
    isActive = false,
    label,
    category,
    onClick,
}: CategoryButtonProps) => {
    return (
        <button
            type='button'
            className={`${variant}-category-btn ${category} ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default CategoryButton;
