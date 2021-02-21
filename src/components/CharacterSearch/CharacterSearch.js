import './CharacterSearch.css'

export default function CharacterSearch({ userInput, setUserInput, hidden }) {
  if (hidden) {
    return null
  }
  return (
    <input
      value={userInput}
      onChange={event => setUserInput(event.target.value)}
      placeholder="Search character..."
    />
  )
}
