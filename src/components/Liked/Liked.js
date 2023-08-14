import './Liked.css'
import Card from '../Card/Card'

export default function Liked({ hidden, characters, setLiked }) {
  if (hidden) {
    return null
  }
  return (
    <div className="Liked" hidden={hidden}>
      {characters
        .filter(character => character.isLiked)
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
