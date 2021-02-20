import './CharacterSearch.css'

export default function CharacterSearch({ userInput, setUserInput }) {
    return (
        <input
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            placeholder="Search character..."
        />
    )
}
