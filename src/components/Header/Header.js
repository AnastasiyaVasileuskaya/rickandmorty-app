import './Header.css'

export default function Header({ title, colortext, color }) {
    return (
        <header
            style={{ color: colortext, backgroundColor: color }}
            className="Header"
        >
            {title}
        </header>
    )
}
