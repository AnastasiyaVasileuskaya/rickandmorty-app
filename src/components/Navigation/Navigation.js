import './Navigation.css'

export default function Navigation({ onNavigate, activeButton }) {
    return (
        <nav className="Navigation">
            <button
                className={activeButton === 'Characters' ? 'active' : ''}
                onClick={() => onNavigate('Characters')}
            >
                Characters
            </button>
            <button
                className={activeButton === 'Location' ? 'active' : ''}
                onClick={() => onNavigate('Location')}
            >
                Location
            </button>
            <button
                className={activeButton === 'Episode' ? 'active' : ''}
                onClick={() => onNavigate('Episode')}
            >
                Episode
            </button>
        </nav>
    )
}
