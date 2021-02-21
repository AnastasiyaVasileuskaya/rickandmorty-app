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
        className={activeButton === 'Liked' ? 'active' : ''}
        onClick={() => onNavigate('Liked')}
      >
        Liked Characters
      </button>
    </nav>
  )
}
