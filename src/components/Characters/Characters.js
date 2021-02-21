import './Characters.css'
import Card from '../Card/Card'

export default function Characters({
  title,
  hidden,
  characters,
  filteredStatus,
  userInput,
  setLiked,
}) {
  if (hidden) {
    return null
  }
  return (
    <div className="Characters" hidden={hidden}>
      {characters
        .filter(
          character =>
            filteredStatus === 'All characters' ||
            character.species === filteredStatus
        )
        .filter(character =>
          character.name.toLowerCase().includes(userInput.toLowerCase())
        )
        .map(character => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            gender={character.gender}
            origin={character.origin.name}
            location={character.location.name}
            isLiked={character.isLiked}
            setLiked={setLiked}
          />
        ))}
    </div>
  )
}
