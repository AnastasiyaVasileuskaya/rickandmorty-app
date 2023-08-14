import './Header.css'

export default function Header({title, color}) {
    return (
        <header
            data-cy="header"
            style={{backgroundColor: color}}
            className="Header"
        >
            <h1>{title}</h1>
        </header>
    )
}
